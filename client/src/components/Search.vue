<template>

  <div>
    <form v-on:submit="handleSubmit">
      <input type="text" placeholder="search for an item..." v-model="searchedItem">
      <button id="submit">Submit</button>
      <ul v-for="item in itemDetail" :item="item" :key="item.id" >
        <li v-on:click="handleClick">{{ item.name }}</li>
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
    searchedItem: "",
    selectedItem: null
    }
  },
  props: ['itemDetail'],
  methods: {
    // searchForItem() {
    //   let foundItem = this.item.find((item) => {
    //     return item.name.toLowerCase().indexOf(this.searchedItem.toLowerCase()) > -1
    //   })
    //   this.searchedItem = foundItem

    handleSubmit(event) {
      event.preventDefault()
      eventBus.$emit('searched-item', this.searchedItem)
    },
    handleClick() {
      event.preventDefault()
      eventBus.$emit('selected-item', this.selectedItem)
    }
  }
}
  
</script>

<style>

</style>