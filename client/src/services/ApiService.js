const baseURL = 'http://localhost:3000'

export default {
  getItemDetails(searchedItem) {
    return fetch(`${baseURL}/api/items?query=${searchedItem}`)
  },
  getSpecificItemDetails(selectedItem) {    
    const preparedItem = { query: selectedItem}
    return fetch(`${baseURL}/api/items/specific_item`, preparedItem)
  }
}



