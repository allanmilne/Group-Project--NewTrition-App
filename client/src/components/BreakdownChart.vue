<template>
    <div class="chart">
      <highcharts id="pie-chart" :options="chartOptions"></highcharts>
    </div>
</template>

<script>

export default {
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
          text: "Steak Pie - 1 Serving, 694 Kcal"
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
        series: [{ // MAKE DYNAMIC
          type: 'pie',
          name: 'Food Breakdown',
          keys: ['name', 'y', 'sliced', 'selected'],
          data: [
              ['Total Fat 33g', 33.0],
              ['Saturated Fat 11g', 11.0],
              ['Sugars 5.1g', 5.1],
              [`Salt 815mg`, 0.815]
          ]
        }]
      }
    };
  }
}
</script>

<style scoped>
#pie-chart {
  height: 400px;
}
</style>
