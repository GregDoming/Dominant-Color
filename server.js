
// const { loadImage } = require('canvas');
// const getPixels = require('get-pixels'); 


async function getColors() {
//   const img = await loadImage('http://i.imgur.com/TKLs9lo.jpg');
//   const pix = getPixels('http://i.imgur.com/TKLs9lo.jpg', (err, pixels) => {
//     if(err) {
//       console.log('bad Image path')
//       return
//     }
//     console.log('got pixels', pixels.data.toString())
//   });
let blob = await fetch('https://i.redd.it/d8021b5i2moy.jpg').then(r => r.blob())
console.log(blob)
}


getColors();

// const express = require('express');
// const path = require('path')
// const server = express();



// server.listen(3000, () => console.log('listening on port 3000'))
