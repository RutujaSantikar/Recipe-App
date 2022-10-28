<template>
  <div>
    <div v-for="recipes in apiData" :key="recipes.id">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 19rem"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListRecipe",

  data() {
    return {
      apiData: [],
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
        this.apiData = response.data;
      
      })
      .catch(function (error) {
        console.error(error);
      });
  
   },
};
</script>

<style></style>
