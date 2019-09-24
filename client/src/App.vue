<template lang="html">
  <body>
    <div id="app">
      <div class="hello">

        <div id="header">
          <h1 id="app-name">Nutrition App</h1>
          <p>Find out how good your food is!</p>
        </div>

        <div id="tabs-container">
          <vue-tiny-tabs id="mytabs" :anchor="false" :closable="true" :hideTitle="false" @on-close="onClose" @on-before="onBefore" @on-after="onAfter">

              <div class="section" id="tab1-nutrition-search">
                <h3 class="title">Tab 1: Nutrition Information</h3>

                <div class="columns">
                  <div id="nutrition-info">
                    <p>Nutrition info here!!!!</p>
                  </div>

                  <div id="food-search-info">
                    <h4>[Search form goes here]</h4>
                    <breakdown-chart/>
                  </div>
                </div>

              </div>

              <div class="section" id="tab2-calorie-counter">
                <h3 class="title">Tab 2: Calorie Calculator</h3>
                <calorie-counter/>
              </div>
        		<!-- <div class="section" id="tab3-daily-total">
        			<h3 class="title">Tab 3: Daily Total</h3>
              <ul>
                <li>Form for entering food</li>
                <li>List of food entered for day</li>
                <li>Graph showing "actual" and "recommended" calories</li>
              </ul>
        		</div> -->
        	</vue-tiny-tabs>
        </div>

      </div>
    </div>
  </body>
</template>

<script>
import VueTinyTabs from 'vue-tiny-tabs';
import CalorieCounter from './components/CalorieCounter';
import { eventBus } from './main';
import BreakdownChart from './components/BreakdownChart.vue'

export default {
  name: 'app',
  components: {
    'vue-tiny-tabs': VueTinyTabs,
    'calorie-counter': CalorieCounter,
    'breakdown-chart': BreakdownChart
  },
  props: [""],
  methods: {
    onClose (id) {
      console.log('Callback function that gets evaluated while closing the tab', id)
    },
    onBefore (id, tab) {
      console.log('Callback function that gets evaluated before a tab is activated', id, tab)
    },
    onAfter (id, tab) {
      console.log('Callback function that gets evaluated after a tab is activated', id, tab)
    }
  }
}
</script>

<style>
body {
  background-image: url('../public/food-background-image-04.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #ece3cb;
  font-family: sans-serif;
}

h3 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  /* color: #42b983; */
}

#header {
  text-align: center;
  line-height: 1.2em;
  margin: 4% 0 2% 0;
}

#app-name {
  font-size: 3em;
}

#tabs-container {
  margin: 1.5%;
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
	background: #bacbce;
	/* display: block; */
	padding: 6px 15px;
	text-decoration: none;
	color: #333;
	font-weight: bold;
	border-radius: 3px 3px 0 0;
}
.tinytabs .section {
	background: #95afb3;
	overflow: hidden;
	padding: 15px;
	clear: both;
	border-radius: 3px;
}
.tinytabs .tab.sel {
	background: #95afb3;
	color: #191919;
	text-shadow: none;
}

.columns{
  display: flex;
  justify-content: space-around;
}

#nutrition-info{
  width: 35%;
  /* background-color: #ece3cb; */
  background-color: #ede5d0;
  margin: 1%;
  padding: 1%;
  border-radius: 1%;
  border-style: solid;
  border-width: 1%;
  border-color: #5c7973;
}

#food-search-info{
  width: 55%;
  /* background-color: #ece3cb; */
  background-color: #ede5d0;
  margin: 1%;
  padding: 1%;
  border-radius: 1%;
  border-style: solid;
  border-width: 1%;
  border-color: #5c7973;
}

#empty-space {
  font-size: 0.8em;
  color: gray;
}
</style>
