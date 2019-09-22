<template>
    <div id="calorie-counter-form">
      <form id="calorie-form" v-on:submit="handleSubmit">
        <h2>Caluculate your daily recommended calorie intake: </h2>
        <p>Gender:
          <label for="male">Male </label>
          <input type="radio" name="gender" :value="male" v-model="gender" required>
          <label for="female">Female </label>
          <input type="radio" name="gender" :value="female" v-model="gender" required>
        </p>
        <p>
         <label for="weight">Your weight:  </label>
         <input type="number" id="weight" placeholder="weight in kgs" v-model.number="weight" required />
        </p> 
        <p>
         <label for="height">Your height:  </label>
         <input type="number" id="height" placeholder="cms" v-model.number="height" required />
         <!-- <input type="text" id="height" placeholder="ft" required /> -->
         <!-- <input type="text" id="height" placeholder="inches" required /> -->
        </p>
        <p>
          <label for="activity-level">Select how active you are weekly: </label>
          <select v-model="activity-level">
            <option :value=1.2>Little to no exercise</option>
            <option :value=1.375>Light exercise (1 - 3 days per week)</option>
            <option :value=1.55>Moderate exercise (3 - 5 days per week)</option>
            <option :value=1.725>Heavy exercise (6 - 7 days per week)</option>
            <option :value=1.9>Very heavy exercise (twice per day, heavy workouts)</option>
        </p>
        <p>
          <label for="age">Your age:  </label>
          <input type="number" id="age" v-model.numer="age" required />
        </p>
        <button id="submit">Submit</button>
        <p>
          <label for="total">Your recommended calorie intake per day to maintain your current weight is:  </label>
          <output id="total" name="result">{{ calsPerDay }}</output>
        </p>
      </form>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    name: "calorie-counter",
    data() {
        return{
            "gender": null,
            "weight": null,
            "height": null,
            "activity-level": null,
            "age": null
        }
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault()
            {document.getElementById("calorie-form").reset()}
        },

        calsPerDay() {
            let result = 0;
            if (this.gender === "male") {
              result = (88.362 + (13.39 * weight) + (4.799 * height) - (5.677 * age)) * this.activityLevel;
            } else if (this.gender === "female") {
              result = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * this.activityLevel;
            }
              return result
        }

            // menBmr(weight, height, age, activityLevel) {
            //   BMR = 88.362 + (13.39 * weight) + (4.799 * height) - (5.677 * age)
            //   return total = BMR * activityLevel
            //  };
            // womenBmr(weight, height, age, activityLevel) {
            //   BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
            //   return total = BMR * activityLevel
            // }
            // v-on:click="calsPerDay()"
    }
}
</script>

<style scoped>

</style>
