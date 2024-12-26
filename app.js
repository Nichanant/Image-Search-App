const accessKey = "ZiEj2QaxHDkF4rq7I5PmD9S8oCB4Ta4qz5a0YjhbZS0"

const formEle = document.querySelector("form")
const searchInputEle = document.getElementById("search-input")
const searchBtnEle = document.getElementById("search-btn")
const showBtnEle = document.getElementById("showBtn")
const searchResults = document.getElementById("allCards")
const containerShowBtn = document.getElementById("containerShowBtn");

let inputData = "";
let page = 1;

// function that has 'await' function MUST declare 'async' at first
async function searchImages(){
    inputData = searchInputEle.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    
    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchResults.innerHTML = "";
    }
    const results = data.results;

    // console.log(results);

    results.map((results)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-card");
        const image = document.createElement("img");
        image.src = results.urls.small;
        image.alt = results.alt_description;
        
        const imgLink = document.createElement("a");
        imgLink.href = results.links.html;
        imgLink.target = "_blank";
        imgLink.textContent = results.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imgLink);
        searchResults.appendChild(imageWrapper);
    })
 

    containerShowBtn.style.display = "flex";
   
}

formEle.addEventListener("submit",(event)=>{
    event.preventDefault(); // Prevent value before refresh page
    page = 1;
    searchImages();
    
  
})