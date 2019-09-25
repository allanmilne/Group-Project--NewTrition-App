<template>
    <div class="chart">
      <highcharts id="pie-chart" :options="chartOptions"></highcharts>
      <!-- <p>name: {{selectedItemDetails.food_name}}</p>
      <p>total fat: {{selectedItemDetails.nf_total_fat}}</p>
      <p>sat fat: {{selectedItemDetails.nf_saturated_fat}}</p>
      <p>sugars: {{selectedItemDetails.nf_sugars}}</p>
      <p>sodium: {{selectedItemDetails.nf_sodium}}</p> -->
    </div>
</template>

<script>

import ApiService from '../services/ApiService.js';

export default {
  props: ['selectedItemDetails'],
  data(){
    return {
      itemToChart: this.selectedItemDetails
    }
  },
  watch: {
    selectedItemDetails: () => {
      this.itemToChart = this.selectedItemDetails
    }
  }, 
  computed: {

    chartOptions()
      { return {
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
          text: `${itemToChart.food_name} - 1 Serving, ${itemToChart.nf_calories} Kcal`
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
              [`Total Fat ${itemToChart.nf_total_fat}g`, itemToChart.nf_total_fat],
              [`Saturated Fat ${itemToChart.nf_saturated_fat}g`, itemToChart.nf_saturated_fat],
              [`Sugars ${itemToChart.nf_sugars}g`, itemToChart.nf_sugars],
              [`Salt ${itemToChart.nf_sodium}mg`, (itemToChart.nf_sodium / 1000)]
            ]
          }]
        }
      }
    }
  }
}
</script>

<style scoped>
#pie-chart {
  height: auto;
}
</style>
