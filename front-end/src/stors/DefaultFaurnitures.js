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
                type: "trousse 1"
            },
            {
                id:2,
                name:"EASTPAK OVAL 2",
                prix: 370,
                image: "../../src/assets/calculatrice2.png",
                categorie: "calculatrice",
                color: ["orange", "white"],
                type: "trousse 1"
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
                type: "trousse 2"
            },
            {
                id:5,
                name:"EASTPAK OVAL 5",
                prix: 90,
                image: "../../src/assets/cartable.png",
                categorie: "cartable",
                color: ["dark", "green"],
                type: "trousse 2"
            },
        ]
    }),
    getters:{
        getProducts(state){
            return state.fourniture;
        }
    },
    actions:{
        getFournituresByCat(categorie){
            return this.fourniture = this.fourniture.filter(item => item.categorie === categorie);
        }
    }
});