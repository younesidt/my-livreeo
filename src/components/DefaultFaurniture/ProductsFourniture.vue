<template>
    <div class="w-full flex flex-col items-center justify-center space-y-10 text-dark-blue">
      <div class="w-[90%] xl:w-full border-2 px-2 sm:px-4 py-2 sm:py-4 rounded-[35px] sm:rounded-[40px] lg:rounded-[60px] border-dark-blue border-opacity-20">
        <div class="bg-[#F0F9FF] flex flex-col lg:flex-row w-full pt-6 xl:pt-12 pb-5 xl:pb-10 items-center xl:items-start justify-center xl:justify-start rounded-[26px] lg:rounded-[40px]">
          <div class="w-full md:w-1/5 flex items-center justify-center pb-3 xl:pb-0 xl:pt-5">
            <h1 class="font-medium text-2xl lg:text-3xl">Filtre</h1>
          </div>
          <div class="xl:w-4/5">
            <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-16 lg:gap-x-0 gap-y-6 lg:gap-y-0 space-x-0 lg:space-x-14 xl:space-x-0">
              <!--meilleurs ventes-->
              <div class="flex flex-col">
                <h3 class="text-base lg:text-lg font-medium pb-1">Meilleurs ventes</h3>
                <div class="flex items-center">
                  <input type="radio" name="checkbox" id="checkbox1" class="hidden" v-model="isChecked" value="croissant">
                  <label class="relative cursor-pointer" for="checkbox1">
                    <img v-if="isChecked !== 'croissant'" src="../../assets/checked2.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="">
                    <img v-if="isChecked === 'croissant'" src="../../assets/check1.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="checked">  
                    <img v-if="isChecked === 'croissant'" src="../../assets/inside.svg" class="w-2 h-2.5 lg:w-3 lg:h-3 absolute top-0 right-0" alt="">
                  </label>
                  <p class="pl-3 text-xs lg:text-sm font-medium">Prix croissant</p>
                </div>
                <div class="flex items-center">
                  <input type="radio" name="checkbox" id="checkbox2" class="hidden" v-model="isChecked" value="decroissant">
                  <label class="relative cursor-pointer" for="checkbox2">
                    <img v-if="isChecked !== 'decroissant'" src="../../assets/checked2.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="">
                    <img v-if="isChecked === 'decroissant'" src="../../assets/check1.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="checked">  
                    <img v-if="isChecked === 'decroissant'" src="../../assets/inside.svg" class="w-2 h-2.5 lg:w-3 lg:h-3 absolute top-0 right-0" alt="">
                  </label>
                  <p class="pl-3 text-xs lg:text-sm font-medium">Prix decroissant</p>  
                </div>
                <div class="flex items-center">
                  <input type="radio" name="checkbox" id="checkbox3" class="hidden" v-model="isChecked" value="Note des clients">
                  <label class="relative cursor-pointer" for="checkbox3">
                    <img v-if="isChecked !== 'Note des clients'" src="../../assets/checked2.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="">
                    <img v-if="isChecked === 'Note des clients'" src="../../assets/check1.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="checked">  
                    <img v-if="isChecked === 'Note des clients'" src="../../assets/inside.svg" class="w-2 h-2.5 lg:w-3 lg:h-3 absolute top-0 right-0" alt="">
                  </label>
                  <p class="pl-3 text-xs lg:text-sm font-medium">Note des clients</p>
                </div>
              </div>
              <!--Categories-->
              <div class="flex flex-col">
                <h3 class="text-base lg:text-lg font-medium pb-1">Categories</h3>
                <div v-for="item in categories">
                  <div class="flex items-center">
                    <input type="radio" name="checkbox-cat" :id="item" class="hidden" v-model="isChecked2" :value="item">
                    <label class="relative cursor-pointer" :for="item">
                      <img v-if="isChecked2 !== item" src="../../assets/checked2.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="">
                      <img v-if="isChecked2 === item" src="../../assets/check1.svg" class="w-3 h-3 lg:w-4 lg:h-4" alt="checked">  
                      <img v-if="isChecked2 === item" src="../../assets/inside.svg" class="w-2 h-2.5 lg:w-3 lg:h-3 absolute top-0 right-0" alt="">
                    </label>
                    <p class="pl-3 text-xs lg:text-sm font-medium">{{ item }}</p>
                  </div>
                </div>
              </div>
              <!--couleurs-->
              <div class="flex flex-col">
                <h3 class="text-base lg:text-lg font-medium pb-1">Couleurs</h3>
                <div class="w-fit grid grid-cols-5 gap-y-1 gap-x-1 lg:gap-x-2">
                  <div v-for="item in color" class="flex items-center">
                    <div class="flex items-center justify-start">
                      <input type="radio" name="checkbox-col" :id="item" class="hidden" v-model="isChecked3" :value="item">
                      <label class="relative cursor-pointer" :for="item">
                        <div v-if="isChecked3 !== item" :style="{ backgroundColor: item }" class="w-4 h-4 lg:w-5 lg:h-5 rounded-full"></div>
                        <div v-if="isChecked3 === item" :style="{ backgroundColor: item }" class="flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-full">
                          <div class="bg-[#FFFFFF] flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 rounded-full">
                            <svg class="h-[5px] lg:h-2" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 4.17143L4.14286 7L9 1" :stroke="item" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <!--prix-->
              <div class="flex flex-col">
                <h3 class="text-base lg:text-lg font-medium pb-1">Prix</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="w-full flex flex-col-reverse xl:flex-row"> 
            <div class="w-full xl:w-[70%] mt-6">  
              <div class="h-[300px] md:h-[450px] overflow-y-auto space-y-4 md:space-y-6">
                <div class="w-full flex flex-col items-start">
                  <div v-if="fournitures.length === 0" class="w-full h-[60vh] flex items-center justify-center text-dark-blue text-md font-medium">
                    Aucun produit disponible pour le moment !
                  </div>
                  <div 
                    v-for="product in fournitures"
                    :key="product.id" 
                    class="w-full flex items-center pt-4"
                  >
                    <div class="w-1/2 flex items-center space-x-1 md:space-x-3 md:pl-4 lg:pl-10">
                      <div @click="selectedProduct = product" class="cursor-pointer">
                          <div class="w-16 md:w-24">
                            <img :src="product.image" alt="product">
                          </div>
                      </div>
                      <div>
                          <p class="text-dark-blue text-[10px] md:text-sm font-medium">{{ product.name }}</p>
                      </div>
                    </div>
                    <div class="w-1/2 flex items-center justify-start">
                      <div class="w-full flex items-center justify-center">
                          <div class="w-1/3 flex items-center justify-end">
                              <div class="w-28 h-4 md:h-7 rounded-full text-[9px] md:text-[15px] font-normal flex items-center justify-evenly bg-dark-blue text-white-color">
                                  <div @click="decreaseQuantity(product)" class="cursor-pointer">
                                      -
                                  </div>
                                  <div>
                                      {{ product.quantity }}
                                  </div>
                                  <div @click="increaseQuantity(product)" class="cursor-pointer">
                                      +
                                  </div>
                              </div>
                          </div>
                          <div class="w-1/3 flex items-center justify-end">
                            <p class="text-dark-blue text-[10px] md:text-[15px] font-medium">{{ product.prix }} MAD</p>
                          </div>
                          <div class="w-1/3 flex items-center justify-center">
                            <input type="checkbox" :id="product.id" :value="product" class="hidden" v-model="checkedProducts">                                                        
                            <div @click="handleDivClick(product)" class="relative w-6 md:w-9 h-6 md:h-9 rounded-full bg-dark-blue flex items-center justify-center cursor-pointer hover:bg-[#004179e5] transition duration-200 ease-in-out">
                              <svg class="h-3 md:h-5" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.94116 9.375H24.8914C25.3988 9.37494 25.9001 9.47941 26.3612 9.68124C26.8222 9.88307 27.2319 10.1775 27.5623 10.5443C27.8927 10.9111 28.1359 11.3417 28.2753 11.8064C28.4147 12.2712 28.4469 12.7592 28.3698 13.2369L26.1617 26.9012C25.97 28.0886 25.3384 29.1715 24.3811 29.9537C23.4239 30.7359 22.2043 31.1657 20.9432 31.1654H8.88758C7.62677 31.1653 6.40762 30.7353 5.45075 29.9531C4.49388 29.171 3.8625 28.0883 3.67085 26.9012L1.46276 13.2369C1.38564 12.7592 1.41788 12.2712 1.55725 11.8064C1.69663 11.3417 1.93985 10.9111 2.27025 10.5443C2.60064 10.1775 3.01039 9.88307 3.47141 9.68124C3.93242 9.47941 4.4338 9.37494 4.94116 9.375Z" stroke="white" :stroke-width="myProduct.includes(product.id) ? 3 : 2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.64062 14.4095V6.02854C9.64062 4.69489 10.1967 3.41586 11.1866 2.47283C12.1765 1.52979 13.519 1 14.9189 1C16.3188 1 17.6614 1.52979 18.6513 2.47283C19.6411 3.41586 20.1972 4.69489 20.1972 6.02854V14.4095" stroke="white" :stroke-width="myProduct.includes(product.id) ? 3 : 2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              <svg v-if="myProduct.includes(product.id)" class="h-[5px] w-[5px] md:h-2 md:w-2 absolute top-[11px] md:top-[17px]" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07422 3.15866L2.58444 4.75278C2.97886 5.16912 3.64191 5.16912 4.03634 4.75278L7.14382 1.47266" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              </svg>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
              <div class="w-full flex items-center justify-between pt-4 lg:pt-8 pb-2">
                <div class="pl-3 xl:pl-8">
                  <h3 class="text-xs md:text-base font-semibold text-dark-blue">TOTAL = {{ totalProducts }} DHS</h3>
                </div>
                <div>
                  <button
                    @click="addToCart()"
                    class="bg-dark-blue hover:bg-[#004179e5] transition duration-200 ease-in-out text-white-color text-xs md:text-base font-semibold rounded-full py-1.5 md:py-3 px-3 md:px-5"
                    :class="{
                      'cursor-default pointer-events-none opacity-50': countProducts() === 0,
                    }">
                    Ajouter au panier ({{ countProducts() }} articles)
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full xl:w-[30%] flex items-start justify-start xl:justify-center mt-5 xl:mt-2">
                <productInfo
                  :options="selectedProduct"
                  @colorChange="handleColorChange"
                />
            </div>
          </div>     
        </div> 

      </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import productInfo from './productInfo.vue'
import { useRoute } from "vue-router"
import { useDefaultFaurnitures } from "../../stors/DefaultFaurnitures"


const data = useDefaultFaurnitures();

const props = defineProps({
  products: Array,
})

const isChecked = ref('')
const isChecked2 = ref('')
const isChecked3 = ref('')
const checkedProducts = ref([])
const myProduct =  ref([])

function handleDivClick(product) {
  const index = myProduct.value.indexOf(product.id);
  if (index === -1) {
    myProduct.value.push(product.id);
  } else {
    myProduct.value.splice(index, 1);
  }
  selectedProduct.value = product;
  document.getElementById(product.id).click();
}


watch(checkedProducts, () => {
  console.log(checkedProducts.value);
});

const route = useRoute();
const mycategorie = computed(() => route.params.categorie);

//Get fournitures and order them asc or desc
const fournitures = computed(() => { 
    const sortedFournitures = getFournituresByCat().slice(); // Make a copy to avoid mutating original data

    if (isChecked.value === 'croissant') {
      sortedFournitures.sort((a, b) => a.prix - b.prix); // Sort in ascending order
      //console.log(sortedFournitures);
    } 
    else if (isChecked.value === 'decroissant') 
    {
      sortedFournitures.sort((a, b) => b.prix - a.prix); // Sort in descending order
      //console.log(sortedFournitures);
    }


    if(isChecked2.value !== '' || isChecked3.value !== ''){
      if(isChecked2.value !== '' && isChecked3.value !== '')
      {
        return sortedFournitures.reduce((acc, item) => {
          if (item.type === isChecked2.value && item.color.includes(isChecked3.value)) {
            acc.push(item);
          }
          return acc;
        }, []);
      }
      else if(isChecked2.value !== ''){
        return sortedFournitures.reduce((acc, item) => {
          if (item.type === isChecked2.value) {
            acc.push(item);
          }
          return acc;
        }, []);
      }
      else if(isChecked3.value !== ''){
        return sortedFournitures.reduce((acc, item) => {
          if (item.color.includes(isChecked3.value)) {
            acc.push(item);
          }
          return acc;
        }, []);
      }
    }
    return sortedFournitures; 
});

const selectedProduct = ref(fournitures.value[0]); //props.products[0]

const handleColorChange = (color) => {
  selectedProduct.value.selectedColor = color;
  //Find the corresponding product in checkedProducts and update its selectedColor
  // const productId = selectedProduct.value.id;
  // const productIndex = checkedProducts.value.findIndex(product => product.id === productId);
  // if (productIndex !== -1) {
  //   checkedProducts.value[productIndex].selectedColor = color;
  // }
}


function getFournituresByCat(){
  return props.products.filter(item => item.categorie === mycategorie.value);
}

//manage quantity
function decreaseQuantity(item){
  let index = checkedProducts.value.findIndex(product => product.id === item.id);
  if(index !== -1 && checkedProducts.value[index].quantity !== 1){
    checkedProducts.value[index].quantity -= 1;
  }
};
function increaseQuantity(item){
  let index = checkedProducts.value.findIndex(product => product.id === item.id);
  if(index !== -1){
    checkedProducts.value[index].quantity += 1;
  }
};

//Button Add to cart
function addToCart(){
  checkedProducts.value.forEach(product => {
    // Check if the product already exists in the cart
    const index = data.panierProducts.findIndex(item => item.id === product.id);
    
    if (index !== -1) {
      // If the product(color) exists, update its quantity
      if(product.selectedColor === data.panierProducts[index].selectedColor)
      {
        data.panierProducts[index].quantity += product.quantity;
      }
      else
      {
        data.panierProducts.push({ ...product });
      }
    } 
    else {
      // If the product doesn't exist, push it to the cart
      data.panierProducts.push({ ...product });
    }
  });
  // data.panierProducts.push(checkedProducts.value);
  checkedProducts.value = [];
  myProduct.value = [];
}

//Filter (Categories)
const categories = ref(getUniqueTypes(fournitures.value));

function getUniqueTypes(fourniture) {
  const uniqueTypesSet = new Set();
  fourniture.forEach(item => {
    uniqueTypesSet.add(item.type);
  });
  return Array.from(uniqueTypesSet);
}

//Filter (Color)
const color = ref(getUniqueColors(fournitures.value));

// watch(mycategorie, () => {
//   isChecked3.value = '';
//   color.value = getUniqueColors(fournitures.value);
//   //console.log(categories.value);
// });

function getUniqueColors(fourniture) {
  const uniqueColorsSet = new Set();
  fourniture.forEach(item => {
    item.color.forEach(color => {
      uniqueColorsSet.add(color);
    });
  });
  //console.log(Array.from(uniqueColorsSet));
  return Array.from(uniqueColorsSet);
}


watch(mycategorie, () => {
  isChecked2.value = '';
  isChecked3.value = '';
  categories.value = getUniqueTypes(fournitures.value);
  color.value = getUniqueColors(fournitures.value);
  //console.log(categories.value);
});


//function calcul total
function calcTotal(){
  const checkedProductArray = checkedProducts.value;

  // Filter checked products based on the category
  const filteredProducts = checkedProductArray.filter(item => item.categorie === mycategorie.value);

  let total = filteredProducts.reduce((total, item) => {
    //data.total = total + (item.prix * item.quantity);
    return total + (item.prix * item.quantity);
  }, 0);
  return total;
}

//Calcul total fournitures
const totalProducts = computed(() => {
  return calcTotal();
});


//count product in cart 
function countProducts(){
  const products = checkedProducts.value.filter(item => item.categorie === mycategorie.value);
  return products.length;
}


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
