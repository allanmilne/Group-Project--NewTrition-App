<template>
    <div id="calorie-counter-form">
        <h2 class="tbl-heading">Enter your details below to calculate your daily recommended calorie intake: </h2>
      <form id="calorie-form" v-on:submit="handleSubmit">
        <table class="table">
          <tr class="row">
            <th for="gender">Gender</th>
            <td>
              <label for="male">Male</label>
              <input type="radio" id="male" name="gender" value="male" v-model="gender" checked="checked">
            </td>
            <td>
              <label for="female">Female</label>
              <input type="radio" id="female" name="gender" value="female" v-model="gender">
            </td>
          </tr>

          <tr>
            <th for="weight">Weight</th>
            <td>
              <input type="number" id="weight" placeholder="weight in kgs" v-model.number="weight" required />
            </td>
          </tr>

          <tr>
            <th for="height">Height</th>
            <td>
              <input type="number" id="height" placeholder="cms" v-model.number="height" required />
            </td>
          </tr>

          <tr>
            <th for="age">Age</th>
            <td>
              <input type="number" id="age" v-model.number="age" required />              
            </td>
          </tr>
            <div class="acc-lvl-text" for="activity-level">
              <br>
              <p>Activity Level</p>
            </div>
              <div>
                  <slider class="slider"
                  :values="sliderValues"
                  raising
                  v-model="activityLevel">
                  </slider>
              </div>
                <div class="calc-btn">
                    <button id="submit">Calculate</button>
                </div>
        </table>

        <div class="result">
          <h2 class="rda">Recommended calorie intake per day: <span>{{ this.totalCals }}</span></h2>
        </div>
      </form>
    </div>
</template>

<script>
import Slider from "vue-custom-range-slider";
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

export default {
    name: "calorie-counter",
    components: {
      Slider
    },
    data() {
      return {
        testItem: null,
        "gender": "",
        "weight": null,
        "height": null,
        "activityLevel": null,
        "age": null,
        "totalCals": 0,
        slider: "0",
            sliderValues: [
            {
                label: "Little to no exercise",
                value: "1.2"
            },
            {
                label: "Light exercise (1 - 3 days per week)",
                value: "1.375"
            },
            {
                label: "Moderate exercise (3 - 5 days per week)",
                value: "1.55"
            },
            {
                label: "Heavy exercise (6 - 7 days per week)",
                value: "1.725"
            },
            {
                label: "Very heavy exercise (twice per day, heavy workouts)",
                value: "1.9"
            }
            ]
        }
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault()
            this.calsPerDay()
            event.target.reset()
        },
        calsPerDay() {
            let result = 0;
            if (this.gender === "male") {
              result = (88.362 + (13.39 * this.weight) + (4.799 * this.height) - (5.677 * this.age)) * this.activityLevel;
            } else if (this.gender === "female") {
              result = (447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age)) * this.activityLevel;
            }
            this.totalCals = parseInt(result)
        }
    }
}
</script>

<style lang="css" scoped>
table
.acc-lvl-text {
  font-weight: bold;
  text-align: right;
  color: black;
}

.slider{
  width: 200px;
  margin-left: 50%;
  color: black;
}

.table{
  font-size: 150%;
  border-radius: 1em;
  background: rgba(100, 100, 100, 0.5);  
  width: 50%;
  height: 75%;
  margin: auto;
  padding: 1em;
  position: relative;
  text-align: center;
}

.calc-btn {
  width: 50%;
  height: 75%;
  margin: auto;
  padding: 1em;
  position: inherit;
  text-align: right;
}

.result {
  font-size: 200%;
  position: relative;
  text-align: center;
}

.tbl-heading {
  position: relative;
  text-align: center;
}

span {
  color: white;
  font-weight: 1000;
}
.rda {
  font-weight: 700;
}
</style>
