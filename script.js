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
    
    const newWidth = canvas.height * aspectRatio;
    const newHeight = canvas.height;
    
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(angle * Math.PI / 180);
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