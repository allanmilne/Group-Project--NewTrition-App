<template>

  <div>
    <form v-on:submit="handleSubmit">
      <input type="text" placeholder="search for a food..." v-model="searchedItem">
      <button id="submit">Submit</button>
    </form>
      <table v-if="searchedItemDetails">
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Serving</th>
          <th></th>
        </thead>
        <tbody 
        v-for="item in searchedItemDetails.common" :item="item" :key="item.id"
        v-on:click="handleClick">
          <td><img class="item-image" :src="item.photo.thumb" alt=""></td>
          <td>{{ item.food_name }}</td>
          <td>{{ item.serving_qty }}</td>
          <td><input type="button" v-on:click="selectedItem = item.food_name"></td>
        </tbody>
      </table>
  </div>

</template>

<script>
import { eventBus } from '../main'
import ApiService from '../services/ApiService'

export default {
  data() {
    return {
    searchedItem: null,
    selectedItem: null
    }
  },
  props: ['itemDetail', 'searchedItemDetails'],
  methods: {
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

<style scoped>

.item-image {
  height: 40px;
  width: 40px;
}

table, th, td {
  border-collapse: collapse;
  /* border: 3px solid #2a75bb; */
}

th, td {
  border-bottom: 1px solid grey;
  padding: 10px;
  text-align: center;
}

</style>