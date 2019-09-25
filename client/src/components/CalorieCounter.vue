<template>
    <div id="calorie-counter-form">
        <h2>Enter your details below to calculate your daily recommended calorie intake: </h2>
      <form id="calorie-form" v-on:submit="handleSubmit">
        <table class="table">
          <tr>
            <th for="sex">Sex: </th>
            <td>
              <label for="male">Male</label>
              <input type="radio" id="male" name="sex" value="male" v-model="sex" checked="checked">
            </td>
            <td>
              <label for="female">Female</label>
              <input type="radio" id="female" name="sex" value="female" v-model="sex">
            </td>
          </tr>

          <tr>
            <th for="weight">Weight: </th>
            <td>
              <input type="number" id="weight" placeholder="weight in kgs" v-model.number="weight" required />
            </td>
          </tr>

          <tr>
            <th for="height">Height: </th>
            <td>
              <input type="number" id="height" placeholder="cms" v-model.number="height" required />
            </td>
          </tr>

          <tr>
            <th for="age">Age: </th>
            <td>
              <input type="number" id="age" v-model.number="age" required />              
            </td>
          </tr>

            <th for="activity-level">Your Activity Level: </th>
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
          <h1 class="rda">Your recommended calorie intake per day to maintain your current weight is: <span>{{ this.totalCals }}</span></h1>
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
        "sex": "",
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
            if (this.sex === "male") {
              result = (88.362 + (13.39 * this.weight) + (4.799 * this.height) - (5.677 * this.age)) * this.activityLevel;
            } else if (this.sex === "female") {
              result = (447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age)) * this.activityLevel;
            }
            this.totalCals = parseInt(result)
        }
    }
}
</script>

<style lang="css" scoped>

.slider{
  width: 200px;
  margin-left: 35%;
}

.table{
  width: 60%;
  margin: auto;
  position: relative;
  text-align: center;
  top: 50%;  
  background: white;
}

.calc-btn {
  position: relative;
}

.result {
  position: relative;
  text-align: center;
}

span {
  color: white;
  font-weight: 700;
}
.rda {
  font-weight: 700;
}
</style>
