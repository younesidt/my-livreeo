import { defineStore } from "pinia";
import axios from "../lib/axios";
import { useFirstStepStore } from "./FirstStepStore";

export const useSecondStepStore = defineStore("secondStepStore", {
    state: () => ({
        livres: [
          {
              id:1,
              name:"Fleurs d'encre 5",
              prix: 190,
              image: "../../src/assets/livre.svg",
              categorie: "Français"
          },
          {
              id:2,
              name: "Mon carnet de labo collection microméga",
              prix: 1300,
              image: "../../src/assets/latin.png",
              categorie: "Français"
          },
          {
              id:3,
              name:"Livre 3",
              prix: 200,
              image: "../../src/assets/livre.svg",
              categorie: "Sciences Physiques"
          },
          {
              id:4,
              name:"Livre 4",
              prix: 100,
              image: "../../src/assets/livre.svg",
              categorie: "Sciences de La vie"
      
          },
          {
              id:5,
              name:"Livre 5",
              prix: 800,
              image: "../../src/assets/livre.svg",
              categorie: "Français"
          },
        ],
        faurnitures:[
          {
            id:1,
            name:"Calligraphe : 90g 24x32 grands carreaux de 96 pages",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 22,
            image: "../../src/assets/calligraphe.png",
            categorie: "HG SI et classiques"
          },
          {
            id:2,
            name:"Oxford 90g : 24x32 grands carreaux de 96 pages",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 32,
            image: "../../src/assets/calligraphe.png",
            categorie: "HG SI et classiques"
          },
          {
            id:3,
            name:"Clairefontaine 90g : 24x32 grands carreaux de 96 pages",
            description:"Cahier 24x32, 96 pages, grands carreaux",
            prix: 42,
            image: "../../src/assets/calligraphe.png",
            categorie: "HG SI et classiques"
          },
          {
            id:4,
            name:"Maped : crayon de couleur 12 color'peps star",
            description:"Maped : crayon de couleur 12 color'peps star",
            prix: 29,
            image: "../../src/assets/maped.png",
            categorie: "Matériel pour la cartographie"
          },
        ],
        cartItems: [],
        plastification: [],
        cartFournt: [],
        total:0,
        plastificationTotal:0,
    }),
    getters:{
      getLivres(state){
        return state.livres.map(item => ({...item, quantity: 1}));
      },
      getFournitures(state){
        return state.faurnitures.map(item => ({...item, quantity: 1}));
      },
      getSelectedLivres(state){
        return state.cartItems.reduce((acc, livre) => {
          acc[livre.categorie] = acc[livre.categorie] || [];
          acc[livre.categorie].push(livre);
          return acc;
      }, {});
      },
      countLivreInCart(state){
        return state.cartItems.length;
      },
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
        },
    }
});