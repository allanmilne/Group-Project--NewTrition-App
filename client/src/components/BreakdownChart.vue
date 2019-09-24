<template>
    <div class="chart" v-if="selectedItem === !selectedItem">
      <highcharts id="pie-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>

import ApiService from '../services/ApiService.js';

export default {
  
  mounted() {
    ApiService.getItem()
    .then(item => this.testItem = item);
  },
  props: ["selectedItem"], 
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
        },
        exporting: {
          enabled: false
        },
        title: {
          text: 'Nutritional Facts'
        },
        subtitle: {
          text: `${this.food_name} - 1 Serving, ${this.nf_calories} Kcal`
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
        },
        series: [{
          type: 'pie',
          name: 'Food Breakdown',
          keys: ['name', 'y', 'sliced', 'selected'],
          data: [
              [`Total Fat ${this.nf_total_fat}g`, this.nf_total_fat],
              [`Saturated Fat ${this.nf_saturated_fat}g`, this.nf_saturated_fat],
              [`Sugars ${this.nf_sugars}g`, this.nf_sugars],
              [`Salt ${this.nf_sodium}mg`, (this.nf_sodium / 1000)]
          ]
        }]
      }
    };
  }
}
</script>

<style scoped>
#pie-chart {
  height: auto;
}
</style>
