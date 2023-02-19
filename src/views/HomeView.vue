<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in" appear>
      <div class="card">
        <WeatherMain />
      </div>
    </transition>
    <WeatherAnimate />
  </div>
</template>

<script>
import WeatherMain from "../components/WeatherMain.vue";
import WeatherAnimate from "../components/WeatherAnimate.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    WeatherMain,
    WeatherAnimate,
  },
  computed: {
    ...mapGetters(["isSearched"]),
  },
  methods: {
    ...mapActions(["fetchWeatherData"]),
    initData() {
      this.fetchWeatherData(this.$store.state.defaultSearch);
    },
  },
  created() {
    this.initData();
  },
};
</script>

<style>
body {
  background-color: rgb(0 0 0 / 30%);
  overflow: hidden;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;0,800;0,900;1,300;1,500&display=swap");
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
}
body {
  background-color: rgb(0 0 0 / 30%);
  overflow: hidden;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card {
  max-width: 360px;
  width: 100%;
  padding: 40px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 0 70px rgb(0 0 0 / 30%);
  z-index: 9999;
  background-color: #f1f1f1;
}
@media (max-height: 767px) {
  .card {
    padding: 30px;
  }
}
@media (max-width: 480px) {
  .card {
    padding: 30px;
  }
}
</style>