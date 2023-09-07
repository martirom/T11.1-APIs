const width = document.getElementById("pic-width");
const height = document.getElementById("pic-height");
const container = document.getElementById("cat-container");
const submit = document.getElementById("submit"); 
const clear = document.getElementById("clear");

submit.addEventListener("click", function(){
    if (width.value > 0 || height.value > 0) {
        const url = "https://placekitten.com/" + width.value + "/" + height.value;
        fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            container.appendChild(imageElement);
     });
    } else {
        alert("Por favor ingrese ancho y largo");
    }
    
});

clear.addEventListener("click", function(){
    container.innerHTML="";
    width.value = "";
    height.value = "";
});