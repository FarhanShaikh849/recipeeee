function preload(){
background0 = loadImage("backgroundddd.jpg");
}

function setup() {
  createCanvas(1535, 3300);

}

function draw() {
  background(background0);

  stroke("black");
  strokeWeight(2);
  textSize(70);
  text("CHICKEN TIKKA PIZZA RECIPE",250,125) 

  strokeWeight(2);
  textSize(40);
  text("INGREDIENTS",180,250);
  text("MARINADE:",180,850);
  text("SAUCES:",180,1400);
  text("SPICE MIX:",180,1650);
  text("INSTRUCTIONS",180,1900);
  text("NOTE:",180,3050);

  textSize(35);
  strokeWeight(1.8);
  text("• 10 oz skinless and boneless chicken breast, cut into 1/2-inch cubes.",157.5,300);
  text("• 1 tablespoon butter.",157.5,350);
  text("• 2 cloves garlic, minced.",157.5,400);
  text("• 1/2 jalapeno, deseeded.",157.5,450);
  text("• Salt to taste.",157.5,500);
  text("• 1 12-inches store-bought pizza crust or three (3) 7-inches mini pizza crusts.",157.5,550);
  text("• Olive oil for brushing.",157.5,600);
  text("• 1/4 onion, thinly sliced.",157.5,650);
  text("• 1 cup mozzarella cheese.",157.5,700);
  text("• Handful of coriander leaves/cilantro, chopped, save some for garnish.",157.5,750);

  text("• 1/2 teaspoon ground cumin.",157.5,900);
  text("• 1/2 teaspoon ground cayenne pepper.",157.5,950);
  text("• 1/2 teaspoon ground garam masala.",157.5,1000);
  text("• 1/2 teaspoon minced fresh ginger.",157.5,1050);
  text("• 1/4 teaspoon salt.",157.5,1100);
  text("• 1/4 teaspoon ground black pepper.",157.5,1150);
  text("• 1 tablespoon lemon juice.",157.5,1200);
  text("• 2 tablespoons plain yogurt.",157.5,1250);
  text("• 1 pinch cinnamon.",157.5,1300);

  text("• 4 oz tomato sauce.",157.5,1450);
  text("• 2 tablespoons plain yogurt.",157.5,1500);
  text("• 2 tablespoons heavy cream.",157.5,1550);
  
  text("• 1/2 teaspoon cumin.",157.5,1700);
  text("• 1/2 teaspoon paprika.",157.5,1750);
  text("• 1/2 teaspoon garam masala.",157.5,1800);

  text("• In a bowl, marinade the chicken with the Marinade for at least an hour in the",157.5,1950);
  text("refrigerator.",180,2000);
  text("• Line a layer of aluminum foil in a baking pan for grilling. Spread the",157.5,2050);
  text("marinated chicken in a single layer on the pan, discard the remaining",180,2100);
  text("marinade. Grill the chicken at 450F for 6-7 minutes, turning at half time.",180,2150);
  text("• While the chicken is cooking, prepare the Tomato Sauce and Spice Mix in",157.5,2200);
  text("separate bowls. Remove the chicken from the pan when it is done and",180,2250);
  text("discard the juice.",180,2300);
  text("• Heat a small sauce pan and melt the butter. Sauté the garlic and jalapeno",157.5,2350);
  text("until aromatic. Pour in the Spice Mix and sauté until fragrant, about 1-2",180,2400);
  text("minutes on medium heat. Remove the jalapeno and discard.",180,2450);
  text("• Add in the Tomato Sauce and stir well to mix. Sprinkle salt to taste and",157.5,2500);
  text("continue to simmer until the sauce thickens, another 2 minutes. Turn off",180,2550);
  text("the heat and add the chicken meat into the sauce and mix well.",180,2600);
  text("• Pre-heat the oven to 450F. Place the pizza crust on a pizza pan and brush",157.5,2650);
  text("lightly with olive oil. Spread the sauce/gravy on the pizza crust. Sprinkle",180,2700);
  text("1/2 cup of cheese. Arrange the chicken on the pizza. Top it with the sliced",180,2750);
  text("onions, chopped cilantro and the remaining cheese.",180,2800);
  text("• Reduce the temperature to 425F. Bake the pizza for 8-10 minutes. Remove",157.5,2850);
  text("the pizza from the pan when is done and garnish the remaining chopped",180,2900);
  text("cilantro.",180,2950);

  text("• Bake according to the instructions on your pizza crust. Depending on the",157.5,3100);
  text("type of crusts you buy, the time and temperature may be slightly different.",180,3150);
  text("• If you prefer, you can stir fry the chicken instead of grilling it.",157.5,3200);

  rectMode(CENTER);
  stroke("white");
  strokeWeight(2);
  fill("black");
  rect(140,1650,7.5,3200);
  rect(1375,1650,7.5,3200);
  rect(762.5,45,1232.5,7.5);
  rect(762.5,3255,1232.5,7.5);

  drawSprites();
}