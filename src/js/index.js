import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Like';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import {elements , renderLoader ,clearLoader} from './views/base';



/* Golobal state of the app 
 - Search object
 - current recipe object
 - shoping list obfect
 - liked recipes

*/

const state  = {};
window.state = state;

/** 
 * SEARCH CONTROLLER
 */
const controlSearch = async() => {

    // 1.Get query from the view
    const query = searchView.getInput();
    //console.log(query);

    if (query){
        //2. New search object and add to state
        state.search = new Search(query);

        // TESTING
        window.r = state.recipe;

         // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            // 4. Search for the recipes
            await state.search.getResults();

            //5. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }catch (err){
            alert(`Somting wrong with the search ${err}`);
            clearLoader();

        }
    }
 
};



elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e=> {
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const GoTOPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, GoTOPage);
    }

});

/** 
 * RECIPE CONTROLLER
 */

const controlRecipe = async () => {
    // Get the ID from the url
    const id = window.location.hash.replace('#' , '');

    if (id){
        // Prepare UI for change
        renderLoader(elements.recipe);
        recipeView.clearRecipe();

        // Highlight selected.search item
        if (state.search) searchView.highLightSelected(id);

         // Create new recipe object
        state.recipe = new Recipe(id);

        try {

            // Get recipe data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();


            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
                );

        }catch(err){
            alert(`Error processing recipe! ${err}`);
        }
    }
};

/*
 window.addEventListener('hashchange', controlRecipe);
 window.addEventListener('load', controlRecipe)
 */
 ['hashchange' ,'load'].forEach(event => window.addEventListener(event,controlRecipe));



 /** 
 * LIST CONTROLER
 */

 const controlList = () => {
     // Create a new list if there in none yes
     if (!state.list) state.list = new List();

     // Add each ingredients to the list
     state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
        

     });
 }

 // Handle delete and update item event
 elements.shopping.addEventListener('click' , e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    

    // Handle the delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')){
        // Delete from state
        state.list.deleteItem(id);

        // Delete frrom UI
        listView.deleteItem(id);

    // Handel count update
    }else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);
    }
 });


 /** 
 * LIKE CONTROLER
 */

const conrolLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
    if(!state.likes.isLiked(currentID)) {
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        )

        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // Add like to UI list
        likesView.renderLike(newLike);
     

    // User HAS like button
    }else {
        // Remove like from the state
        state.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);

        // Remove from UI list
        likesView.deleteLike(currentID);
   
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());

};

// Restore like recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();

    // Restore like
    state.likes.readStorage();

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());


    // Render the exiting like
    state.likes.likes.forEach(like => likesView.renderLike(like));


})


 // Handling recipe button clicks
 elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
         //decrease button is click
         if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingIngredients(state.recipe);
         }
         

     } else if (e.target.matches('.btn-increase, .btn-increase *')) {
         //increase button is click
         state.recipe.updateServings('inc');
         recipeView.updateServingIngredients(state.recipe);

     }else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
         // ADD INGREDIENTS TO SOHPPING LIST
         controlList();
     }else if (e.target.matches('.recipe__love, .recipe__love *')){
         //Like controler
         conrolLike();
     }

     
 });
