var hungryDog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  
  happyDog = loadImage("images/dogImg.png");
  hungryDog = loadImage("images/dogImg1.png");
  happyDog.addImage(dogImg)
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  happyDog = createSprite(250,250,150,150);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    writeStock();
    happydog.addImage(hungryDog);
   }
    drawSprites();
    text("value:10",250,230);
    text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  //add styles here

}

function readStock(data){
  foodS-data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{} 
  database.ref('/').update({
    Food:x
  })
}



