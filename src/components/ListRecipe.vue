<template>
<div>
   <h1>What do you want to cook today ?</h1>
   <!-- <router-link class="text-decoration-none text-reset " :to="'/recipes/' + $route.params.id" > -->
   <div class="recipe-card"  >
         <div class="recipe-intro" v-for="recipeinfo in apiData" :key="recipeinfo.id" @click="recipeDetail(recipeinfo.id)">
         <div class="img-cont"> <img :src=" recipeinfo.thumbnail_url" />	</div>
         <h5 class="recipe-title">{{ recipeinfo.name }}</h5>
         <p><i class="fas fa-clock"></i> {{ recipeinfo.total_time_minutes}} min <span> <i class="fas fa-star"></i> {{ recipeinfo.user_ratings.count_positive}}</span></p>
       </div>
    </div>
<!-- </router-link> -->
 </div>
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

  methods:{
    recipeDetail(id){
      this.$router.push(`/recipes/${id}`);
    }

  },
  mounted() {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list" ,
      params: { from: "0", size: "20", tags: "under_30_minutes" },
      
      headers: {
        'X-RapidAPI-Key': '0e0ae102demsh46d00dbc6a5146dp18e9c2jsn2a5867d4495a',
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
h1{
  font-family:'Times New Roman', Times, serif;
  padding:10px;
  text-align: center;
}
h5:hover{
  text-decoration: underline #f65b4a ;
  
}
p{
  
  color: lightslategray;
  font-weight: bold;
  margin-left: 1em;
  margin-right: 1em;
}
span{
  float: right;
}
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
.fas{
  color: #f65b4a;
  font-size: 14px;
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
/* .recipe-intro:hover{
  background-color: #f65b4a;
  color: white;
} */

@media (max-width:600px) {

  .recipe-card{
    grid-template-columns: auto;
  }
}
</style>
