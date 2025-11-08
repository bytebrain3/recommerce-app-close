import "./style.css";
import { createIcons, icons } from "lucide";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NavList from "./components/NavList";
import Footer from "./components/footer";
import Feature from "./components/Feature";
import PreferDeal from "./components/PreferDeal";
const imageList = [
  "https://script.viserlab.com/recommerce/assets/images/frontend/banner/684e8dc53b3cb1749978565.png",
  "https://script.viserlab.com/recommerce/assets/images/frontend/banner/684e8dca8e6ae1749978570.png",
  "https://script.viserlab.com/recommerce/assets/images/frontend/banner/684e8dd2a3a491749978578.png",
];
let currentImageIndex = 0;
const imageIntervalTime = 2000;

function App() {
  return `
  <div>
    ${Banner()}
    <div class="flex flex-col items-center  ">
      ${Header()}
    </div>
    
      <div>
        ${NavList()}
      </div>
    
     
    <div class="flex flex-col flex-1">
        <div class="@container/main flex flex-col flex-1">
          <div class="flex flex-col" id="sliderContainer">
            
          </div>
          <div class="my-[60px]">
            ${Feature()}
          </div>
          <div class="my-[60px]">
            ${PreferDeal()}
          </div>

        </div>
      </div>

    ${Footer()}

  </div>`;
}

document.querySelector("#app").innerHTML = App();
// now activate Lucide AFTER HTML is added
createIcons({ icons });

// static variable
const input = document.querySelector("#search");
const placeholder = "What are products you are searching for? ";

let typingInterval = 300;
let charIndex = 0;

// functions

const typing = () => {
  if (charIndex < placeholder.length) {
    input.setAttribute("placeholder", placeholder.slice(0, charIndex + 1));
    charIndex++;
    setTimeout(typing, typingInterval);
  }
  if (charIndex == placeholder.length) {
    charIndex = 0;
    input.setAttribute("placeholder", "");
  }
};
typing();

function HeroSlider({ imageList, currentImageIndex }) {
  return `
    <div class="relative ">
      
      <!-- Prev Button -->
      <button
        id="prevButton"
        class="w-[15%] border-none outline-none focus:outline-none absolute top-1/2 h-full left-0 -translate-y-1/2 z-50 flex items-center justify-center  transition"
      >
        <i data-lucide="chevron-left" class="w-6 h-6 text-white"></i>
      </button>
      <!-- Image -->
      <img
        id="heroSlider"
        src="${imageList[currentImageIndex]}"
        class="object-cover w-full h-[450px] translate-x-full opacity-30 transition-all duration-500 ease-out"
      />

      <!-- Next Button -->
      <button
        id="nextButton"
        class="w-[15%] border-none outline-none focus:outline-none absolute top-1/2 h-full right-0 -translate-y-1/2 z-50 flex items-center justify-center transition"
      >
        <i data-lucide="chevron-right" class="w-6 h-6 text-white"></i>
      </button>
      <!-- Dots -->
      <div class="flex space-x-3 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        ${imageList
          .map(
            (_, index) => `
              <div id="dot-${index}"
                class="h-3 rounded-full transition-[width] duration-4000 border border-white ${
                  index === currentImageIndex ? "w-12" : "w-3 bg-transparent"
                }"
                >
              </div>`
          )
          .join("")}
      </div>



    </div>
  `;
}

const renderImageSlider = () => {
  document.querySelector("#sliderContainer").innerHTML = HeroSlider({
    imageList,
    currentImageIndex,
  });

  createIcons({ icons });

  let image = document.getElementById("heroSlider");
  if (!image) return;
  image.classList.add("translate-x-0", "opacity-100");
  image.classList.remove("translate-x-full", "opacity-0");

  document
    .getElementById("prevButton")
    .addEventListener("click", previousImage);
  document.getElementById("nextButton").addEventListener("click", nextImage);
};

function animatedImage(callback) {
  let image = document.getElementById("heroSlider");
  if (!image) return;

  image.classList.add("translate-x-0", "opacity-10");

  image.classList.remove("translate-x-full", "opacity-100");

  setTimeout(callback, 400);
}

function previousImage() {
  let image = document.getElementById("heroSlider");
  animatedImage(() => {
    currentImageIndex = imageList.indexOf(image.src);
    if (currentImageIndex === 0) {
      currentImageIndex = imageList.length - 1;
    } else {
      currentImageIndex = currentImageIndex - 1;
    }

    renderImageSlider();
  });
}
function nextImage() {
  let image = document.getElementById("heroSlider");
  animatedImage(() => {
    currentImageIndex = imageList.indexOf(image.src);
    if (currentImageIndex === imageList.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex = currentImageIndex + 1;
    }
    renderImageSlider();
  });
}

setInterval(nextImage, imageIntervalTime);

renderImageSlider();
