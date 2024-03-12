import { defineStore } from "pinia";

export const useDefaultFaurnitures = defineStore("defaultFaurnitures", {
    state: () => ({
        fourniture: [
            {
                id:1,
                name:"EASTPAK OVAL",
                prix: 360,
                image: "../../src/assets/calculatrice.png",
                categorie: "trousse",
                color: ["black", "white", "red"],
                type: "trousse 1"
            },
            {
                id:2,
                name:"EASTPAK OVAL 2",
                prix: 370,
                image: "../../src/assets/calculatrice2.png",
                categorie: "trousse",
                color: ["orange", "white"],
                type: "trousse 1"
            },
            {
                id:3,
                name:"EASTPAK OVAL 3",
                prix: 200,
                image: "../../src/assets/calculatrice.png",
                categorie: "trousse",
                color: ["black", "red"],
                type: "trousse 2"
            },
            {
                id:4,
                name:"EASTPAK OVAL 4",
                prix: 100,
                image: "../../src/assets/calculatrice.png",
                categorie: "trousse",
                color: ["white", "green"],
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

    }
});