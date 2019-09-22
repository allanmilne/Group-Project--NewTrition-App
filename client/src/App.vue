<template lang="html">
  <div id="app">
    <calorie-counter/>
  </div>
</template>

<script>
import CalorieCounter from './components/CalorieCounter';
import { eventBus } from './main';

export default {
  name: 'app',
  components: {
    'calorie-counter': CalorieCounter
  }
}
</script>

<style lang="css" scoped>
</style>
