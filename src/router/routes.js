import Router from "vue-router";
import AppHome from"../components/AppHome";
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
        name:"recipes",
        path:"/recipes",
        component:ListRecipe
    },
    {
        name:"recipedetails",
        path:"/recipes/:id",
        component:DetailsRecipe
    }
  ]
})
export default router;

