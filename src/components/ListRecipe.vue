<template>
<div>
<div class="recipe-card">
   <div class="recipe-intro" v-for="recipeinfo in apiData" :key="recipeinfo.id">
    <div class="img-cont"> <img :src=" recipeinfo.thumbnail_url" />	</div>
    <h5 class="recipe-title">{{ recipeinfo.name }}</h5>
    
   </div>
   </div>

   </div>
  <!-- <div>
    <div class="recipe-cont" v-for="recipeinfo in apiData" :key="recipeinfo.id">
      <b-card
        src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 19rem"
        class="mb-2"
      >
      <h2 class="card-title">{{ recipeinfo.name }}</h2>
        

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";
export default {
  name: "ListRecipe",

  data() {
    return {
      apiData: {},
    };
  },
  mounted() {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: { from: "0", size: "20", tags: "under_30_minutes" },
      headers: {
        "X-RapidAPI-Key": "271c312016msh4f78003ead69183p19ec68jsnaef45ca1d70b",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then( (response) => {
        console.log(response.data);
        this.apiData = response.data.results;
      
      })
      .catch(function (error) {
        console.error(error);
      });
  


  
   },
};
</script>

<style scoped>
.recipe-card{
  display:grid;
  grid-template-columns: auto auto auto;
  grid-gap:2.5em;
  width: 80%;
  margin: 1em auto;
  font-family:'Times New Roman', Times, serif;
  


}
.recipe-intro{
  border: 1px solid    #f65b4a;;
  border-radius: 15px;
}
 img{
  width:100%;
  height:265px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
} 
.recipe-title{
  text-align: center;
  padding: 8px;
}
.recipe-intro:hover{
  background-color: #f65b4a;
  color: white;
}

</style>
