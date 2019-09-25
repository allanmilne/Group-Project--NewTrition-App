<template>
    <!-- <div class="chart" v-if="selectedItem === !selectedItem"> -->
      <highcharts id="pie-chart" :options="chartOptions"></highcharts>
    <!-- </div> -->
</template>

<script>

import ApiService from '../services/ApiService.js';

export default {
  
  mounted() {
    ApiService.getItem()
    .then(item => this.testItem = item);
  },
  // props: ["selectedItem", "selectedItemDetails"], 
  data() {
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
          text: `Recomended Daily Allowance`
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
              [`Total Fats 40g`, 40],
              [`Saturated Fat 30g`, 30],
              [`Sugars 30g`, 30],
              [`Salt 6g`, 6]
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
