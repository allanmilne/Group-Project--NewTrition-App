<template>

  <div>
    <form v-on:submit="handleSubmit">
      <input type="text" placeholder="search for an item..." v-model="searchedItem">
      <button id="submit">Submit</button>
      <ul>
        <li>Banana</li>
        <li>Banana</li>
        <li>Banana</li>
        <li>Banana</li>
        <li>Banana</li>
        <li>Banana</li>
        <li>Banana</li>
      </ul>
    </form>
  </div>

</template>

<script>
import { eventBus } from '../main'
import ApiService from '../services/ApiService'

export default {
  data() {
    return {
    searchedItem: ""
    }
  },
  props: ['item'],
  methods: {
    // searchForItem() {
    //   let foundItem = this.item.find((item) => {
    //     return item.name.toLowerCase().indexOf(this.searchedItem.toLowerCase()) > -1
    //   })
    //   this.searchedItem = foundItem

    handleSubmit(event) {
      event.preventDefault()
      eventBus.$emit('searched-item', this.searchedItem)
    }
  }
}
  
</script>

<style>

</style>