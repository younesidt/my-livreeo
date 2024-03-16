import { defineStore } from "pinia";

export const useDefaultFaurnitures = defineStore("defaultFaurnitures", {
    state: () => ({
        fourniture: [
            {
                id:1,
                name:"EASTPAK OVAL",
                prix: 360,
                image: "../../src/assets/calculatrice.png",
                categorie: "calculatrice",
                color: ["dark", "white", "red"],
                type: "calculatrice 1"
            },
            {
                id:2,
                name:"EASTPAK OVAL 2",
                prix: 370,
                image: "../../src/assets/calculatrice2.png",
                categorie: "calculatrice",
                color: ["orange", "white"],
                type: "calculatrice 1"
            },
            {
                id:22,
                name:"EASTPAK OVAL 3",
                prix: 390,
                image: "../../src/assets/calculatrice2.png",
                categorie: "calculatrice",
                color: ["orange", "white"],
                type: "calculatrice 2"
            },
            {
                id:3,
                name:"EASTPAK OVAL 3",
                prix: 200,
                image: "../../src/assets/trousse.png",
                categorie: "trousse",
                color: ["dark", "red"],
                type: "trousse 2"
            },
            {
                id:4,
                name:"EASTPAK OVAL 4",
                prix: 100,
                image: "../../src/assets/trousse.png",
                categorie: "trousse",
                color: ["white", "green"],
                type: "trousse 1"
            },
            {
                id:5,
                name:"cartable defhe",
                prix: 90,
                image: "../../src/assets/cartable.png",
                categorie: "cartable",
                color: ["dark", "green"],
                type: "Trolley"
            },
            {
                id:6,
                name:"cartable ggggg",
                prix: 180,
                image: "../../src/assets/cartable.png",
                categorie: "cartable",
                color: ["dark", "white"],
                type: "Sac-à-dos"
            },
            //TODO:first thing the first 
            // HACK:
            // FIXME:
        ]
    }),
    getters:{
        getProducts(state){
            return state.fourniture;
        }
    },
    actions:{
        // getFournituresByCat(categorie){
        //     return this.fourniture = this.fourniture.filter(item => item.categorie === categorie);
        // }
    }
});