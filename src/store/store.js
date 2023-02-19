import Vue from "vue";
import Vuex from "vuex";
import api from "../service/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    defaultSearch: "London,uk",
    search: "",
    isError: false,
    weatherData: {},
  },
  getters: {
    getWeatherMain(state) {
      const { temp, feelsLike, description, icon, info } = state.weatherData;
      return {
        temp,
        feelsLike,
        description,
        info,
        icon,
      };
    },
    getWeatherInfo(state) {
      const { wind, clouds, humidity } = state.weatherData;
      return {
        wind,
        clouds,
        humidity,
      };
    },
    getWeatherCountry(state) {
      return state.weatherData.country;
    },
    isSearched(state) {
      return state.search !== "";
    },
    getError(state) {
      return state.isError;
    },
  },
  mutations: {
    ["SET_SEARCH"](state, search) {
      state.search = search.toLowerCase();
    },
    ["SET_WEATHER_DATA"](state, data) {
      state.weatherData = data;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
    },
  },
  actions: {
    async fetchWeatherData({ commit }, search) {
      commit("SET_SEARCH", search);
      let data = {
        query: search,
        units: 'metric'
      }
      api.getDataWeather('/api/weather', data)
        .then((response) => {
          let weather = {}
          if (response.data) {
            weather = {
              name: response.data.name,
              temp: response.data.main.temp,
              tempMin: response.data.main.temp_min,
              tempMax: response.data.main.temp_max,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].description,
              icon: response.data.weather[0].icon.substring(0, 2),
              info: response.data.weather[0].main,
              wind: response.data.wind.speed,
              humidity: response.data.main.humidity,
              clouds: response.data.clouds.all,
              country: response.data.sys.country,
            };
          }
          commit("SET_WEATHER_DATA", weather);
          commit("SET_ERROR", false);
        }).catch(() => {
          commit("SET_ERROR", true);
          commit("SET_WEATHER_DATA", {});
        })

    },
  },
});

export default store;
