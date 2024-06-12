let img;

function preload() {
  img = loadImage('https://http2.mlstatic.com/D_NQ_NP_889329-MLA45348240830_032021-O.webp');
 
}

function setup() {
  createCanvas(img.width, img.height);
  background(100);

  image(img, 0, 0);

  for (let pixelX = 0; pixelX < img.width; pixelX++) {
    for (let pixelY = 0; pixelY < img.height; pixelY++) {
      let colorPixel = img.get(pixelX, pixelY);
      let brillo = brightness(colorPixel);
      
      let nuevoColor;
      if (brillo < 95) {
        nuevoColor = 0;
      } else {
        nuevoColor = 255;
      }

      img.set(pixelX, pixelY, nuevoColor);
    }
  }

  img.updatePixels();

}

function draw() {
    image(img, 0, 0);
}