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
<style>
#submit {
    width: 120px;
    height: 50px;
    border: none;
    outline: none;
    color: black;
    background: white;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

#submit:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #48ff00);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 5s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

#submit:active {
    color: white;
}

#submit:active:after {
    background: transparent;
}

#submit:hover:before {
    opacity: 1;
}

#submit:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>