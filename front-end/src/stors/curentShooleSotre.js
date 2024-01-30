// stores/counter.js
import { defineStore } from 'pinia';
import axios from "axios";
import { useCurentCity } from '../stors/curntCityStor';
const store = useCurentCity();
export const useCurentShoole = defineStore('curentshoole', {
  state: () => ({
    shoolse:[],
    selectedShoole:[],
    selectedShooleId:0,

  }),
  //
  getters:{
    getCitss(state){
      return [state.shoolse, state.selectedShoole, state.selectedShooleId ]
    }
  },
  //
  actions: {
    async fetchCitys() {
      try {
        const data = await axios.get('http://livreeo.ma/API/public/api/shopping'+store.selectedCityId)
          this.shoole = data.data
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