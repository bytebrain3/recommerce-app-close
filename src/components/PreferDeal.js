function PreferDeal() {
  return `
        <div class="flex flex-row mx-[246px] px-3 items-center justify-center">
            <div class="flex flex-row items-start justify-between rounded-[10px] max-w-7xl border border-gray-200">
                <image src="/group.png" class="w-[450px] h-[610px] rounded-tl-[10px] rounded-bl-[10px]"/>
                <div class="flex flex-col items-start justify-center p-6 ">
                    <h1 class="text-[40px] text-[#101223] font-semibold mb-4">
                    Preferred Deals
                    </h1>
                    <div class=" flex flex-row items-center justify-between mb-[60px]">
                        <p class="text-[18px] text-[#5b5d6b] max-w-lg mr-[241px]">
                        Our most loved deals, specially selected for value, quality, and popularity. You’re going to love these.
                        </p>
                        <button class="px-4 py-2 text-sm text-blue-600 rounded-sm border border-blue-500 font-medium hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default PreferDeal;
