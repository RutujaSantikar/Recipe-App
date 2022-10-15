import Router from "vue-router";
import AppHome from"../components/AppHome";
import SearchRecipe from "../components/SearchRecipe";
import ListRecipe from "../components/ListRecipe";
import DetailsRecipe from "../components/DetailsRecipe";

const router = new Router({
//   mode:"history",
  routes:[
    {
        name:"home",
        path:'',
        component:AppHome
    },

    {
        name:"searchforrecipe",
        path:"/searchrecipe",
        component:SearchRecipe
    },
    {
        name:"recipes",
        path:"/searchrecipe/recipes",
        component:ListRecipe
    },
    {
        name:"recipedetails",
        path:"/searchrecipe/recipes/:id",
        component:DetailsRecipe
    }
  ]
})
export default router;

