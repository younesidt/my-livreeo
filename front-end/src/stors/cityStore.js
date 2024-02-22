import { defineStore } from 'pinia';
import axios from "axios"
import { useShooleStore } from "./cshooleStore"
import {  useClassStore } from "./classStore"

export const useCityStore = defineStore('citys', {

    state: () => ({ count: 0, citys:[], selectedCity:{}, idselected:1, shoole: useShooleStore(), class: useClassStore() }),

    getters: {
        getCitys(state){
            return state.citys, state.selectedCity, state.idselected;
          }
    },

    actions: {
        async fetchCitys() {
            try {
              const data = await axios.get('http://livreeo.ma/API/public/api/shopping')
                this.citys = data.data
              }
              catch (error) {
                alert(error)
                console.log(error)
            }
          },

          selectCity(e){
            let value = e.target.value
            this.idselected = value
            this.shoole.fetchsShoole();
            this.class.fetchClass();
            console.log(this.idselected)
            return ( this.idselected)
          }
    
    },
  })