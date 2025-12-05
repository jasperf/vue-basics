<script setup>
import { ref, computed, watch } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import OrderDialog from './OrderDialog.vue'

// Foundation type state
const selectedType = ref('basement1')
const foundationTypes = ['basement1', 'basement2', 'basement3', 'basement4', 'basement5']

// Validation schemas
const measurementSchema = yup.object({
  sideA: yup.number().required('Field must contain only numbers!').positive(),
  sideB: yup.number().required('Field must contain only numbers!').positive(),
  sideC: yup.number().required('Field must contain only numbers!').positive(),
  sideD: yup.number().required('Field must contain only numbers!').positive(),
})

// Form setup for measurements
const { errors: measurementErrors, values: measurementValues } = useForm({
  validationSchema: measurementSchema,
  initialValues: {
    sideA: '',
    sideB: '',
    sideC: '',
    sideD: '',
  }
})

const { value: sideA } = useField('sideA')
const { value: sideB } = useField('sideB')
const { value: sideC } = useField('sideC')
const { value: sideD } = useField('sideD')

// Footer and header plate states
const footerEnabled = ref(false)
const footerThickness = ref(25)
const footerError = ref('')

const headerEnabled = ref(false)
const headerThickness = ref(18)
const headerError = ref('')

// Concrete grade state
const selectedGrade = ref('m100')
const concreteGrades = [
  { value: 'm100', label: 'm100', price: 3400 },
  { value: 'm150', label: 'm150', price: 3550 },
  { value: 'm200', label: 'm200', price: 3750 },
  { value: 'm250', label: 'm250', price: 3850 },
  { value: 'm300', label: 'm300', price: 3950 },
  { value: 'm350', label: 'm350', price: 4050 },
  { value: 'm400', label: 'm400', price: 4600 },
  { value: 'm450', label: 'm450', price: 4850 },
  { value: 'm500', label: 'm500', price: 5000 },
  { value: 'm550', label: 'm550', price: 5050 },
  { value: 'm600', label: 'm600', price: 5200 },
  { value: 'm650', label: 'm650', price: 5500 },
]

// Order dialog state
const showOrderDialog = ref(false)

// Computed: Preview image
const previewImage = computed(() => {
  if (footerEnabled.value && headerEnabled.value) return 'basement8'
  if (footerEnabled.value) return 'basement6'
  if (headerEnabled.value) return 'basement7'
  return selectedType.value
})

// Computed: Foundation type selector disabled
const typeSelectorsDisabled = computed(() => footerEnabled.value || headerEnabled.value)

// Computed: Validate footer thickness
watch(footerThickness, (val) => {
  if (val < 25 || val > 40) {
    footerError.value = 'Thickness must be between 25 and 40 cm'
  } else {
    footerError.value = ''
  }
})

// Computed: Validate header thickness
watch(headerThickness, (val) => {
  if (val < 18 || val > 22) {
    headerError.value = 'Thickness must be between 18 and 22 cm!'
  } else {
    headerError.value = ''
  }
})

// Computed: Calculate perimeter volume
const calculatePerimeterVolume = computed(() => {
  const a = parseFloat(sideA.value) || 0
  const b = parseFloat(sideB.value) || 0
  const d = (parseFloat(sideD.value) || 0) * 0.01 // cm to meters

  if (!a || !b || !d) return 0

  const base = a * b
  const innerA = a - (d * 2)
  const innerB = b - (d * 2)

  return base - (innerA * innerB)
})

// Computed: Calculate long wall volume
const calculateLongWall = computed(() => {
  const a = parseFloat(sideA.value) || 0
  const d = (parseFloat(sideD.value) || 0) * 0.01

  if (!a || !d) return 0

  return (a - d * 2) * d
})

// Computed: Calculate short wall volume
const calculateShortWall = computed(() => {
  const b = parseFloat(sideB.value) || 0
  const d = (parseFloat(sideD.value) || 0) * 0.01

  if (!b || !d) return 0

  return d * ((b - d * 3) / 2)
})

// Computed: Get base area for selected type
const baseArea = computed(() => {
  const s1 = calculatePerimeterVolume.value
  const long = calculateLongWall.value
  const short = calculateShortWall.value

  switch (selectedType.value) {
    case 'basement1':
      return s1
    case 'basement2':
      return s1 + long
    case 'basement3':
      return s1 + (long * 2)
    case 'basement4':
      return s1 + long + short
    case 'basement5':
      return s1 + long + (short * 2)
    default:
      return s1
  }
})

// Computed: Calculate footer plate volume
const footerVolume = computed(() => {
  if (!footerEnabled.value) return 0

  const a = parseFloat(sideA.value) || 0
  const b = parseFloat(sideB.value) || 0
  const thickness = footerThickness.value * 0.01 // cm to meters
  const allowance = 0.2 * 2 // 0.4m total

  return (a + allowance) * (b + allowance) * thickness
})

// Computed: Calculate header plate volume
const headerVolume = computed(() => {
  if (!headerEnabled.value) return 0

  const a = parseFloat(sideA.value) || 0
  const b = parseFloat(sideB.value) || 0
  const thickness = headerThickness.value * 0.01 // cm to meters

  return a * b * thickness
})

// Computed: Total concrete volume
const totalVolume = computed(() => {
  const c = parseFloat(sideC.value) || 0
  const foundationVolume = baseArea.value * c

  return foundationVolume + footerVolume.value + headerVolume.value
})

// Computed: Selected grade price
const selectedGradePrice = computed(() => {
  const grade = concreteGrades.find(g => g.value === selectedGrade.value)
  return grade ? grade.price : 0
})

// Computed: Total cost
const totalCost = computed(() => {
  return totalVolume.value * selectedGradePrice.value
})

// Computed: Can show order button
const canShowOrderButton = computed(() => {
  return sideA.value > 0 && sideB.value > 0 && sideC.value > 0 && sideD.value > 0
})

// Format volume to 2 decimal places
const formatVolume = (val) => val.toFixed(2)

// Format currency in USD
const formatCurrency = (val) => {
  return val.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

// Handle foundation type selection
const selectType = (type) => {
  if (!typeSelectorsDisabled.value) {
    selectedType.value = type
  }
}

// Handle order button click
const openOrderDialog = () => {
  showOrderDialog.value = true
}

// Handle order submission
const handleOrderSubmit = (orderData) => {
  console.log('Order submitted:', orderData)
  showOrderDialog.value = false
}
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-7xl">
    <!-- Title -->
    <h1 class="section-title app-headline">
      Foundation Concrete Calculator
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left Column: Inputs -->
      <div class="space-y-6">
        <!-- Foundation Type Selector -->
        <div class="card-section">
          <h2 class="text-xl font-bold text-primary mb-4">Select Foundation Type</h2>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="(type, index) in foundationTypes"
              :key="type"
              :class="[
                'btn btn-outline',
                selectedType === type && !typeSelectorsDisabled ? 'btn-type-active' : 'btn-type',
                typeSelectorsDisabled ? 'btn-disabled' : ''
              ]"
              :disabled="typeSelectorsDisabled"
              @click="selectType(type)"
            >
              Type {{ index + 1 }}
            </button>
          </div>
        </div>

        <!-- Measurement Inputs -->
        <div class="card-section">
          <h2 class="text-xl font-bold text-primary mb-4">Foundation Dimensions</h2>
          <div class="space-y-4">
            <!-- Side A -->
            <div class="form-control">
              <label class="label">
                <span class="form-label">Length of Side A, m</span>
              </label>
              <input
                v-model="sideA"
                type="number"
                step="0.1"
                class="input input-bordered"
                placeholder="0"
              />
              <span v-if="measurementErrors.sideA" class="error-message">
                {{ measurementErrors.sideA }}
              </span>
            </div>

            <!-- Side B -->
            <div class="form-control">
              <label class="label">
                <span class="form-label">Length of Side B, m</span>
              </label>
              <input
                v-model="sideB"
                type="number"
                step="0.1"
                class="input input-bordered"
                placeholder="0"
              />
              <span v-if="measurementErrors.sideB" class="error-message">
                {{ measurementErrors.sideB }}
              </span>
            </div>

            <!-- Side C -->
            <div class="form-control">
              <label class="label">
                <span class="form-label">Height of Strip C, m</span>
              </label>
              <input
                v-model="sideC"
                type="number"
                step="0.1"
                class="input input-bordered"
                placeholder="0"
              />
              <span v-if="measurementErrors.sideC" class="error-message">
                {{ measurementErrors.sideC }}
              </span>
            </div>

            <!-- Side D -->
            <div class="form-control">
              <label class="label">
                <span class="form-label">Thickness of Strip D, cm</span>
              </label>
              <input
                v-model="sideD"
                type="number"
                step="1"
                class="input input-bordered"
                placeholder="0"
              />
              <span v-if="measurementErrors.sideD" class="error-message">
                {{ measurementErrors.sideD }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer Plate -->
        <div class="card-section">
          <div class="form-control">
            <label class="label cursor-pointer justify-start gap-4">
              <input
                v-model="footerEnabled"
                type="checkbox"
                class="checkbox checkbox-primary"
              />
              <span class="form-label">Add Footer Plate</span>
            </label>
          </div>

          <div v-if="footerEnabled" class="mt-4 space-y-2">
            <div class="form-control">
              <label class="label">
                <span class="form-label">Plate Thickness, cm</span>
              </label>
              <input
                v-model.number="footerThickness"
                type="number"
                step="1"
                class="input input-bordered"
              />
              <span v-if="footerError" class="error-message">
                {{ footerError }}
              </span>
            </div>
            <div class="info-message">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>Recommended thickness: 25 to 40 cm</span>
            </div>
          </div>
        </div>

        <!-- Header Plate -->
        <div class="card-section">
          <div class="form-control">
            <label class="label cursor-pointer justify-start gap-4">
              <input
                v-model="headerEnabled"
                type="checkbox"
                class="checkbox checkbox-primary"
              />
              <span class="form-label">Add Ceiling/Header Plate</span>
            </label>
          </div>

          <div v-if="headerEnabled" class="mt-4 space-y-2">
            <div class="form-control">
              <label class="label">
                <span class="form-label">Plate Thickness, cm</span>
              </label>
              <input
                v-model.number="headerThickness"
                type="number"
                step="1"
                class="input input-bordered"
              />
              <span v-if="headerError" class="error-message">
                {{ headerError }}
              </span>
            </div>
            <div class="info-message">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>Recommended thickness: 18 to 22 cm</span>
            </div>
          </div>
        </div>

        <!-- Concrete Grade Selector -->
        <div class="card-section">
          <h2 class="text-xl font-bold text-primary mb-4">Concrete Grade</h2>
          <div class="form-control">
            <select v-model="selectedGrade" class="select select-bordered w-full">
              <option
                v-for="grade in concreteGrades"
                :key="grade.value"
                :value="grade.value"
              >
                {{ grade.label }} - ${{ grade.price }}/m³
              </option>
            </select>
          </div>
          <div class="info-message mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            <span>Recommended grade: m300-m350</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Preview and Results -->
      <div class="space-y-6">
        <!-- Preview Image -->
        <div class="card-section">
          <h2 class="text-xl font-bold text-primary mb-4">Foundation Schematic</h2>
          <div class="flex justify-center">
            <img
              :src="`/src/assets/${previewImage}.jpg`"
              :alt="previewImage"
              class="preview-image rounded-lg"
            />
          </div>
        </div>

        <!-- Results -->
        <div class="card-section">
          <h2 class="text-xl font-bold text-primary mb-4">Calculation Results</h2>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-base-content/70">Required concrete volume, m³</p>
              <p class="result-value">{{ formatVolume(totalVolume) }}</p>
            </div>
            <div>
              <p class="text-sm text-base-content/70">Concrete grade</p>
              <p class="result-value">{{ selectedGrade }}</p>
            </div>
            <div>
              <p class="text-sm text-base-content/70">Total cost</p>
              <p class="result-value">{{ formatCurrency(totalCost) }}</p>
            </div>
          </div>

          <!-- Order Button -->
          <div v-if="canShowOrderButton" class="mt-6">
            <button class="btn btn-primary w-full" @click="openOrderDialog">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Dialog -->
    <OrderDialog
      v-if="showOrderDialog"
      :volume="totalVolume"
      :grade="selectedGrade"
      :cost="totalCost"
      @close="showOrderDialog = false"
      @submit="handleOrderSubmit"
    />
  </div>
</template>

<style scoped>
/* Additional component-specific styles if needed */
</style>
