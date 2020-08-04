var colors = ["blue", "red", "yellow","green", "lavender", "aqua", "white","gold","grey","purple"]

setInterval(function(){
  var background= document.getElementById("bg")
  background.style.backgroundColor = colors[Math.floor(Math.random() * 10)]
  console.log("Color Changed")
},3000)

function showImage(){
  var image= document.getElementById("pog")
  image.style.display="block"
}
