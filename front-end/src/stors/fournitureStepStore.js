import { defineStore } from "pinia";
import axios from "../lib/axios";

export const useFuornitureStore = defineStore("fourniture", {
  state: () => ({
    prodacts: [],
    selectedCategories:[],
    prodactsByCatigory: {},
    categorys:[],
    sortedData:[],
    cart:[],
    total:0,
  }),
  getters: {
    getProdacts(state) {
      return state.prodacts;
    },
  },
  actions: {
    async fetchProdacts() {
      try {
        // console.log(requestBody);
        const response = await axios.get("/choixdefourniture");
        const responseData = response.data;
        if (response.status === 200) {
          const prodacts = responseData;
          this.prodacts = prodacts;
          //localStorage.setItem('books', JSON.stringify(books));
          this.prodacts.forEach((item) => {
            item.quantity = 0;
          });

          
          //soert prodacts by category

          this.prodacts.forEach((item) => {
            if (!this.prodactsByCatigory[item.categorie]) {
              this.prodactsByCatigory[item.categorie] = [];
            }
            this.prodactsByCatigory[item.categorie].push(item);
          });
          this.categorys = Object.keys(this.prodactsByCatigory)
          console.log(this.prodactsByCatigory);
        } else {
          console.log("not working !");
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    filterByCategory(category) {
      return this.prodacts = this.prodacts.filter(item => item.categorie === category);
    },
  },
});
