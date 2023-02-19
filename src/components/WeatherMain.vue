<template>
  <div class="weather-main">
    <div class="weather-feelsLike">
      Feels like
      <strong>
        {{ formatFeelsLike }}
        <sup class="supFellsLike">&deg;</sup>
      </strong>
    </div>
    <div class="weather-temp">
      <div
        class="weather-icon"
        :style="[
          getWeatherMain.icon
            ? {
                'background-image':
                  'url(http://openweathermap.org/img/wn/' +
                  getWeatherMain.icon +
                  'd@2x.png)',
              }
            : {},
        ]"
      ></div>
      <span>{{ formatTemp }}</span>
      <sup class="supTemp">&deg;</sup>
    </div>
    <div class="weather-description">{{ getWeatherMain.description }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import constants from "../js/constants";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["getWeatherMain"]),
    formatTemp() {
      return constants.round(this.getWeatherMain.temp, 2);
    },
    formatFeelsLike() {
      return constants.round(this.getWeatherMain.feelsLike, 2);
    },
  },
};
</script>

<style scoped>
.weather-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  min-width: 280px;
}
.weather-temp {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
  background-color: #fff;
  margin: 40px 0;
}
::v-deep span {
  font-size: 80px;
  font-weight: 800;
  letter-spacing: -2px;
  position: relative;
}
.supTemp {
  position: relative;
  top: -21px;
  font-size: 40px;
}
.weather-icon {
  position: absolute;
  top: -35px;
  left: -35px;
  width: 110px;
  height: 110px;
  background-repeat: no-repeat;
  background-size: 100%;
  filter: drop-shadow(1px 1px 0 rgb(0 0 0 / 3%))
    drop-shadow(-5px -5px 0 rgb(0 0 0 / 8%));
}
.weather-feelsLike,
.weather-description {
  font-size: 18px;
  color: #666;
  text-transform: capitalize;
}
.supFellsLike {
  position: relative;
  top: 5px;
  left: -2px;
  font-size: 18px;
}

@media (max-height: 767px) {
  .weather-main {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>