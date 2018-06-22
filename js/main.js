// To get element
function e(v,a) {
    if(a){
      return document.querySelectorAll(v)[a];
    } else {
      return document.querySelector(v);
    }
}
// To generate Random Number 
function getRNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Set banner image height & width
imgH = 225;
imgW = 720;
// define array for pixels information store
var imgPixel = [];
for(var i = 0; i <=imgH; i=i+20){
    imgPixel[i] = [];
    for(var y = 0; y <=imgW; y=y+20){
        imgPixel[i][y] = [];
        // random Size of Pixel
        imgPixel[i][y][0] = getRNum(-100, 100);
        // random X position of Pixel
        imgPixel[i][y][1] = getRNum(y-200, y+200);
        // random Y position of Pixel
        imgPixel[i][y][2] = getRNum(i-200, i+200);
    }
}

// change target number to original number
function oriNum(on,tn){
    if(tn<on){
        tn++;
    } else if (tn>on){
        tn--;
    }
    return tn;
}
// Define Canvas globally 
var bannerCanvas = e("#home_banner");
//Set canvas Size
bannerCanvas.setAttribute("width", imgW+200);
bannerCanvas.setAttribute("height", imgH+200);

// Set Canvas writer
ctx = bannerCanvas.getContext("2d");
//get Banner image
bannerImg = e("#home_banner > img");
// 20ms interval
setInterval(() => {
    //clear canvas
    ctx.clearRect(0, 0, bannerCanvas.width, bannerCanvas.height);
    // Differentiate pixels from images 
    for(var i = 0; i <=imgH; i=i+20){
        for(var y = 0; y <=imgW; y=y+20){
            // fill pixel to canvas
            ctx.drawImage(bannerImg, y, i, imgPixel[i][y][0], imgPixel[i][y][0], imgPixel[i][y][1]+100, imgPixel[i][y][2]+100, imgPixel[i][y][0], imgPixel[i][y][0]);
            ctx.fill();
            // change to original value
            imgPixel[i][y][0] = oriNum(20,imgPixel[i][y][0]);
            imgPixel[i][y][1] = oriNum(y,imgPixel[i][y][1]);
            imgPixel[i][y][2] = oriNum(i,imgPixel[i][y][2]);
        }
    }
}, 20);