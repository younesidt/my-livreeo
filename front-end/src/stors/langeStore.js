import { defineStore } from 'pinia';
import axios from "axios"
import { useShooleStore } from "./cshooleStore"
import {  useClassStore } from "./classStore"
import { useCityStore } from "./cityStore"

export const useLangeStore = defineStore('lang', {

    state: () => ({ count: 0, langs:[], selectedlang:{}, idselected:[], shoole: useShooleStore(), class: useClassStore() , city: useCityStore() }),

    getters: {
        getLanges(state){
            return state.langs, state.selectedlang, state.idselected;
          }
    },

    actions: {
        async fetchLange() {
            try {
                const city =  useCityStore();
                const shoole =  useCityStore();
                const clase =  useClassStore();
              const data = await axios.get('http://livreeo.ma/API/public/api/shopping/'+city.idselected+"/"+shoole.idselected+"/"+clase.idselected)
                this.langs= data.data
              }
              catch (error) {
                alert(error)
                console.log(error)
            }
          },

          selectLange(value){
            this.idselected.push(value)
            console.log(this.idselected)
            return ( this.idselected)
          }
    
    },
  })