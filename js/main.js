const cats = [
  {
    name: "Cat",
    bio: "Cat is an English word.",
    thumb: "images/kitten1-thumb.jpeg",
    img: "images/kitten1.jpeg"
  },
  {
    name: "Mao",
    bio: "Mao is a Cantonese word.",
    thumb: "images/kitten2-thumb.jpeg",
    img: "images/kitten2.jpeg"
  },
  {
    name: "Gato",
    bio: "Gato is a Spanish word",
    thumb: "images/kitten3-thumb.jpeg",
    img: "images/kitten3.jpeg"
  },
  {
    name: "Billi",
    bio: "Billi is a Hindi word.",
    thumb: "images/kitten4-thumb.jpeg",
    img: "images/kitten4.jpeg"
  },
  {
    name: "Chat",
    bio: "Chat is a French word.",
    thumb: "images/kitten5-thumb.jpeg",
    img: "images/kitten5.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Polish word.",
    thumb: "images/kitten6-thumb.jpeg",
    img: "images/kitten6.jpeg"
  },
  {
    name: "Kit",
    bio: "Kit is a Ukrainian word.",
    thumb: "images/kitten7-thumb.jpeg",
    img: "images/kitten7.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Russian word.",
    thumb: "images/kitten8-thumb.jpeg",
    img: "images/kitten8.jpeg"
  }
]

const catsRow = document.getElementById("catsRow")
// loop over the array of data
for(const cat of cats) {
  console.log(cat.name)
  const card = `<div class="col">
  <div class="card">
      <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cat.thumb}" data-fullimg = "${cat.img}" class="card-img-top" alt="placeholder kitten">
      <div class="card-body">
        <h5 class="card-title">${cat.name}</h5>
        <p class="card-text">${cat.bio}</p>
        <a href="#" class="btn btn-light like" data-catname = "${cat.name}" data-catbio = "${cat.bio}" data-catthumb = "${cat.thumb}" data-catfulling = "${cat.img}">Like</a>
      </div>
    </div>
</div>`

//add the card to the cats row
catsRow.insertAdjacentHTML("beforeend", card)
}



// adding event listener to the row
catsRow.addEventListener("click", openModal)



function openModal (e) { 
  //delegate the event to the target element if it contains class card-img-top
  if (e.target.classList.contains("card-img-top")){
    const fullSizeImage = e.target.dataset.fullimg 
    document.querySelector(".modal-body").innerHTML = `<img src="${fullSizeImage}" alt="placeholder kitten">`
  }
}

/* week 11 */

  //get the savedCats from localstorage 
  let savedCats = localStorage.getItem("mycats")
  //if the saved cats are null then !savedcats will be true
  if (!savedCats){
    // set savedCats to empty array
    savedCats = []
  } else {
    // is savedCats is not null (be ture) then set savedCats to parsed value of savedCats
    savedCats = JSON.parse(savedCats)
  }

const likeButtons = document.querySelectorAll(".like")
if (likeButtons.length > 0){
  for(const likeButton of likeButtons) {
    likeButton.addEventListener("click", likeCat)

  }
}

function likeCat(e){
  e.preventDefault()
  const catName = this.dataset.catname
  const catBio = this.dataset.catBio
  const catThumb = this.dataset.catthumb
  const catImg = this.dataset.catfulling
  const catInfo = {name: catName, bio: catBio, thumb: catThumb, img: catImg}
  console.log(catInfo)


  const catExist = findCat(catName)
}

function findCat (catName) {
  for (const savedCat of savedCats){
    if (savedCat.name == catName){
      return savedCats.indexOf(savedCat)
    }
  }
  return null
}
