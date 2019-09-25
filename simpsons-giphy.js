const API_KEY = "Qg1q7Rp8iVTA1TtX45hmK0ESU21X3cA0"

function loadScript(){
    const button = document.querySelector("button")
    const ul = document.querySelector("ul")
    const input = document.querySelector("input")
    const loading = document.querySelector(".loading")
    loading.hidden = true

    function searchGifs(){
        //clear old results, if any
        Array.from(ul.children).forEach(child => child.remove())

        const searchKey = "simpsons"
        const queryUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchKey}`//input.value?
        
        loading.hidden = false;
        button.disabled = true;

        fetch(queryUrl).then(response => response.json())
                       .then(result => {
                        loading.hidden = true
                        button.disabled = false
                        const li = document.createElement("li")
                        const img = document.createElement("img")
                        img.src = result.data.images.downsized_medium.url 
                        li.appendChild(img)
                        li.classList.add("listItem")
                        ul.appendChild(li)
                       })
        }
    
    button.addEventListener("click", searchGifs)
}
document.addEventListener("DOMContentLoaded", loadScript)