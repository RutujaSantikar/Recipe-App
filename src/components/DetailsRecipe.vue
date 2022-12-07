<template>
<div>
  
  <div class="recipe-detail-cont">
    <div class="recipe-details">
      <div class="recipe-title"> <h2> {{ apiData.name }} </h2> </div>
      <div class="recipe-description"><p>{{ apiData.description }}</p>
      <template v-for=" authname in apiData.credits" >
        <subscript :key="authname.id"> -By {{ authname.name}}</subscript>
      </template>
      </div>
      <div class="img-cont"><img :src=" apiData.thumbnail_url"/></div>
      <div class="short-info">
        <div class="time-cont">
          <div class="time one"><i class="fas fa-clock"></i></div>
          <div class="prep-time text">{{apiData.total_time_minutes}} Min</div>
        </div>
        <div class="rate-cont">
        <div class="rating  one"><i class="fas fa-star"></i> </div>
        <div class="rate text"> {{ apiData.user_ratings.count_positive}} Ratings</div>
        </div>
        <div class="serve-cont">
        <div class="servings  one"><i class="fas fa-utensils"></i></div>
        <div class="serve text">{{ apiData.num_servings }} Servings</div>
        </div>
      </div>

      <div class="ingredients-cont"> <h3>Ingredients:</h3>
      <ul>
        <li v-for= "section in apiData.sections" :key="section.id"> 
          <ul>
          <li v-for= " component in section.components" :key="component.id">
            {{ component.raw_text }}</li>
          </ul>
        </li>
      </ul>
      </div>

      
      <div class="instructions"> <h3>Instructions:</h3>
        <ol>
        <li v-for = " instruction in apiData.instructions"  :key="instruction.id">{{ instruction.display_text }}</li>
        </ol>
      </div>
      
      <div class="video-cont">
       <h4>Watch & cook</h4>
        <video  width="450" height="300" type="video/mp4"  controls> 
        <source :src="apiData.original_video_url">
        </video>
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
    'X-RapidAPI-Key': 'a7d6170542msh95535dd546dd907p1d8c25jsn568bff2c8d3f',
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

<style scoped>
.recipe-details{
  width: 70%;
  margin: 0 auto;
}
img{
  width:90%;
  height: 590px;
  border-radius: 15px;
}
h2,h3,h4{
  font-family: 'Quicksand', sans-serif;
  padding: 8px;
}
h2{
  text-decoration: underline  #f65b4a 3px;
}
.short-info{
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  text-align: center;
 
}
subscript,.fas{
  color:   #f65b4a;
}
.fas{
  font-size: 17px;
  background-color: rgb(235, 236, 237);
  
  border-radius: 20px;
  padding: 10px;
}
subscript{
font-weight: bold;
padding: 5px;
}

.text{
  font-family: 'Quicksand', sans-serif;
  color: lightslategray;
  font-weight: bold;
  font-size: 16px;

}
.recipe-description{
padding: 6px;

font-family: 'Quicksand', sans-serif;
color: lightslategray;

}
li{
  
  font-family: 'Quicksand', sans-serif;
  color: rgb(75, 88, 101);
  font-size: 18px;
  margin: 3px;
  
}
.ingredients-cont ul li{
  list-style-type: none;
}

@media (max-width:600px) {

  img{
  width:100%;
  height: 300px;

}
li{
  font-size: 17px;
}
video{
  width: 100%;
  
}
.fas{
  font-size: 15px;
  padding: 8px;
}
.text{
 
  font-size: 15px;

}
}
</style>