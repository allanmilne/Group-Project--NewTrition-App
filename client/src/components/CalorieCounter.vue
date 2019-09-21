<template lang="html">
    <div id="calorie-counter">
        <h2>Caluculate your daily recommended calorie intake: </h2>
        <p>Gender:
            <label for="male">Male </label>
            <input type="radio" name="gender" value="male" required>
            <label for="female">Female </label>
            <input type="radio" name="gender" value="female" required>
        </p>
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
