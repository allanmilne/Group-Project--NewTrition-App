<template>
    <div id="calorie-counter-form">
      <form id="calorie-form" v-on:submit="handleSubmit">
        <h2>Enter your details below to calculate your daily recommended calorie intake: </h2>
        <p>Gender:
          <label for="male"> Male </label>
          <input type="radio" id="male" name="gender" value="male" v-model="gender">
          <label for="female"> Female </label>
          <input type="radio" id="female" name="gender" value="female" v-model="gender">
        </p>
        <p>
         <label for="weight">Your weight:  </label>
         <input type="number" id="weight" placeholder="weight in kgs" v-model.number="weight" required />
        </p>
        <p>
         <label for="height">Your height:  </label>
         <input type="number" id="height" placeholder="cms" v-model.number="height" required />
        </p>
        <p>
          <label for="age">Your age:  </label>
          <input type="number" id="age" v-model.number="age" required />
        </p>
        <p>
          <label for="activity-level">Select how active you are weekly: </label>
          <slider class="slider"
            :values="sliderValues"
            min="0"
            max="100"
            raising
            v-model="activityLevel"
        ></slider>
        </p>
        <button id="submit">Submit</button>
        <p class="rda">Your recommended calorie intake per day to maintain your current weight is: <span>{{ this.totalCals }}</span></p>
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
            {document.getElementById("calorie-form").reset()}
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

  .slider{
  width: 300px;
  margin-left: 35%;
  }

  #calorie-counter-form{
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
