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