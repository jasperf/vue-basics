<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import axios from 'axios'

const props = defineProps({
  volume: Number,
  grade: String,
  cost: Number,
})

const emit = defineEmits(['close', 'submit'])

// Validation schema
const orderSchema = yup.object({
  name: yup.string().required('Please enter a value!'),
  phone: yup.string().required('Please enter a value!').matches(/^[0-9]+$/, 'Field must contain only numbers!'),
  email: yup.string().email('Please enter a valid email!').required('Please enter a value!'),
  address: yup.string(),
})

// Form setup
const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: orderSchema,
  initialValues: {
    name: '',
    phone: '',
    email: '',
    address: '',
  }
})

const { value: name } = useField('name')
const { value: phone } = useField('phone')
const { value: email } = useField('email')
const { value: address } = useField('address')

const isSubmitting = ref(false)
const submitError = ref('')

// Handle form submission
const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  submitError.value = ''

  try {
    const orderData = {
      ...values,
      volume: props.volume,
      grade: props.grade,
      cost: props.cost,
      date: new Date().toISOString(),
    }

    // Send to API (you can change this URL to your actual API endpoint)
    await axios.post('http://localhost:3000/users', orderData)

    // Reset form and emit success
    resetForm()
    emit('submit', orderData)
  } catch (error) {
    console.error('Order submission error:', error)
    submitError.value = 'Order submission error. Please try again.'
  } finally {
    isSubmitting.value = false
  }
})

// Handle cancel
const handleCancel = () => {
  emit('close')
}
</script>

<template>
  <div class="modal modal-open">
    <div class="modal-box max-w-2xl">
      <h3 class="font-bold text-lg text-primary mb-4">Place Order</h3>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <!-- Name Field -->
        <div class="form-control">
          <label class="label">
            <span class="form-label">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              Name
            </span>
          </label>
          <input
            v-model="name"
            type="text"
            class="input input-bordered"
            :class="{ 'input-error': errors.name }"
            placeholder="Enter your name"
          />
          <span v-if="errors.name" class="warning-message">
            {{ errors.name }}
          </span>
        </div>

        <!-- Phone Field -->
        <div class="form-control">
          <label class="label">
            <span class="form-label">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Phone
            </span>
          </label>
          <input
            v-model="phone"
            type="tel"
            class="input input-bordered"
            :class="{ 'input-error': errors.phone }"
            placeholder="Enter phone number"
          />
          <span v-if="errors.phone" class="error-message">
            {{ errors.phone }}
          </span>
        </div>

        <!-- Email Field -->
        <div class="form-control">
          <label class="label">
            <span class="form-label">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email
            </span>
          </label>
          <input
            v-model="email"
            type="email"
            class="input input-bordered"
            :class="{ 'input-error': errors.email }"
            placeholder="Enter email"
          />
          <span v-if="errors.email" class="error-message">
            {{ errors.email }}
          </span>
        </div>

        <!-- Address Field -->
        <div class="form-control">
          <label class="label">
            <span class="form-label">Delivery Address</span>
          </label>
          <textarea
            v-model="address"
            class="textarea textarea-bordered"
            rows="3"
            placeholder="Enter delivery address (optional)"
          ></textarea>
        </div>

        <!-- Order Summary -->
        <div class="alert alert-info">
          <div>
            <h4 class="font-bold">Order Details:</h4>
            <p>Concrete Volume: {{ volume.toFixed(2) }} m³</p>
            <p>Grade: {{ grade }}</p>
            <p>Total: {{ cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="submitError" class="alert alert-error">
          <span>{{ submitError }}</span>
        </div>

        <!-- Actions -->
        <div class="modal-action">
          <button
            type="button"
            class="btn btn-ghost"
            :disabled="isSubmitting"
            @click="handleCancel"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="loading loading-spinner"></span>
            {{ isSubmitting ? 'Sending...' : 'Submit' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Additional dialog-specific styles if needed */
</style>
