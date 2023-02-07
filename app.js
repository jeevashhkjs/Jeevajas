// local reviews data
const reviews = [
  {
    id: 1,
    name: "sara jones",
    job: "ux designer",
    img:
    "https://igimages.gumlet.io/telugu/gallery/actress/aakansha_singh/akanksh071217_poster.jpg?w=240&dpr=1.0",
    text:
    ` "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
asperiores debitis incidunt, eius earum ipsam cupiditate libero?
Iste, doloremque nihil?`
  },
  {
    id: 2,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 5,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];



for(let i=0;i<reviews.length;i++){
  let count = 0;

  let nextBtn = document.querySelector(".next-btn").addEventListener("click",()=>{
    if(count >= 4){
      count = 0
    }else{
      count ++
    }


    let id = reviews[i].id
    let name = reviews[i].name
    let job = reviews[i].job
    let img = reviews[i].img
    let text = reviews[i].text

    let author = document.querySelector(".author").innerText = reviews[count].name
    let jobs = document.querySelector(".job").innerText = reviews[count].job
    let info = document.querySelector(".info").innerText = reviews[count].text
    let imgs = document.querySelector(".person-img").src = reviews[count].img


  })
  let previousBtn = document.querySelector(".prev-btn").addEventListener("click",()=>{
    if(count <= 0){
      count = 4
    }else{
      count --
    }

    console.log(count);
    let id = reviews[i].id
    let name = reviews[i].name
    let job = reviews[i].job
    let img = reviews[i].img
    let text = reviews[i].text

    let author = document.querySelector(".author").innerText = reviews[count].name
    let jobs = document.querySelector(".job").innerText = reviews[count].job
    let info = document.querySelector(".info").innerText = reviews[count].text
    let imgs = document.querySelector(".person-img").src = reviews[count].img
  })


  let random = document.querySelector(".random-btn").addEventListener("click",()=>{
  let randomNumber = Math.floor(Math.random()*4)
    let id = reviews.id
    let name = reviews.name
    let job = reviews.job
    let img = reviews.img
    let text = reviews.text

    let author = document.querySelector(".author").innerText = reviews[randomNumber].name
    let jobs = document.querySelector(".job").innerText = reviews[randomNumber].job
    let info = document.querySelector(".info").innerText = reviews[randomNumber].text
    let imgs = document.querySelector(".person-img").src = reviews[randomNumber].img
  })
}