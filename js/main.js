// To get element
function e(v,a) {
    if(a){
      return document.querySelectorAll(v)[a];
    } else {
      return document.querySelector(v);
    }
}
// Define Canvas globally 
var bannerCanvas = e("#home_banner");
//Set canvas Size
bannerCanvas.setAttribute("width", '772');
bannerCanvas.setAttribute("height", '250');

// Set Canvas to 2 dimensional
ctx = bannerCanvas.getContext("2d");
bannerImg = e("#home_banner > img");
    // Draw Player Image on canvas with offset pixels from ply[3] and Size from ply[0]
for(var i = 0; i <=250; i=i+2){
    for(var y = 0; y <=772; y=y+2){
        ctx.drawImage(bannerImg, y, i, 2, 2, y, i, 2, 2);
        ctx.fill();
    }
}