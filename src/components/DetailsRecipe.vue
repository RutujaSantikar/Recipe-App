<template>
<div>
  <h1>details</h1>
  <!-- <div class="recipe-detail-cont">
    <div class="recipe-details" v-for="recipeinfo in apiData" :key="recipeinfo.id">
      <div class="recipe-title">{{ recipeinfo.name }}</div>
      <div class="img-cont"><img /></div>
      <div class="short-in">
        <div class="time"><i class="fas fa-clock"></i></div>
        <div class="rating"><i class="fas fa-star"></i> </div>
        <div class="servings"><i class="fas fa-utensils"></i></div>
      </div>

    </div>
  </div> -->
</div>

</template>

<script>
import axios from "axios";
export default {
    name:"DetailsRecipe",
 
    data(){
      return{
       apiData:{}
      }
    },
    mounted(){

     

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/detail',
  params: {id: '5586'},
  headers: {
    'X-RapidAPI-Key': '271c312016msh4f78003ead69183p19ec68jsnaef45ca1d70b',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

axios.request(options).then( (response) => {
	console.log(response.data);
  this.apiData = response.data.results; 
}).catch(function (error) {
	console.error(error);
});
    }
   
}
</script>

<style>

</style>