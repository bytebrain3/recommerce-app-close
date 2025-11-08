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
        src=""
        class="object-cover w-full h-[450px] translate-x-full opacity-0 transition-all duration-500 ease-out"
      />

      <!-- Next Button -->
      <button
        id="nextButton"
        class="w-[15%] border-none outline-none focus:outline-none absolute top-1/2 h-full right-0 -translate-y-1/2 z-50 flex items-center justify-center transition"
      >
        <i data-lucide="chevron-right" class="w-6 h-6 text-white"></i>
      </button>
${currentImageIndex}
      <!-- Dots -->
      <div class="flex space-x-3 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        ${Array.from(
          { length: imageList.length },
          (_, index) => `
          <div id="dot-${index}" class="w-3 h-3 bg-transparent border border-white rounded-full cursor-pointer${
            index === currentImageIndex ? "bg-red-400" : ""
          }"></div>
        `
        ).join("")}
      </div>



    </div>
  `;
}

export default HeroSlider;
