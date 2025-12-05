<template>
  <div style="margin-top:20px;">
    <!-- <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p> -->
   <!-- // we are now passing the data to the todo component to render the todo list -->
   <!-- see below the delete-todo which will send the order to the Todo component -->
    <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" :todo.sync="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert'
import Todo from './Todo'

export default {
  // The TodoList component has to declare the properties it will accept when using it
  props: ['todos'],
  components: {
    Todo
  },
  methods: {
    // event handler to deal with the deleting of a todo item
    deleteTodo (todo) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
      const todoIndex = this.todos.indexOf(todo)
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      this.todos.splice(todoIndex, 1)
      sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success')
    },
    completeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
      sweetalert('Success!', 'To-Do completed!', 'success')
    }
  }
}
</script>