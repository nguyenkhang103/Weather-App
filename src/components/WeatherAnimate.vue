<template>
  <div>
    <div
      class="weather-animate"
      :class="[
        { 'weather-rain': getWeatherMain.info == 'Rain' },
        { 'weather-snow': getWeatherMain.info == 'Snow' },
        {
          'weather-clear':
            getWeatherMain.info == 'Clear' || getWeatherMain.info == 'Mist',
        },
        {
          'weather-clouds':
            getWeatherMain.info == 'Clouds' || getWeatherMain.info == 'Haze',
        },
        { error: getError },
      ]"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWeatherMain", "getError"]),
  },
};
</script>

<style scoped>
.weather-animate {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 2s;
  background-size: cover;
  background-position: center;
}
.weather-default::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(-45deg, #999, #666);
}
.weather-clear {
  background-image: url("../assets/images/clear.jpg");
}
.weather-clear::after,
.weather-clear::before {
  content: "";
  background-image: url("../assets/images/fog.png");
  height: 810px;
  position: absolute;
  width: 100%;
  background-repeat: repeat-x;
}
.weather-clear::after {
  top: -50px;
  animation: animateCloud 150s linear infinite
    alternate-reverse;
}
.weather-clear::before {
  top: 200px;
  animation: animateCloud 60s linear infinite
    alternate;
}

.weather-clouds {
  background-image: url("../assets/images/clouds.jpg");
}
.weather-clouds::after,
.weather-clouds::before {
  content: "";
  background-image: url("../assets/images/fog.png");
  height: 810px;
  position: absolute;
  width: 100%;
  background-repeat: repeat-x;
}
.weather-clouds::after {
  top: -50px;
  animation: animateCloud 150s linear infinite
    alternate-reverse;
}
.weather-clouds::before {
  top: 300px;
  animation: animateCloud 75s linear infinite
    alternate;
}

@keyframes animateCloud {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 100% 0;
  }
}
.weather-snow {
  background-image: url("../assets/images/snow.jpg");
}
.weather-snow::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  animation: animateSnow 15s
    cubic-bezier(0.28, 0.54, 0.47, 0.56) infinite normal;
  background-image: url("../assets/images/snow2.png"),
    url("../assets/images/snow3.png"), url("../assets/images/snow4.png"),
    url("../assets/images/snow3.png");
}
@keyframes animateSnow {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  100% {
    background-position: 400px 1100px, 400px 400px, 600px 600px;
  }
}
.weather-rain {
  background-image: url("../assets/images/rain-bg.jpg");
}
.weather-rain::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  animation: animateRain 70s
    cubic-bezier(0.28, 0.54, 0.47, 0.56) infinite normal;
  background-image: url("../assets/images/rain-1.png"),
    url("../assets/images/rain-2.png");
  opacity: 0.8;
}

@keyframes animateRain {
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  100% {
    background-position: 400px 1100px, 400px 400px, 600px 600px;
  }
}

.error {
  background-image: url("../assets/images/error.jpg");
}
</style>