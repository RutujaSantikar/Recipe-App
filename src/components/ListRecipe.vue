<template>
<div>
   <h1>What do you want to cook today ?</h1>
   <div class="recipe-card"  >
         <div class="recipe-intro" v-for="recipeinfo in apiData" :key="recipeinfo.id" @click="recipeDetail(recipeinfo.id)">
         <div class="img-cont"> <img :src=" recipeinfo.thumbnail_url" />	</div>
         
         
         <h5 class="recipe-title">{{ recipeinfo.name }}</h5>
         <p><i class="fas fa-clock"></i> {{ recipeinfo.total_time_minutes}} min <span> <i class="fas fa-star"></i> {{ recipeinfo.user_ratings.count_positive}}</span></p>
       </div>
    </div>

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
        'X-RapidAPI-Key': '09fc8deba8msh8021bc52b08109fp14c4bcjsnc107dc22c927',
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
  font-family: 'Quicksand', sans-serif;
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
  font-family: 'Quicksand', sans-serif;

  }
.recipe-intro{
  border: 1px solid    #f65b4a;
  border-radius: 15px;
    box-shadow: 4px 9px 9px 4px rgba(191, 193, 194,0.6) ;
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


@media (max-width:600px) {

  .recipe-card{
    grid-template-columns: auto;
  }
}
</style>
