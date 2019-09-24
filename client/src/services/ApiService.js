const baseURL = 'http://localhost:3000'

export default {
  getItemDetails(searchedItem) {
    return fetch(`${baseURL}/api/items?query=${searchedItem}`)
  },
  getSpecificItemDetails(selectedItem) {
    return fetch(`${baseURL}/api/items/specific_item?query=${searchedItem}`)
  }
}



