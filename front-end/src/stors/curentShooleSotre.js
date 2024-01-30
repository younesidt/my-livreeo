// stores/counter.js
import { defineStore } from 'pinia';
import axios from "axios";
import { useCurentCity } from '../stors/curntCityStor';
export const useCurentShoole = defineStore('curentshoole', {
  state: () => ({
    shooles:[],
    selectedShoole:'shoole',
    selectedShooleId:0,

  }),
  //
  getters:{
    getCitss(state){
      return [state.shooles, state.selectedShoole, state.selectedShooleId ]
    }
  },
  //
  actions: {
    async fetchCitys() {
      const city = useCurentShoole();
      try {
        const data = await axios.get('http://livreeo.ma/API/public/api/shopping/1')
          this.shooles = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
    selectCity(shoole, index){
      this.selectedShoole = shoole;
      this.selectedShooleId = index;
      console.log(index)
      return{shoole, index }
    }
  },
})