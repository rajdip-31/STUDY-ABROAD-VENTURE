const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showSearchResult = document.querySelectorAll(".card-img-top");
const loadmoreButton = document.querySelector("#load-more");
// console.log(showSearchResult);
const loadMore = document.querySelector("#load-more");





const accesskey = "TNfUUHx9FBhNd5XyGKF2U7aTGJ28YRimVIjP2lyPZH8";
let keyWord = "";
let page = 1;

async function searchImages() {
  keyWord = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  loadmoreButton.style.display = "block";
}

//Enter click event to search for photos
searchBar.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) { //enter key code is 13
    event.preventDefault();
    page = 1;
    searchImages();
  }
});

//clicking on search button
searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})

//load More photos click event
loadmoreButton.addEventListener("click", () => {
  page++;
  searchImages();
});


//?For input Section
const inputs = document.querySelectorAll(".input");
function focusFunction(){
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurrFunction(){
  let parent = this.parentNode;
  if(this.value ==""){
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunction);
    input.addEventListener("blur", blurrFunction);
})
