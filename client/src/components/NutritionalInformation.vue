<template lang="html">
  <div id="info">
    <h4>Click on each box below for more information... </h4>
      <div id="label">
        <p v-on:click="showCalories = !showCalories">Cals</p>    
        <p v-on:click="showFats = !showFats">Fats</p>
        <p v-on:click="showSatFats = !showSatFats">Sat fat</p>
        <p v-on:click="showSugars = !showSugars">Sugars</p>
        <p v-on:click="showSalt = !showSalt">Salt</p>
      </div>
      <div id="nutrients">
        <transition name="bounce">
          <p v-if="showCalories">Calories: The amount of energy in a food or drink is measured in a calorie. When we eat and drink more calories than we use up, our bodies store the excess as body fat. Use our Calorie Calculator to measure how many calories you should aim for per day!</p>
        </transition>
        <transition name="bounce">
          <p v-if="showFats">Fats: A small amount of fat is an essential part of a healthy, balanced diet. Fat is a source of essential fatty acids, which the body cannot make itself.  Fat helps the body absorb vitamin’s A, D and E/ These vitamins are fat-soluble, meaning they can only be absorbed with the help of fats. Any fat not used by your body's cells or to create energy is converted into body fat.</p>
        </transition>
        <transition name="bounce">
          <p v-if="showSatFats">Saturated fats: Most people in the UK eat too much saturated fats. Eating lots of saturated fat can raise your cholesterol and increase your risk of heart disease.</p>
        </transition>
        <transition name="bounce">
          <p v-if=showSugars>Sugars: Eating too much sugar can make you gain weight and can lead to tooth decay. The government recommend that Sugars should not make up more than 5% of the energy you from food and drink each day.</p>
        </transition>
        <transition name="bounce">
          <p v-if="showSalt">Salt: A diet high in salt can cause raised blood pressure, which can increase your risk of heart disease and stroke. High blood pressure often has no symptoms, and many people who have high blood pressure don’t know it.</p>
        </transition>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: 'nutritional-information',
    data(){
        return {
          showCalories: false,
          showFats: false,
          showSatFats: false,
          showSugars: false,
          showSalt: false
        }
    }
}
</script>

<style lang="css" scoped>
    #info{
      display: flexbox;
    }
    
    #label p{
        border: 1px solid white;
        border-radius: 15px;
        width: 13%;
        height: 90px;
        background-color: green;
        display: inline-block;
        justify-content: center;
        padding: 4px 10px;
        text-align: center;
    }

    h4 {
      text-align: center;
    }

    .bounce-enter-active {
      animation: bounce-in .5s;
    }

    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }

</style>