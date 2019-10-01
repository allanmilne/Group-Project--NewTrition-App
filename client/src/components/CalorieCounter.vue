<template>
    <div id="calorie-counter-form">
        <h2 class="tbl-heading">Enter your details below to calculate your daily recommended calorie intake: </h2>
      <form id="calorie-form" v-on:submit="handleSubmit">
        <table class="table">
          <tr class="row">
            <th for="sex">Sex: </th>
            <td>
              <label for="male">Male</label>
              <input type="radio" id="male" name="sex" value="male" v-model="sex">
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

          <tr>
            <th>Activity Level:</th>
            <td>
              <div class="acc-lvl-text" for="activity-level">
              <slider class="slider"
                  :values="sliderValues"
                  raising
                  v-model="activityLevel">
                  </slider>
              </div>
            </td>
          </tr>
        </table>
        <div>
            <button id="submit">Calculate</button>
        </div>

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
            this.height = null
            this.weight = null
            this.age = null
            this.sex = ""
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
table
.acc-lvl-text {
  font-weight: bold;
  text-align: center;
  color: black;
  display: inline-flex;
}

.slider{
  width: 200px;
  margin-left: 10%;
  color: black;
}

.table{
  font-size: 150%;
  border-radius: 1em;
  background: rgba(100, 100, 100, 0.5);  
  width: 80%;
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

#submit {
    width: 100px;
    height: 50px;
    border: none;
    outline: none;
    color: black;
    background: white;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin-left: 50%;
    margin-top: 20px;
}

#submit:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #FF8C00, #32CD32);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 5s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

#submit:active {
    color: white;
}

#submit:active:after {
    background: transparent;
}

#submit:hover:before {
    opacity: 1;
}

#submit:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

</style>
