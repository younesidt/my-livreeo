import { defineStore } from 'pinia';
import axios from "axios"
import { useShooleStore } from "./cshooleStore"
import { useCityStore } from "./cityStore"
import { useLangeStore } from "./langeStore"
export const useClassStore = defineStore('class', {

    state: () => ({ count: 0, clases:[], selectedCity:{}, idselected:1, shoole: useShooleStore() , city: useCityStore() , lange: useLangeStore()}),

    getters: {
        getClases(state){
            return state.clases, state.selectedCity, state.idselected;
        }
    },

    actions: {
        async fetchClass() {
            try {
                const city =  useCityStore();
                const shoole =  useCityStore();
                const data = await axios.get('http://livreeo.ma/API/public/api/shopping/'+city.idselected+"/"+shoole.idselected)
                this.clases = data.data
            }
                catch (error) {
                alert(error)
                console.log(error)
            }
        },

        selectClass(e){
            let value = e.target.value
            this.idselected = value
            this.lange.fetchLange();
            console.log(this.idselected)
            return ( this.idselected)
        }
    
    },
})