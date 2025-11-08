function Header() {
  return `
    <nav class="py-4 border-b border-gray-200 container max-w-7xl">
      <div class="flex flex-row items-center justify-between">
        <!-- Logo -->
        <img src="/logo.png" class="w-[200px] h-[34px] object-cover"/>

        <!-- Search bar -->
        <div class="hidden md:flex flex-col items-center justify-between py-3 px-4 relative rounded-xl bg-[#f2f3f799]">
          <input 
            type="text"
            id="search" 
            placeholder="Search" 
            class="w-[800px] outline-none border-none transition-all duration-300 ease-in-out" 
          />
          <div class="h-6 bg-gray-300 p-px absolute right-12"></div>
          <i data-lucide="search" class="absolute right-4 w-5 h-5"></i>
        </div>

        
        <i data-lucide="search" class="md:hidden"></i>

        <!-- Action icons -->
        <div class="flex flex-row items-center gap-x-8">
          <div class="flex flex-col items-center text-sm text-gray-700">
            <i data-lucide="shopping-cart"></i>
            <span class="hidden md:block">Cart</span>
          </div>
          <div class="flex flex-col items-center text-sm text-gray-700">
            <i data-lucide="circle-user"></i>
            <span class="hidden md:block">Login</span>
          </div>
        </div>
      </div>
    </nav>
  `;
}

export default Header;
