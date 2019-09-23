<template lang="html">
  <div id="app">
    <calorie-counter/>
    <breakdown-chart/>
  </div>
</template>

<script>
import CalorieCounter from './components/CalorieCounter';
import { eventBus } from './main';
import BreakdownChart from './components/BreakdownChart.vue'

export default {
  name: 'app',
  components: {
    'calorie-counter': CalorieCounter,
    'breakdown-chart': BreakdownChart
  },
  props: [""]
}
</script>

<style lang="css" scoped>
</style>