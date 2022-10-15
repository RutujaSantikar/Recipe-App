<template>
  <div class="body">
    <header class="heading-title">
      <h1>Enjoy Cooking</h1>
      <h4>Delicious and detailed restaurant recipes !!</h4>
    </header>
    <section class="img-cont">
      <img v-bind:src="slider1" class="img-style"/>
    </section>
    <div class="start-btn">  <router-link to="/searchrecipe" class="white-text">Get Started</router-link> </div> 
  </div>
</template>

<script>
export default {
name:"AppHome",
data(){
  return{
  slider1:require("../assets/slider2.png")
}

}
}
</script>

<style scoped> 
.body{
  background-color: white;
  height: 100vh;
}
.heading-title{
  color:   #f65b4a;
  font-family:'Times New Roman', Times, serif;

  
}
.img-cont, .start-btn{
  display: flex;
  justify-content: center;
}
.start-btn{
  background-color: #f65b4a;
  color: white;
  padding: 20px;
  letter-spacing:0.8em;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  

}
.white-text{
  color: white;
}

h1,h4{
  padding: 10px;
}
@media (max-width:600px) {

  .img-style{
    width:90vw;
  }
  .start-btn{
    padding: 20px 15px 20px 15px;
  }
   
}

</style>