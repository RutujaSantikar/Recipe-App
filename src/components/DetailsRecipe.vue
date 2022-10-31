<template>
<div>
  <h1>details</h1>
  <div class="recipe-detail-cont">
    <div class="recipe-details">
      <div class="recipe-title">{{ apiData.name }}</div>
      <div class="img-cont"><img /></div>
      <div class="short-in">
        <div class="time"><i class="fas fa-clock"></i></div>
        <div class="rating"><i class="fas fa-star"></i> </div>
        <div class="servings"><i class="fas fa-utensils"></i></div>
      </div>

    </div>
  </div>
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
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {id: this.$route.params.id},
  headers: {
    'X-RapidAPI-Key': '0e0ae102demsh46d00dbc6a5146dp18e9c2jsn2a5867d4495a',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};
axios.request(options).then( (response) => {
	console.log(response.data);
  this.apiData = response.data; 
}).catch(function (error) {
	console.error(error);
});
    }
   
}
</script>

<style>

</style>