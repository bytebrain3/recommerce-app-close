const country = [
  {
    name: "English",
    image: "/usa.png",
    code: "en",
  },
  {
    name: "Spanish",
    image: "/spanish.png",
    code: "es",
  },
  {
    name: "Hindi",
    image: "/india.png",
    code: "hi",
  },
  {
    name: "Bangla",
    image: "/bd.png",
    code: "bn",
  },
];

// Custom dropdown component
export function LanguageSelector() {
  return `
    <div class="relative inline-block w-48">
      <!-- Selected option display -->
      <div class="bg-black text-white px-4 py-2 rounded-lg cursor-pointer flex items-center justify-between language-selector">
        <div class="flex items-center space-x-2">
          <img src="${country[0].image}" alt="${
    country[0].name
  }" class="w-6 h-6 rounded" />
          <span>${country[0].name}</span>
        </div>
        <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      
      <!-- Dropdown options -->
      <div class="absolute top-full left-0 w-full bg-black text-white mt-1 rounded-lg shadow-lg hidden language-options z-10">
        ${country
          .map(
            (country, index) => `
          <div class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 cursor-pointer transition duration-200 language-option" data-value="${country.code}" data-index="${index}">
            <img src="${country.image}" alt="${country.name}" class="w-6 h-6 rounded" />
            <span>${country.name}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// Initialize the custom dropdown
export function initLanguageSelector() {
  const selector = document.querySelector(".language-selector");
  const options = document.querySelector(".language-options");

  if (selector && options) {
    selector.addEventListener("click", function () {
      options.classList.toggle("hidden");
      const svg = this.querySelector("svg");
      svg.classList.toggle("rotate-180");
    });

    // Handle option selection
    const optionElements = document.querySelectorAll(".language-option");
    optionElements.forEach((option) => {
      option.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        const index = this.getAttribute("data-index");
        const selectedCountry = country[index];

        // Update displayed selection
        selector.innerHTML = `
          <div class="flex items-center space-x-2">
            <img src="${selectedCountry.image}" alt="${selectedCountry.name}" class="w-6 h-6 rounded" />
            <span>${selectedCountry.name}</span>
          </div>
          <svg class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        `;

        options.classList.add("hidden");
        console.log("Selected language:", selectedCountry);

        // Re-initialize event listeners
        initLanguageSelector();
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".relative.inline-block")) {
        options.classList.add("hidden");
        const svg = selector.querySelector("svg");
        svg.classList.remove("rotate-180");
      }
    });
  }
}

function Banner() {
  const country = [
    {
      name: "English",
      flag: "🇺🇸",
      code: "en",
    },
    {
      name: "Spanish",
      flag: "🇪🇸",
      code: "es",
    },
    {
      name: "Hindi",
      flag: "🇮🇳",
      code: "hi",
    },
    {
      name: "Bangla",
      flag: "🇧🇩",
      code: "bn",
    },
  ];

  return `
    <div class="bg-black flex flex-row items-center justify-center p-3">
        <div class="flex flex-row items-center justify-between container max-w-7xl">
            <div class="flex flex-row items-center justify-between">
                <ul class="flex flex-row items-center justify-between gap-12 text-white">
                    <li>
                        Buy
                    </li>
                    <li>
                        Sell
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Content
                    </li>
                </ul>
            </div>

            
            <select class="bg-black text-white">
                ${country
                  .map(
                    (country) => `
             <option value="${country.code}"><span>${country.flag} ${country.name}</span></option>
        `
                  )
                  .join("")}
            </select>
        </div>

    </div>
    `;
}

export default Banner;
