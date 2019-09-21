<template>
  
</template>

<script>
export default {
  data() {
    return {
      storedData: []
    }
  },
  mounted() {
    fetch('https://trackapi.nutritionix.com/v2/search/item?nix_item_id=513fc9e73fe3ffd40300109f', {
    headers: {
      'x-app-key': '',
      'x-app-id': ''
      }
    })
    .then(response => response.json())
    .then(data => this.storedData = data);
  }
}
</script>

<style>

</style>