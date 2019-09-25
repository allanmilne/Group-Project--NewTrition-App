<template lang="html">
  <div id="info">
    <div id="traffic-lights">
      <h4>Click on each box below for more information... </h4>

      <div id="lights">
        <div id="label1">
          <p v-on:click="showCalories = !showCalories">Calories
            <p v-if="selectedItemDetails">
              {{selectedItemDetails.nf_calories}}
            </p>
          </p>   
        </div>
        <div id="label2"> 
          <p v-on:click="showFats = !showFats">Fats
            <p v-if="selectedItemDetails">
              {{selectedItemDetails.nf_total_fat}}
            </p>
          </p>
        </div>
        <div id="label3">
          <p v-on:click="showSatFats = !showSatFats">Saturated fat
           <p v-if="selectedItemDetails">
              {{selectedItemDetails.nf_saturated_fat}}
            </p>
          </p>
        </div>
        <div id="label4">
          <p v-on:click="showSugars = !showSugars">Sugars
            <p v-if="selectedItemDetails">
              {{selectedItemDetails.nf_sugars}}
            </p>
          </p>
        </div>
        <div id="label5">
          <p v-on:click="showSalt = !showSalt">Salt
            <p v-if="selectedItemDetails">
              {{selectedItemDetails.nf_sodium}}
            </p>
          </p>
        </div>
      </div>
    </div>

    <div id="nutrients">
      <transition name="bounce">
        <p v-if="showCalories"><span>Calories:</span> The amount of energy in a food or drink is measured in a calorie. When we eat and drink more calories than we use up, our bodies store the excess as body fat. Use our Calorie Calculator to measure how many calories you should aim for per day!</p>
      </transition>
      <transition name="bounce">
        <p v-if="showFats"><span>Fats:</span> A small amount of fat is an essential part of a healthy, balanced diet. Fat is a source of essential fatty acids, which the body cannot make itself.  Fat helps the body absorb vitamin’s A, D and E. These vitamins are fat-soluble, meaning they can only be absorbed with the help of fats. Any fat not used by your body's cells or to create energy is converted into body fat.</p>
      </transition>
      <transition name="bounce">
        <p v-if="showSatFats"><span>Saturated fats:</span> Most people in the UK eat too much saturated fats. Eating lots of saturated fat can raise your cholesterol and increase your risk of heart disease.</p>
      </transition>
      <transition name="bounce">
        <p v-if=showSugars><span>Sugars:</span> Eating too much sugar can make you gain weight and can lead to tooth decay. The government recommend that Sugars should not make up more than 5% of the energy you from food and drink each day.</p>
      </transition>
      <transition name="bounce">
        <p v-if="showSalt"><span>Salt:</span> A diet high in salt can cause raised blood pressure, which can increase your risk of heart disease and stroke. High blood pressure often has no symptoms, and many people who have high blood pressure don’t know it.</p>
      </transition>
    </div>

  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "nutritional-information",
  data() {
    return {
      showCalories: false,
      showFats: false,
      showSatFats: false,
      showSugars: false,
      showSalt: false
    }
  },
  props: ['selectedItemDetails'],
};
</script>

<style lang="css" scoped>
#info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

#label1 {
  border: 1px solid black;
  border-radius: 15px;
  height: 90px;
  background-color: #32CD32;
  display: inline-block;
  padding: 4px 10px;
  text-align: center;
}

#label2 {
  border: 1px solid black;
  border-radius: 15px;
  height: 90px;
  background-color: #32CD32;
  display: inline-block;
  padding: 4px 10px;
  text-align: center;
}

#label3 {
  border: 1px solid black;
  border-radius: 15px;
  height: 90px;
  background-color: #32CD32;
  display: inline-block;
  padding: 4px 10px;
  text-align: center;
}

#label4 {
  border: 1px solid black;
  border-radius: 15px;
  height: 90px;
  background-color: #32CD32;
  display: inline-block;
  padding: 4px 10px;
  text-align: center;
}

#label5 {
  border: 1px solid black;
  border-radius: 15px;
  height: 90px;
  background-color: #32CD32;
  display: inline-block;
  padding: 4px 10px;
  text-align: center;
}

h4 {
  text-align: center;
}

span {
  font-size: 17px;
  font-weight: bold;
}

#lights {
  display: flex;
  justify-content: space-between;
}

#lights > div {
  flex: 1;
  /* margin: 0 30px; */
}

#nutrients {
  flex-direction: column;
  padding: 40px 70px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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