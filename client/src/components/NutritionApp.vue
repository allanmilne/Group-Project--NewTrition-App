<template>
  <div class="hello">
    <h1>Nutrition App</h1>
    <p>Find out how good your food is!</p>
    <vue-tiny-tabs id="mytabs" :anchor="false" :closable="true" :hideTitle="false" @on-close="onClose" @on-before="onBefore" @on-after="onAfter">
		<div class="section" id="tab1-nutrition-search">
			<h3 class="title">Tab 1: Nutrition Information</h3>
      <ul>
        <li>Search Box (form)</li>
        <li>Nutrition Box (expands when data is pulled in)</li>
      </ul>
		</div>
		<div class="section" id="tab2-calorie-counter">
			<h3 class="title">Tab 2: Calorie Calculator</h3>
      <ul>
        <li>User details</li>
        <li>Calorie recommendation</li>
      </ul>
		</div>
		<div class="section" id="tab3-daily-total">
			<h3 class="title">Tab 3: Daily Total</h3>
      <ul>
        <li>Form for entering food</li>
        <li>List of food entered for day</li>
        <li>Graph showing "actual" and "recommended" calories</li>
      </ul>
		</div>
	</vue-tiny-tabs>
  </div>
</template>

<script>
import VueTinyTabs from 'vue-tiny-tabs';

// export default {
//   name: 'Nutrition',
//   props: {
//     msg: String
//   },

export default {
	name: 'TinyTabs',
	components: {
		'vue-tiny-tabs': VueTinyTabs
	},
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
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
	background: #e1e1e1;
	display: block;
	padding: 6px 15px;
	text-decoration: none;
	color: #666;
	font-weight: bold;
	border-radius: 3px 3px 0 0;
}
.tinytabs .section {
	background: #f1f1f1;
	overflow: hidden;
	padding: 15px;
	clear: both;
	border-radius: 3px;
}
.tinytabs .tab.sel {
	background: #f1f1f1;
	color: #333;
	text-shadow: none;
}
</style>
