import axios from 'axios';
import {key} from '../config';

export default class Search{

    constructor(query){
        this.query = query;

    }

    async getResults() {
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result  = res.data.recipes;
            //console.log(this.result);
            
    
        } catch (error) {
            alert(error);
        }
    }
    
}













/*
{publisher: "101 Cookbooks", f2f_url: "http://food2fork.com/view/47746", title: "Best Pizza Dough Ever", source_url: "http://www.101cookbooks.com/archives/001199.html", recipe_id: "47746", …}
1: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/46956", title: "Deep Dish Fruit Pizza", source_url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/", recipe_id: "46956", …}
2: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35477", title: "Pizza Dip", source_url: "http://www.closetcooking.com/2011/03/pizza-dip.html", recipe_id: "35477", …}
3: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/41470", title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)", source_url: "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html", recipe_id: "41470", …}
4: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35478", title: "Pizza Quesadillas (aka Pizzadillas)", source_url: "http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html", recipe_id: "35478", …}
5: {publisher: "Two Peas and Their Pod", f2f_url: "http://food2fork.com/view/54454", title: "Sweet Potato Kale Pizza with Rosemary & Red Onion", source_url: "http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/", recipe_id: "54454", …}
6: {publisher: "My Baking Addiction", f2f_url: "http://food2fork.com/view/2ec050", title: "Pizza Dip", source_url: "http://www.mybakingaddiction.com/pizza-dip/", recipe_id: "2ec050", …}
7: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/6fab1c", title: "Pizza Potato Skins", source_url: "http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/", recipe_id: "6fab1c", …}
8: {publisher: "Bon Appetit", f2f_url: "http://food2fork.com/view/49346", title: "No-Knead Pizza Dough", source_url: "http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough", recipe_id: "49346", …}
9: {publisher: "Simply Recipes", f2f_url: "http://food2fork.com/view/36453", title: "Homemade Pizza", source_url: "http://www.simplyrecipes.com/recipes/homemade_pizza/", recipe_id: "36453", …}
10: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35626", title: "Taco Quesadilla Pizzas", source_url: "http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html", recipe_id: "35626", …}
11: {publisher: "All Recipes", f2f_url: "http://food2fork.com/view/17796", title: "Jay’s Signature Pizza Crust", source_url: "http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx", recipe_id: "17796", …}
12: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35097", title: "Avocado Breakfast Pizza with Fried Egg", source_url: "http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html", recipe_id: "35097", …}
13: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/46895", title: "Pepperoni Pizza Burgers", source_url: "http://thepioneerwoman.com/cooking/2012/10/pepperoni-pizza-burgers/", recipe_id: "46895", …}
14: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35635", title: "Thai Chicken Pizza with Sweet Chili Sauce", source_url: "http://www.closetcooking.com/2012/02/thai-chicken-pizza-with-sweet-chili.html", recipe_id: "35635", …}
15: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47000", title: "One Basic Pizza Crust", source_url: "http://thepioneerwoman.com/cooking/2011/09/steakhouse-pizza/", recipe_id: "47000", …}
16: {publisher: "Two Peas and Their Pod", f2f_url: "http://food2fork.com/view/54491", title: "Peach, Basil, Mozzarella, & Balsamic Pizza", source_url: "http://www.twopeasandtheirpod.com/peach-basil-mozzarella-balsamic-pizza/", recipe_id: "54491", …}
17: {publisher: "Real Simple", f2f_url: "http://food2fork.com/view/38812", title: "English-Muffin Egg Pizzas", source_url: "http://www.realsimple.com/food-recipes/browse-all-…glish-muffin-egg-pizzas-10000000663044/index.html", recipe_id: "38812", …}
18: {publisher: "My Baking Addiction", f2f_url: "http://food2fork.com/view/dd21dd", title: "Simple No Knead Pizza Dough", source_url: "http://www.mybakingaddiction.com/no-knead-pizza-dough-recipe/", recipe_id: "dd21dd", …}
19: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47011", title: "Grilled Veggie Pizza", source_url: "http://thepioneerwoman.com/cooking/2011/07/grilled-vegetable-pizza/", recipe_id: "47011", …}
20: {publisher: "My Baking Addiction", f2f_url: "http://food2fork.com/view/0fb8f4", title: "Spicy Chicken and Pepper Jack Pizza", source_url: "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/", recipe_id: "0fb8f4", …}
21: {publisher: "All Recipes", f2f_url: "http://food2fork.com/view/12913", title: "Exquisite Pizza Sauce", source_url: "http://allrecipes.com/Recipe/Exquisite-Pizza-Sauce/Detail.aspx", recipe_id: "12913", …}
22: {publisher: "Simply Recipes", f2f_url: "http://food2fork.com/view/36476", title: "How to Grill Pizza", source_url: "http://www.simplyrecipes.com/recipes/how_to_grill_pizza/", recipe_id: "36476", …}
23: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47161", title: "PW’s Favorite Pizza", source_url: "http://thepioneerwoman.com/cooking/2010/02/my-favorite-pizza/", recipe_id: "47161", …}
24: {publisher: "My Baking Addiction", f2f_url: "http://food2fork.com/view/a723e8", title: "Barbecue Chicken Pizza", source_url: "http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/", recipe_id: "a723e8", …}
25: {publisher: "Two Peas and Their Pod", f2f_url: "http://food2fork.com/view/54388", title: "Avocado Pita Pizza with Cilantro Sauce", source_url: "http://www.twopeasandtheirpod.com/avocado-pita-pizza-with-cilantro-sauce/", recipe_id: "54388", …}
26: {publisher: "BBC Good Food", f2f_url: "http://food2fork.com/view/cb13dd", title: "Pizza margherita in 4 easy steps", source_url: "http://www.bbcgoodfood.com/recipes/4683/pizza-margherita-in-4-easy-steps", recipe_id: "cb13dd", …}
27: {publisher: "What's Gaby Cooking", f2f_url: "http://food2fork.com/view/ead4e0", title: "Pizza Monkey Bread", source_url: "http://whatsgabycooking.com/pizza-monkey-bread/", recipe_id: "ead4e0", …}
28: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/46892", title: "Supreme Pizza Burgers", source_url: "http://thepioneerwoman.com/cooking/2012/10/supreme-pizza-burgers/", recipe_id: "46892", …}
29: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35128", title: "Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon", source_url: "http://www.closetcooking.com/2012/07/balsamic-strawberry-and-chicken-pizza.html", recipe_id: "35128", …}
length: 30
__proto__: Array(0)
*/
/*
0: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47025", title: "Pasta with Pesto Cream Sauce", source_url: "http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/", recipe_id: "47025", …}
1: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/8f3e73", title: "The Best Lasagna Ever", source_url: "http://thepioneerwoman.com/cooking/2007/06/the_best_lasagn/", recipe_id: "8f3e73", …}
2: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47032", title: "Shrimp Scampi", source_url: "http://thepioneerwoman.com/cooking/2011/04/16-minute-meal-shrimp-scampi/", recipe_id: "47032", …}
3: {publisher: "Two Peas and Their Pod", f2f_url: "http://food2fork.com/view/54426", title: "Creamy Avocado Pasta", source_url: "http://www.twopeasandtheirpod.com/creamy-avocado-pasta/", recipe_id: "54426", …}
4: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47275", title: "Pasta Alla Vodka", source_url: "http://thepioneerwoman.com/cooking/2008/12/friday-night-dinner-pasta-alla-vodka/", recipe_id: "47275", …}
5: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/46943", title: "Seafood Pasta", source_url: "http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/", recipe_id: "46943", …}
6: {publisher: "Smitten Kitchen", f2f_url: "http://food2fork.com/view/acaff5", title: "baked orzo with eggplant and mozzarella", source_url: "http://smittenkitchen.com/blog/2012/09/baked-orzo-with-eggplant-and-mozzarella/", recipe_id: "acaff5", …}
7: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/46882", title: "Bowtie Chicken Alfredo", source_url: "http://thepioneerwoman.com/cooking/2012/12/bowtie-chicken-alfredo/", recipe_id: "46882", …}
8: {publisher: "Chow", f2f_url: "http://food2fork.com/view/9adcbc", title: "Prosciutto-Wrapped Macaroni and Cheese Cups Recipe", source_url: "http://www.chow.com/recipes/30113-prosciutto-wrapped-macaroni-and-cheese-cups", recipe_id: "9adcbc", …}
9: {publisher: "101 Cookbooks", f2f_url: "http://food2fork.com/view/48046", title: "Stuffed Shells", source_url: "http://www.101cookbooks.com/archives/stuffed-shells-recipe.html", recipe_id: "48046", …}
10: {publisher: "Smitten Kitchen", f2f_url: "http://food2fork.com/view/c6fc03", title: "pasta and white beans with garlic-rosemary oil", source_url: "http://smittenkitchen.com/blog/2013/01/pasta-and-white-beans-with-garlic-rosemary-oil/", recipe_id: "c6fc03", …}
11: {publisher: "All Recipes", f2f_url: "http://food2fork.com/view/2658", title: "Baked Ziti I", source_url: "http://allrecipes.com/Recipe/Baked-Ziti-I/Detail.aspx", recipe_id: "2658", …}
12: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35628", title: "Taco Stuffed Shells", source_url: "http://www.closetcooking.com/2012/02/taco-stuffed-shells.html", recipe_id: "35628", …}
13: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35401", title: "Lasagna Soup", source_url: "http://www.closetcooking.com/2012/01/lasagna-soup.html", recipe_id: "35401", …}
14: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47296", title: "Pastor Ryan’s Pasta Carbonara", source_url: "http://thepioneerwoman.com/cooking/2008/09/cooking-with-ryan-pasta-carbonara/", recipe_id: "47296", …}
15: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/46922", title: "Pasta Carbonara", source_url: "http://thepioneerwoman.com/cooking/2012/05/pasta-carbonara/", recipe_id: "46922", …}
16: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47361", title: "Penne a la Betsy", source_url: "http://thepioneerwoman.com/cooking/2007/09/cooking_with_my_punk-ass_little_sister_penne_a_la_betsy/", recipe_id: "47361", …}
17: {publisher: "Simply Recipes", f2f_url: "http://food2fork.com/view/35758", title: "Baked Ziti", source_url: "http://www.simplyrecipes.com/recipes/baked_ziti/", recipe_id: "35758", …}
18: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/c465d3", title: "Quick and Easy Roasted Red Pepper Pasta", source_url: "http://thepioneerwoman.com/cooking/2013/05/quick-and-easy-roasted-red-pepper-pasta/", recipe_id: "c465d3", …}
19: {publisher: "101 Cookbooks", f2f_url: "http://food2fork.com/view/47991", title: "Winter Pasta", source_url: "http://www.101cookbooks.com/archives/winter-pasta-recipe.html", recipe_id: "47991", …}
20: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47118", title: "Grilled Chicken with Lemon Basil Pasta", source_url: "http://thepioneerwoman.com/cooking/2010/07/grilled-chicken-with-lemon-basil-pasta/", recipe_id: "47118", …}
21: {publisher: "101 Cookbooks", f2f_url: "http://food2fork.com/view/bc5311", title: "Ginger Coconut Milk Soup", source_url: "http://www.101cookbooks.com/archives/ginger-coconut-milk-soup-recipe.html", recipe_id: "bc5311", …}
22: {publisher: "All Recipes", f2f_url: "http://food2fork.com/view/7202", title: "Chicken Fettuccini Alfredo", source_url: "http://allrecipes.com/Recipe/Chicken-Fettuccini-Alfredo/Detail.aspx", recipe_id: "7202", …}
23: {publisher: "Two Peas and Their Pod", f2f_url: "http://food2fork.com/view/54290", title: "Lemon Chicken Orzo Soup", source_url: "http://www.twopeasandtheirpod.com/lemon-chicken-orzo-soup/", recipe_id: "54290", …}
24: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47041", title: "Pasta Salad with Tomatoes, Zucchini, and Feta", source_url: "http://thepioneerwoman.com/cooking/2011/03/pasta-salad-with-tomatoes-zucchini-and-feta/", recipe_id: "47041", …}
25: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/47096", title: "Three Cheese-Stuffed Shells with Meaty Tomato Sauce", source_url: "http://thepioneerwoman.com/cooking/2010/10/three-cheese-stuffed-shells-with-meaty-tomato-sauce/", recipe_id: "47096", …}
26: {publisher: "The Pioneer Woman", f2f_url: "http://food2fork.com/view/f852ec", title: "Pesto Pasta Salad", source_url: "http://thepioneerwoman.com/cooking/2013/04/pesto-pasta-salad/", recipe_id: "f852ec", …}
27: {publisher: "Two Peas and Their Pod", f2f_url: "http://food2fork.com/view/054a70", title: "Baked Pasta with Spinach and Ricotta", source_url: "http://www.twopeasandtheirpod.com/baked-pasta-with-spinach-and-ricotta/", recipe_id: "054a70", …}
28: {publisher: "Two Peas and Their Pod", f2f_url: "http://food2fork.com/view/54277", title: "Creamy Tomato Orzo Soup", source_url: "http://www.twopeasandtheirpod.com/creamy-tomato-orzo-soup/", recipe_id: "54277", …}
29: {publisher: "Closet Cooking", f2f_url: "http://food2fork.com/view/35498", title: "Pumpkin Mac n Cheese with Amaretti Crust", source_url: "http://www.closetcooking.com/2011/10/pumpkin-mac-n-cheese.html", recipe_id: "35498", …}
length: 30
__proto__: Array(0)
﻿

​
*/