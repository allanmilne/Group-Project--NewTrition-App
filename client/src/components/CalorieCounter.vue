<template lang="html">

</template>

<script>
export default {
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