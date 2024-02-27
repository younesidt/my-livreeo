import { defineStore } from "pinia";
// import axios from "../lib/axios";
// import { useFirstStepStore } from "./FirstStepStore";

export const useSecondStepStore = defineStore("secondStepStore", {
    state: () => ({
        livres: [],
        //plastification: [],

    }),
    getters:{
        // getLivres(state){
        //     return state.livres;
        // }
    },
    actions:{
        // async fetchLivres(){
        //     try 
        //     {
        //         const info = useFirstStepStore();
        //         const requestBody = {
        //             id_ville: info.SelectedCity,
        //             id_ecole: info.SelectedSchool,
        //             id_classe: info.SelectedClass,
        //             langues: info.SelectedLangues,
        //         };
        //         const data = await axios.post('/choixdelivre', requestBody)
        //         this.livres = data.data
        //     }
        //     catch (error) {
        //         alert(error)
        //         console.log(error)
        //     }
        // }
    }
});