import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useFirstStepStore = defineStore("firstStepStore", {
  state: () => ({
    Citys: [],
    Schools: [],
    Class: [],
    langues: [],
    SelectedCity: null,
    SelectedSchool: null,

  }),
  getters: {
    getCitys(state){
        return state.Citys;
    },
    getSchools(state){
        return state.Schools;
    },
    
  },
  actions: {
    async fetchCitys(){
        try {
            const data = await axios.get('/shopping')
            this.Citys = data.data
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    },
    async fetchSchools(){
        try {
            const data = await axios.get('/shopping/'+ this.SelectedCity)
            this.Schools = data.data
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    },
    

  },
});

