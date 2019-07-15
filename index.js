var button = $('button');
var message= $('.message');
var description=$('.description');
var address=$('.address');
button.on("click", doSomething);

function doSomething(){
  // console.log("button clicked")
  var changeText= $('.message')
  var foodies =["Enjoy Vegetarian", "Sushi Ran","Orenchi Ramen","Cheeseboard","Picante",
  "Viks","Thai Temple","City View","Chat Bhavaan","Yoshi's", "Bowl'd","Veggie Grill"]

  var changeText = $ ('.addresses')
  var addresses=["833 Kearny St, San Francisco, CA 94108", "107 Caledonia St, Sausalito, CA 94965","3540 Homestead Rd, Santa Clara, CA 95051","1512 Shattuck Ave, Berkeley, CA 94709","1328 Sixth Street, Berkeley, CA 94710","2390 Fourth St, Berkeley, CA 94710","2121 Channing Way, Berkeley, CA 94704","662 Commercial St, San Francisco, CA 94111","5355 Mowry Ave, Fremont, CA 94538","5355 Mowry Ave, Fremont, CA 94538","1479 Solano Ave, Albany, CA 94706","48 Shattuck Square, Berkeley, CA 94704"]


  var changeText=$('.descriptions')
  var descriptions=["Craving Chinese food but need a vegan alternative? Enjoy Vegetarian combines the best of both worlds!","This is a great upscale Japanese restaurant. Options range from tempura to maki to ice cream. Take a chance to explore the surrounding Sausalito area if you can!","Orenchi Ramen in Santa Clara has rich flavors and a great atmosphere. Here to satisfy any ramen cravings!","Cheeseboard pizza has a great variety of slices as well as a bakery. Prepare for a long line!","Picante is a comfortable, lively restaurant with great Mexican food.","The ultimate fast food craving for Indian food. This busy restaurant serves mouth-watering Indian delicacies that will leave you asking for more! Vegetarian-friendly.","Thai Temple is held at a Buddhist temple in North Berkeley on Sundays. The token system and great food make for a great weekend outing.","City View is a hidden gem in San Francisco. It's bustling with conversation and dim sum carts with delicious food.","Chat Bhaavan is your go-to for fast and easy Indian food. Dine in at a casual bar or take out homey food for the ultimate night-in.","Yoshi's is a vibrant Japanese restaurant in Oakland. Pair a classy dining experience with a show in the next room. Musicians take the stage and fill the room with great music over a meal.","Bowl'd is a classic spot on Solano with great options for Korean food.","Looking for a vegan twist on your favorite classic American foods. Veggie Grill, with their delicious seasonal menu, serves your favorite American dishes made from entirely plant-based ingredients. Vegan and Vegetarian friendly."]

  var randomDecimal=Math.random();
  var random=randomDecimal*foodies.length;
  var final=Math.floor(random);
  var food=foodies[final]
  var food2=descriptions[final]
  var food3=addresses[final]

  message.text(food);
  description.text(food2);
  address.text(food3);

  console.log(food);
  console.log(food2);
  console.log(food3);
  // button.toggleClass('.message');

}
