import { defineStore } from "pinia";
import axios from "../lib/axios";
import { useFirstStepStore } from "./FirstStepStore";

export const useSecondStepStore = defineStore("secondStepStore", {
    state: () => ({
        livres: [],
        lsLivres: localStorage.getItem('books') || [],
        plastification: [],
    }),
    getters:{
        getLivres(state){
            return state.livres;
        }
    },
    actions:{
        async fetchLivres(){
            try 
            {
              const firstStore = useFirstStepStore();
              const requestBody = {
                id_ville: firstStore.SelectedCity,
                id_ecole: firstStore.SelectedSchool,
                id_classe: firstStore.SelectedClass,
                langues: firstStore.SelectedLangues
              };
              // console.log(requestBody);
              const response = await axios.post(
                "/choixdelivre",
                requestBody
              );
              const responseData = response.data;
              if (response.status === 200) {
                const books = responseData;
                this.livres = books;
                //localStorage.setItem('books', JSON.stringify(books));
                
              }
              else{
                console.log("not working !");
              }
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
});