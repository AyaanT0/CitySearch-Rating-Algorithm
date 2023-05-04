//Weights (will be constantly changing according to user feedback)
const rampWeight = 50;
const washroomWeight = 20;
const menusWeight = 30;

const rampRating = prompt("Rate the ramp accessibility in this business out of 5.");
const accessWashrooms = prompt("Input 0 if the business didn't have wheelchair-friendly washrooms and 1 if they did.");
const accessMenus = prompt("Input 0 if the restaurant didn't have blind-friendly menus and 1 if they did.");
const business = {rampRating:rampRating, accessWashrooms:accessWashrooms, accessMenus, accessMenus};
rating(business);

//Function that rates a business based on its properties such as accessibility to ramps, wheelchair-friendly washrooms, and blind-friendly menus for restaurants
function rating(biz) {
  let rating = ((biz.rampRating*rampWeight)/5 +     biz.accessWashrooms*washroomWeight + biz.accessMenus*menusWeight)/20;
  console.log("The rating of this business is " + rating + " stars.");
}



class Business {
  
  constructor(rampRating, accessWashrooms, accessMenus) {
    this.rampRating = rampRating;
    this.accessWashrooms = accessWashrooms;
    this.accessMenus = accessMenus;
  }
}

//https://replit.com/join/ajralwqdjx-ayaant0
//Here is the replit link
