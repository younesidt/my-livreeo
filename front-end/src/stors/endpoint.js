import { defineStore } from "pinia";
import { useFirstStepStore } from './FirstStepStore'

import { useSecondStepStore } from './SecondStepStore'

// const mystore = useFirstStepStore();
// const secstore = useSecondStepStore();

export const useEndPoint = defineStore("endPoint", {
    state: () => ({
        
        
            type_pack:'',
            // id_ville: mystore.SelectedCity,
            // id_ecole:mystore.SelectedSchool,
            // id_classe:mystore.SelectedClass,
            // id_langues:mystore.SelectedLangues,
            livres:[],
            fournitures:[],
            taux_plastification:false,
            type_livraison:null,
            formulaire:{
                addres:"",
                ville:"",
                infpcomlimontaire:"",
                nom:"",
                numberPhone:0,
                email:"",
            },
            type_paiement:{
                type:"",
                nom:"",
                numero_carte:"",
                date_expiration:"",
                code_securite:"",
            }

    }),
    getters:{
        getProducts(state){
            return state.params;
        }

    },
    actions:{
        
    }
});