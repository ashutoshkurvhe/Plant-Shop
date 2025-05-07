const bestProducts = [
  {
    plantName: "Aloe Vera",
    shortDescription: "A succulent plant known for its healing properties.",
    price1: 5.99,
    price2: 9.99,
    image: "images/Best/best1.jpeg",
  },
  {
    plantName: "Snake Plant",
    shortDescription: "An easy-to-care plant that purifies indoor air.",
    price1: 7.99,
    price2: 12.99,
    image: "images/Best/best2.jpeg",
  },
  {
    plantName: "Spider Plant",
    shortDescription: "A fast-growing plant with arching green leaves.",
    price1: 4.99,
    price2: 8.99,
    image: "images/Best/best3.jpeg",
  },
  {
    plantName: "Peace Lily",
    shortDescription:
      "A beautiful plant with white flowers, ideal for low light.",
    price1: 6.99,
    price2: 11.99,
    image: "images/Best/best4.jpeg",
  },
  {
    plantName: "Fiddle Leaf Fig",
    shortDescription: "A trendy indoor tree with large green leaves.",
    price1: 15.99,
    price2: 29.99,
    image: "images/Best/best5.jpeg",
  },
  {
    plantName: "Pothos",
    shortDescription: "A trailing vine plant perfect for hanging baskets.",
    price1: 5.49,
    price2: 9.49,
    image: "images/Best/best6.jpeg",
  },
  {
    plantName: "ZZ Plant",
    shortDescription: "A low-maintenance plant with glossy leaves.",
    price1: 8.99,
    price2: 14.99,
    image: "images/Best/best7.jpeg",
  },
  {
    plantName: "Monstera",
    shortDescription: "Known for its unique split leaves and tropical look.",
    price1: 12.99,
    price2: 24.99,
    image: "images/Best/best8.jpeg",
  },
  {
    plantName: "Bamboo Palm",
    shortDescription: "A lush palm that adds greenery to indoor spaces.",
    price1: 9.99,
    price2: 18.99,
    image: "images/Best/best9.jpeg",
  },
  {
    plantName: "Rubber Plant",
    shortDescription: "A classic houseplant with dark green, shiny leaves.",
    price1: 10.99,
    price2: 19.99,
    image: "images/Best/best10.jpeg",
  },
  {
    plantName: "Calathea",
    shortDescription: "A decorative plant with striking patterned leaves.",
    price1: 11.49,
    price2: 20.99,
    image: "images/Best/best11.jpeg",
  },
];

const newArrivals = [
  {
    plantName: "Aloe Vera",
    shortDescription: "A succulent plant known for its healing properties.",
    price1: 5.99,
    price2: 9.99,
    image: "images/New/new1.jpeg",
  },
  {
    plantName: "Snake Plant",
    shortDescription: "An easy-to-care plant that purifies indoor air.",
    price1: 7.99,
    price2: 12.99,
    image: "images/New/new2.jpeg",
  },
  {
    plantName: "Spider Plant",
    shortDescription: "A fast-growing plant with arching green leaves.",
    price1: 4.99,
    price2: 8.99,
    image: "images/New/new3.jpeg",
  },
  {
    plantName: "Peace Lily",
    shortDescription:
      "A beautiful plant with white flowers, ideal for low light.",
    price1: 6.99,
    price2: 11.99,
    image: "images/New/new4.jpeg",
  },
  {
    plantName: "Fiddle Leaf Fig",
    shortDescription: "A trendy indoor tree with large green leaves.",
    price1: 15.99,
    price2: 29.99,
    image: "images/New/new5.jpeg",
  },
  {
    plantName: "Pothos",
    shortDescription: "A trailing vine plant perfect for hanging baskets.",
    price1: 5.49,
    price2: 9.49,
    image: "images/New/new6.jpeg",
  },
  {
    plantName: "ZZ Plant",
    shortDescription: "A low-maintenance plant with glossy leaves.",
    price1: 8.99,
    price2: 14.99,
    image: "images/New/new7.jpeg",
  },
  {
    plantName: "Monstera",
    shortDescription: "Known for its unique split leaves and tropical look.",
    price1: 12.99,
    price2: 24.99,
    image: "images/New/new8.jpeg",
  },
  {
    plantName: "Bamboo Palm",
    shortDescription: "A lush palm that adds greenery to indoor spaces.",
    price1: 9.99,
    price2: 18.99,
    image: "images/New/new9.jpeg",
  },
  {
    plantName: "Rubber Plant",
    shortDescription: "A classic houseplant with dark green, shiny leaves.",
    price1: 10.99,
    price2: 19.99,
    image: "images/New/new10.jpeg",
  },
  {
    plantName: "Calathea",
    shortDescription: "A decorative plant with striking patterned leaves.",
    price1: 11.49,
    price2: 20.99,
    image: "images/Best/best11.jpeg",
  },
];


const bestProductsGrid = document.querySelector(".bestProducts-grid");
const newArrivalsGrid = document.querySelector(".newArrivals-grid");
const sidebar = document.querySelector("aside")

document.querySelector(".bars").addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar")
})

// sidebar.addEventListener("click", () => {
//   sidebar.classList.remove("show-sidebar");
// });

const addBestProducts = () => {
  bestProducts.map((products) => {
    // console.log(products);
      
    const html = `<div class="product-card">
        <span class="product-badge">Best</span>
        <div class="product-image">
        <img src=${products.image}>
        </div>
        <div class="product-info">
        <h3 class="product-name">${products.plantName}</h3>
        <p class="product-description">${products.shortDescription}</p>
        <div class="product-price">
        <div class="price-tag">
        <span>$ ${products.price1}</span>
        <span>$ ${products.price2}</span>
        </div>
        <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        </div>
        </div>`;
        
        bestProductsGrid.innerHTML += html;
    });
};

addBestProducts();

const addNewArrivals = () => {
  newArrivals.map((products) => {
    // console.log(products);
      
    const html = `<div class="product-card">
        <span class="product-badge">New</span>
        <div class="product-image">
        <img src=${products.image}>
        </div>
        <div class="product-info">
        <h3 class="product-name">${products.plantName}</h3>
        <p class="product-description">${products.shortDescription}</p>
        <div class="product-price">
        <div class="price-tag">
        <span>$ ${products.price1}</span>
        <span>$ ${products.price2}</span>
        </div>
        <button class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        </div>
        </div>`;
        
        newArrivalsGrid.innerHTML += html;
    });
};

addNewArrivals();


const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const totalSlides = dots.length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

let slideInterval = setInterval(nextSlide, 3000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  });
});




