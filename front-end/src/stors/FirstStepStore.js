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
    SelectedClass: null,
    SelectedLangues: [],

  }),
  getters: {
    getCitys(state){
        return state.Citys;
    },
    getSchools(state){
        return state.Schools;
    },
    getClasses(state){
      return state.Class;
    },
    getLangues(state){
      return state.langues;
    }
    
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
    async fetchClasses(){
      try {
        const data = await axios.get('/shopping/'+ this.SelectedCity +'/'+ this.SelectedSchool)
        this.Class = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchLangues(){
      try {
        const data = await axios.get('/shopping/'+ this.SelectedCity +'/'+ this.SelectedSchool + '/' + this.SelectedClass)
        this.langues = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
    

  },
});

