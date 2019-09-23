<template lang="html">
  <div id="app">
    <nutrition-home/>
    <calorie-counter/>
    <breakdown-chart/>
  </div>
</template>

<script>
import Nutrition from './components/NutritionApp.vue'
import CalorieCounter from './components/CalorieCounter';
import { eventBus } from './main';
import BreakdownChart from './components/BreakdownChart.vue'

export default {
  name: 'app',
  components: {
    Nutrition,
    'calorie-counter': CalorieCounter,
    'breakdown-chart': BreakdownChart,
    'nutrition-home': NutritionApp
  },
  props: [""]
}
</script>

<style lang="css" scoped>
</style>
