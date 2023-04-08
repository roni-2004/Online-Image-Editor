<a name="br1"></a> 

**~~ABOUT THE PROJECT~~**

The “**ONLINE IMAGE EDITOR**” aims to enhance an imported image. This

project allows you to edit an image online without downloading an extension

or a software. The imported image can be rotated in all four directions, flipped

vertically and horizontally, the imported image’s brightness, saturation,

inversion and grayscale properties can be edited too, with a reset button

provided to revert all changes!. This project is free to use and is really efficient

and quick. There’s a download option provided to download the edited image

easily. The IDE used for this development is Visual Studio Code.

Primary Languages used in this project’s development:

Project’s GitHub Rep[ository:](https://github.com/roni-2004/Online-Image-Editor)[ ](https://github.com/roni-2004/Online-Image-Editor)[https://github.com/roni-2004/Online-](https://github.com/roni-2004/Online-Image-Editor)

[Image-Editor](https://github.com/roni-2004/Online-Image-Editor)

Project’s Live Previe[w:](https://roni-image-editor.netlify.app/)[ ](https://roni-image-editor.netlify.app/)<https://roni-image-editor.netlify.app/>



<a name="br2"></a> 

**SAMPLE CODE - HTML**

**<!DOCTYPE**

**html>**

**<html lang="en">**

**<head>**

**<meta charset="UTF-8">**

**<meta http-equiv="X-UA-Compatible" content="IE=edge">**

**<meta name="viewport" content="width=device-width, initial-scale=1.0">**

**<title>Online Image Editor</title>**

**<link rel = "stylesheet" href="styles.css">**

**<link rel="stylesheet"**

**href="https://cdnjs.cloudflare.com/ajax/libs/font-**

**awesome/6.3.0/css/all.min.css">**

**<link rel = "stylesheet" href =**

**"https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css">**

**<script defer src="./script.js"></script>**

**</head>**

**<body>**

**<div class="Container disable">**

**<div class="mainlogo"><center><img class="logo"**

**src="Images/logo.png"></center></div>**

**<div class="wrapper">**

**<div class="editor-panel">**

**<div class="filter">**

**<div>**

**<label class="title">Filters</label>**

**<div class="Options">**

**<button id="brightness"**

**class="active">Brightness</button>**

**<button id="saturation">Saturation</button>**

**<button id="inversion">Inversion</button>**

**<button id="grayscale">Grayscale</button>**

**</div>**

**</div>**

**<div class="slider">**

**<div class="filter-info">**

**<p class="name" id="name">Brightness</p>**

**<p class="value" id="value-display">100%</p>**

**</div>**

**<div>**

**<input id="slider" type="range" min="0"**

**max="200" oninput="getSliderValue(this.value)">**

**</div>**



<a name="br3"></a> 

**</div>**

**<div class="rotate">**

**<label class="title">Rotate and Flip</label>**

**<div class="flip-options">**

**<div><button id="left"**

**onclick="applyAntiRotate()"><i class="fa-solid fa-rotate-**

**left"></i></button></div>**

**<div><button id="right"**

**onclick="applyRotate()"><i class="fa-solid fa-rotate-**

**right"></i></button></div>**

**<div><button id="flip" onclick="applyFlip()"><i**

**class="bx bx-reflect-horizontal"></i></button></div>**

**<div><button id="vertical"**

**onclick="horizontalFlip()"><i class="bx bx-reflect-**

**vertical"></i></button></div>**

**</div>**

**</div>**

**</div>**

**<div class="image">**

**<img id="image" src="Images/Click here.png" alt="Preview**

**Image">**

**</div>**

**</div>**

**<div class="controls">**

**<label class="custom-file-upload">**

**<input id="image-upload" type="file" class="input"**

**accept="image/\*">**

**Upload**

**<i class="fa fa-upload" style="font-**

**size:24px;color:#C27664;"></i>**

**</label>**

**<div class="output">**

**<button class="reset-filter"**

**onclick="resetFilter()">Reset Filters</button>**

**<button id="download" onclick="downloadImage()">Download**

**Image</button>**

**</div>**

**</div>**

**</div>**

**</div>**

**</body>**

**</html>**



<a name="br4"></a> 

**SAMPLE CODE – CSS**

@import

url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@600&display

=swap');

@import

url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap')

;

body{

background-image: url(Images/background.gif);

background-size: 100%;

background-blend-mode: lighten;

font-family: Lato;

}

\* {

margin: 0;

padding: 0;

box-sizing: border-box;

}

.mainlogo{

background-color: white;

margin-top: 0%;

margin-bottom: 0%;

margin-left: 80px;

margin-right: 80px;

border-radius: 20px;

}

.wrapper{

background-color: #cfb896;

background-blend-mode: lighten;

margin-left: 80px;

margin-right: 80px;

padding: 50px;

border-radius:20px;

box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,

rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px

30px 60px -30px;

}

.editor-panel{

display: flex;

column-gap: 30px;

justify-content: space-between;

}

.filter{

padding: 20px;

border: 2px solid black;



<a name="br5"></a> 

border-radius: 6px;

background-image: url(Images/vanilla.jpg);

flex: 1;

}

.image {

flex: 1;

display: flex;

justify-content: center;

background-color: white;

}

.Options{

padding-top: 30px;

width: 300px;

display: flex;

flex-wrap: wrap;

column-gap: 20px;

row-gap: 20px;

}

.Options > button {

width: 300px;

padding: 20px 15px;

border: 1px solid antiquewhite;

background-color: #C27664;

font-family: 'Josefin Sans', sans-serif;

font-size: 20px;

}

.Options > button:hover{

background-color: #9DC08B;

color: #fff;

}

.slider {

width: 300px;

}

.filter-info {

display: flex;

align-items: flex-start;

padding-left: 50px;

flex-direction: column;

}

.image {

border: 2px solid #000;

}

.image > img {

max-height: 500px;

}

.title {



<a name="br6"></a> 

font-size: 30px;

font-weight: 600;

margin-bottom: 10px;

}

.filter {

display: flex;

justify-content: space-around;

}

.flip-options {

padding-top: 30px;

display: flex;

flex-direction: column;

row-gap: 20px;

justify-content: space-between;

}

.flip-options > div > button {

width: 80px;

height: 70px;

padding: 10px;

border: 1px solid antiquewhite;

border-radius: 50%;

background-color: #C27664;

}

.flip-options > div > button:hover{

background-color: #03C988;

color: black;

}

.slider > div > input {

position: relative;

top: 200px;

transform: rotate(-90deg);

}

.slider > div > p {

position: relative;

top: 100px;

text-align: center;

font-size: 25px;

}

.controls {

display: flex;

justify-content: space-between;

padding-top: 20px;

}

.output > button {

width: 200px;

height: 55px;



<a name="br7"></a> 

border: none;

font-family: 'Josefin Sans', sans-serif;

font-size: 20px;

}

button {

background-color: #bae8e8;

}

input[type="file"] {

display: none;

}

.custom-file-upload {

border: 1px solid #ccc;

display: inline-block;

padding: 6px 12px;

cursor: pointer;

padding: 20px;

background-color: #bae8e8;

width: 200px;

height: 55px;

border: none;

font-family: 'Josefin Sans', sans-serif;

font-size: 20px;

text-align: center;

}



<a name="br8"></a> 

**~~SAMPLE CODE – JAVASCRIPT~~**

const brightness = document.getElementById('brightness')

const saturation = document.getElementById('saturation')

const inversion = document.getElementById('inversion')

const grayscale = document.getElementById('grayscale')

const titleName = document.getElementById('name')

brightness.addEventListener('click', () => {

selection = 1

console.log(selection)

setTitle()

})

saturation.addEventListener('click', () => {

selection = 2

console.log(selection)

setTitle()

})

inversion.addEventListener('click', () => {

selection = 3

console.log(selection)

setTitle()

})

grayscale.addEventListener('click', () => {

selection = 4

console.log(selection)

setTitle()

})

let selection = 0

function setTitle() {

switch (selection) {

case 1:

titleName.innerText = 'Brightness'

break;

case 2:

titleName.innerText = 'Saturation'

break;

case 3:

titleName.innerText = 'Inversion'

break;

case 4:

titleName.innerText = 'Grayscale'

break;

}

const slider = document.getElementById('slider')

slider.value = 0

}

function getSliderValue(val) {

switch (selection) {

case 1:



<a name="br9"></a> 

getBrightness(val)

break;

case 2:

getSaturation(val)

break;

case 3:

getInversion(val)

break;

case 4:

getGrayscale(val)

break;

}

}

function getBrightness(val) {

const value = document.getElementById('value-display')

value.innerText = val + '%'

filterArr.push(`brightness(${val}%)`)

setBrightness(val)

}

function setBrightness(val) {

const image = document.getElementById('image')

image.style.filter = `brightness(${val}%)`

}

function getSaturation(val) {

const value = document.getElementById('value-display')

value.innerText = val + '%'

filterArr.push(`saturate(${val}%)`)

setSaturation(val)

}

function setSaturation(val) {

const image = document.getElementById('image')

image.style.filter = `saturate(${val}%)`

}

function getInversion(val) {

const value = document.getElementById('value-display')

value.innerText = val + '%'

filterArr.push(`invert(${val}%)`)

setInversion(val)

}

function setInversion(val) {

const image = document.getElementById('image')

image.style.filter = `invert(${val}%)`

}

function getGrayscale(val) {

const value = document.getElementById('value-display')

value.innerText = val + '%'

filterArr.push(`grayscale(${val}%)`)

setGrayscale(val)

}

function setGrayscale(val) {



<a name="br10"></a> 

const image = document.getElementById('image')

image.style.filter = `grayscale(${val}%)`

}

const input = document.getElementById('image-upload');

input.addEventListener('change', (event) => {

const file = event.target.files[0];

const reader = new FileReader();

reader.addEventListener('load', (event) => {

const url = event.target.result;

const image = document.getElementById('image');

image.src = url;

});

reader.readAsDataURL(file);

});

filterArr = []

function downloadImage() {

var image = document.getElementById("image");

var canvas = document.createElement("canvas");

canvas.width = image.width;

canvas.height = image.height;

var ctx = canvas.getContext("2d");

filterArr.forEach(filter => {

ctx.filter = filter

})

ctx.drawImage(image, 0, 0);

if (isFlippedHorizontally) {

console.log("isFlippedHorizontally")

ctx.scale(-1, 1);

ctx.drawImage(image, -image.width, 0);

}

const aspectRatio = image.width / image.height;

const newWidth = canvas.height \* aspectRatio;

const newHeight = canvas.height;

ctx.translate(canvas.width/2, canvas.height/2);

ctx.rotate(angle \* Math.PI / 180);

ctx.drawImage(image, -newWidth/2, -newHeight/2, newWidth, newHeight);

var link = document.createElement("a");

link.download = "filtered-image.png";

link.href = canvas.toDataURL("image/png");

link.click();

}

let isFlipped = false

function applyFlip() {

const image = document.getElementById('image')

if (isFlipped) {

image.style.rotate = '0deg'

isFlipped = false



<a name="br11"></a> 

} else {

image.style.rotate = '180deg'

angle += 180

isFlipped = true

}

}

let transformArr = []

angle = 0

function applyRotate() {

const image = document.getElementById('image')

angle += 90

transformArr.push(`rotate(${angle}deg)`)

image.style.transform = `rotate(${angle}deg)`

}

function applyAntiRotate() {

const image = document.getElementById('image')

angle -= 90

transformArr.push(`rotate(${angle}deg)`)

image.style.transform = `rotate(${angle}deg)`

}

let isFlippedHorizontally = false

function horizontalFlip() {

const image = document.getElementById('image')

if (isFlippedHorizontally) {

image.style.transform = `scaleX(1)`

isFlippedHorizontally = false

} else {

image.style.transform = `scaleX(-1)`

isFlippedHorizontally = true

}

}

function resetFilter() {

const image = document.getElementById('image')

image.style.filter = 'none'

const slider = document.getElementById('slider')

slider.value = 0

const value = document.getElementById('value-display')

value.innerText = '0%'

filterArr = []

transformArr = []

angle = 0

isFlipped = false

isFlippedHorizontally = false

}



<a name="br12"></a> 

**~~SAMPLE OUTPUT~~**

**Step 2: Edit**

**Step 1: Upload**

**Step 3: Download**

