<template lang="html">
    <div id="calorie-counter-form">
      <form>
        <h2>Caluculate your daily recommended calorie intake: </h2>
        <p>Gender:
          <label for="male">Male </label>
          <input type="radio" name="gender" value="male" required>
          <label for="female">Female </label>
          <input type="radio" name="gender" value="female" required>
        </p>
        <p>
         <label for="weight">Your weight:  </label>
         <input type="text" id="weight" placeholder="weight in kgs" required />
        </p> 
        <p>
         <label for="height">Your height:  </label>
         <input type="text" id="height" placeholder="ft" required />
         <input type="text" id="height" placeholder="inches" required />
        </p>
        <p>
          <label for="age">Your age:  </label>
          <input type="text" id="age" required />
        </p>
        <p>
          <label for="total">Your total recommended calorie intake per day to maintain your current weight is:  </label>
          <output id="total" name="result">{{ result }}</output>
        </p>
      </form>
    </div>
</template>

<script>
export default {
    name: "calorie-counter",
    methods: {
        menBmr(weight, height, age, activityLevel) {
            BMR = 88.362 + (13.39 * weight) + (4.799 * height) - (5.677 * age)
            return total = BMR * activityLevel
        },
        womenBmr(weight, height, age, activityLevel) {
            BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
            return total = BMR * activityLevel
        }
    }
}
</script>

<style lang="css" scoped>
</style>
