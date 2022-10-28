<template>
  <div class="body">
    
    <div class="heading-style">
    <h1>What do you want to cook today ?</h1>
    
    
      <input type="search" placeholder="search for recipe..." class="search-bar"/>

    </div>
  </div>
</template>

<script>
export default {
name:"SearchRecipe",
 
}
</script>

<style scoped>
.body{
 
  font-family:'Times New Roman', Times, serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1{
  padding:10px;
}
.search-bar{
  background-color:rgba(218, 216, 216, 0.625);
  outline: none;
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 10px;
  width: 100%;

}
@media (max-width:600px) {

  .search-bar{
    padding:9px;
    width:90%;
    margin-left: 18px;
  }
   
}
</style>