<template>
  <div class="bg-[#F1F1F1] w-full"> 
    <div class="w-full flex flex-col items-center justify-center space-y-2 pt-4 md:pt-8 2xl:pt-10 text-dark-blue">
      <h1 class="w-2/3 md:w-1/3 2xl:w-1/4 text-xl md:text-4xl font-bold text-center">
        Qui dis achat, dis promotion.
      </h1>
      <p class="w-2/3 md:w-1/3 2xl:w-1/4 text-center font-medium text-xs md:text-sm">
        Pour tout achat d'une trousse et d'un sac Easpack*, profitez d'une réduction de 10 % !
      </p>
    </div>
    <div class="w-full flex items-center justify-center pr-6 md:pr-12">
      <img src="../assets/boy-backpack.png" class="h-[250px] md:h-[400px]" alt="boy">
    </div>
  </div>

  <div class="container mx-auto max-w-7xl pt-6 md:pt-12 pb-5 md:pb-8">
    <div class="w-full flex items-center justify-center space-x-5 sm:space-x-10 md:space-x-28 pb-10">
        <smallCardFournt name="Cartables" image="../../src/assets/cartabl.svg"/>
        <smallCardFournt name="Trousses" image="../../src/assets/trouse.svg"/>
        <smallCardFournt name="Calculatrices" image="../../src/assets/calculatrice.svg"/>
    </div>

    <ProductsFourniture :products="products"/>
    
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>



  <!-- <div class="bg-[#F1F1F1] w-full flex items-center justfy-center">
    <div
      class="mx-auto w-full flex flex-col items-center justify-center text-dark-blue"
    >
      <p class="w-1/2 font-bold text-center text-[27.5px] md:text-[55px]">
        Qui dis achat, dis promotion.
      </p>
      <p
        class="w-full md:w-1/2 text-center text-[11px] md:text-[22px] font-meduim"
      >
        Pour tout achat d'une tousse et d'un sac Easpack*, profitez d'une
        réduction de 10 % !
      </p>
      <img
        src="../assets/boy-backpack.svg"
        class="h-[450px] 2xl:h-full z-10"
        alt="fille"
      />
    </div>
  </div> -->

  <!-- <div class="container mx-auto max-w-7xl pt-12 pb-28">
    <div
      class="w-full flex items-center justify-center md:space-x-28 space-x-14 pb-10"
    >
      <div
        class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer"
      >
        <img src="../assets/cartabl.svg" class="md:h-28 h-14 p-1.5" alt="" />
        <p
          class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]"
        >
          Cartables
        </p>
        <div
          class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center"
        >
          <img src="../assets/panier.svg" class="md:h-6 h-3" alt="" />
          <img
            src="../assets/panier2.png"
            class="absolute md:pt-2 pt-1 md:w-2 w-1"
            alt=""
          />
        </div>
      </div>
      <div
        class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer"
      >
        <img src="../assets/trouse.svg" class="md:h-28 h-14 p-1.5" alt="" />
        <p
          class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]"
        >
          Trousses
        </p>
        <div
          class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center"
        >
          <img src="../assets/panier.svg" class="md:h-6 h-3" alt="" />
          <img
            src="../assets/panier2.png"
            class="absolute md:pt-2 pt-1 md:w-2 w-1"
            alt=""
          />
        </div>
      </div>
      <div
        class="relative bg-white-color hover:bg-[#fafafa] transition duration-200 ease-in-out shadow-lg md:rounded-3xl rounded-xl flex flex-col items-center cursor-pointer"
      >
        <img
          src="../assets/calculatrice.svg"
          class="md:h-28 h-14 p-1.5"
          alt=""
        />
        <p
          class="text-dark-blue font-semibold pb-3 pt-2 md:text-lg text-[12px]"
        >
          Calculatrices
        </p>
        <div
          class="absolute -top-1 -right-3 md:w-10 md:h-10 h-5 w-5 bg-dark-blue rounded-full flex items-center justify-center"
        >
          <img src="../assets/panier.svg" class="md:h-6 h-3" alt="" />
          <img
            src="../assets/panier2.png"
            class="absolute md:pt-2 pt-1 md:w-2 w-1"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="md:space-x-28 space-x-14 p-10">
      <div
        class="w-full border-4 rounded-3xl border-dark-blue p-4 flex flex-col"
      >

      
      
        <Filter/>
        <fornitureProdacts/>



      </div>
    </div>
  </div> -->
</template>
<script setup>
import smallCardFournt from "../components/DefaultFaurniture/smallCardFournt.vue"
import ProductsFourniture from "../components/DefaultFaurniture/ProductsFourniture.vue"
import { useDefaultFaurnitures } from "../stors/DefaultFaurnitures"
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const data = useDefaultFaurnitures();

// const categorie = computed(() => {
//   return route.params.categorie;
// });

// watch(() => route.params.categorie, (newValue) => {
//   categorie.value = newValue;
// });

const products = computed(() => {
  const categorie = route.params.categorie;
  return data.getFournituresByCat(categorie);
});

// import { onMounted, ref } from "vue";
// import fornitureProdacts from "../components/DefaultFaurniture/fornitureLisstprodacts.vue"
// import Filter from "../components/DefaultFaurniture/Filter.vue"
// import { useFuornitureStore } from "../stors/fournitureStepStore";

// const store = useFuornitureStore();
// store.fetchProdacts();
// // onMounted(() => {
// //     store.fetchProdacts()
// // }),

</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f0f0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6192bf;
  border-radius: 5px;
}

</style>
