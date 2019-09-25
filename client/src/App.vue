<template>
  <div id="app">
    <div class="hello">
      <h1 class="heading">Nutrition App</h1>
      <p class="sub-heading">Find out how good your food is!</p>
      <vue-tiny-tabs id="mytabs" :anchor="false" :closable="true" :hideTitle="false">
        

          <div class="section" id="tab1-nutrition-search">
            <h3 class="title">Nutrition Information</h3>

            <div class="container">

              <div class="nutrition-info">
                <nutritional-information :selected-item-details="selectedItemDetails"/>
              </div>

              <div class="food-search-info">
                <search-form :searched-item-details="searchedItemDetails"/>
              </div>

              <div class="pie-chart">
                <breakdown-chart :selected-item-details="selectedItemDetails"/>
              </div>

            </div>
          </div>

          <div class="section" id="tab2-calorie-counter">
            <h3 class="title">Calorie Calculator</h3>
            <calorie-counter/>
          </div>

  	</vue-tiny-tabs>
    </div>
  </div>
</template>

<script>
import VueTinyTabs from 'vue-tiny-tabs';
import CalorieCounter from './components/CalorieCounter';
import { eventBus } from './main';
import BreakdownChart from './components/BreakdownChart.vue';
import NutritionalInformation from './components/NutritionalInformation.vue';
import Search from './components/Search.vue';
import ApiService from './services/ApiService'

export default {
  name: 'app',
    data() {
      return {
        searchedItem: "",
        searchedItemDetails: null,
        selectedItem: null,
        selectedItemDetails: null
      }
    },
    components: {
      'vue-tiny-tabs': VueTinyTabs,
      'calorie-counter': CalorieCounter,
      'breakdown-chart': BreakdownChart,
      'nutritional-information': NutritionalInformation,
      'search-form': Search
    },
    props: [""],
    mounted() {
    eventBus.$on('searched-item', (item) => {
      this.searchedItem = item;
      
      ApiService.getItemDetails(item)
      .then(itemDetail => itemDetail.json())
      .then(data => this.searchedItemDetails = data)
    }),

    eventBus.$on('selected-item', (item) => {
      this.selectedItem = item;

      ApiService.getSpecificItemDetails(item)
      .then(itemDetail => itemDetail.json())
      .then(data => this.selectedItemDetails = data.foods[0])
      .then(() => console.log("details:", this.itemDetail));
    })
  }
}

</script>

<style>
body {
  background-image: url('../public/food-bg-img.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.heading, .sub-heading, h3 {
  text-align: center;
}

.heading {
  font-family: 'Cinzel', serif;
  font-size: 50px;
}

.sub-heading {
  font-family: 'Shadows Into Light', cursive;
  font-size: 25px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.tinytabs .tabs {
	margin-left: 15px;
	display: flex;
	flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
	padding-left: 5px;
}
.tinytabs .tabs .tab {
	margin: 0 3px 0 0;
	background: rgba(100, 100, 100, 0.4);
	padding: 6px 15px;
	text-decoration: none;
	color: #333;
	font-weight: bold;
	border-radius: 3px 3px 0 0;
}
.tinytabs .section {
	background: rgba(100, 100, 100, 0.6);
	overflow: hidden;
	padding: 15px;
	clear: both;
	border-radius: 3px;
}
.tinytabs .tab.sel {
	background: rgba(100, 100, 100, 0.6);
	color: #191919;
	text-shadow: none;
}

.container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: white;

}

.nutrition-info{
  margin: 1%;
  padding: 1%;
  width: 40%;
}

.food-search-info{
  margin: 1% 10%;
  padding: 1%;
  width: 40%;
}

.section {
  font-family: 'Nunito', sans-serif;
}
</style>
