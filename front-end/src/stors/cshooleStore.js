import { defineStore } from 'pinia';
import axios from "axios"
import { useCityStore } from "./cityStore"
import {  useClassStore } from "./classStore"

export const useShooleStore = defineStore('shools', {

    state: () => ({ count: 0, shools:[], idselected:1, class: useClassStore() }),

    getters: {
        getShools(state){
            return state.shools, state.idselected;
          }
    },

    actions: {
        async fetchsShoole() {
            try {
              const city =  useCityStore();
              const data = await axios.get('http://livreeo.ma/API/public/api/shopping/'+city.idselected)
                this.shools = data.data
              }
              catch (error) {
                alert(error)
                console.log(error)
            }
          },

          selectShoole(e){
            let value = e.target.value
            
            this.idselected = value
            this.class.fetchClass()
            console.log(value)
            return (this.idselected = value )
          }
    
    },
  })