// stores/counter.js
import { defineStore } from 'pinia';
import axios from "axios";

export const useCurentCity = defineStore("curentcity", {
  state: () => ({
    citys: [],
    selectedCity: [],
    selectedCityId: 0,
  }),
  //
  getters: {
    getCitss(state) {
      return state.citys;
    },
  },
  //
  actions: {
    async fetchCitys() {
      try {
        const data = await axios.get(
          "http://livreeo.ma/API/public/api/shopping"
        );
        this.citys = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});