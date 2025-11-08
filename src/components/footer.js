function Footer() {
  return `
        <div class="pt-[60px] bg-[#141414] flex flex-col items-center justify-center">
            <div class="flex flex-wrap items-center justify-between container max-w-7xl mx-[246px]">
                <div class="flex flex-col px-3 w-[40%]  mt-6">
                    <img src="/dark_logo.png" class="w-[200px] h-[34px] object-cover mb-5"/>
                    <p class="text-[16px] text-[#b3b5bd]">
                        Buy & sell smartphones, laptops, bikes, and more: secure deals, easy listings, and fast transactions. Join our trusted marketplace and make smart purchases effortlessly. Sell with confidence and buy with peace of mind. Connect with verified sellers and buyers for the best reconditioned deals!
                    </p>
                </div>

                <div class="w-[25%] px-3 mt-6 mx-3">
                    <div class="pl-12">
                        <h3 class="text-white text-lg font-semibold mb-4">Useful Links</h3>
                        <ol class="flex flex-col gap-y-3 ">
                            <li class="text-gray-400 mb-3">
                                Buy
                            </li>
                            <li class="text-gray-400 mb-3">
                                Sell
                            </li>
                            <li class="text-gray-400 mb-3">
                                Shopping Cart
                            </li>
                        </ol>
                    </div>
                </div>


                <div class="w-[33%] px-3  mt-6">
                    <div>
                        <h3 class="text-white text-lg font-semibold mb-4">Subscribe</h3>
                        <span class="text-[16px] text-[#b3b5bd]">
                            Subscribe to our newsletter to get offers, coupon codes and promotional advertisement.
                        </span>
                        <div class="relative mt-3 flex flex-row items-center justify-between">
                            <input class="p-4 rounded-full bg-transparent border border-gray-600 w-full outline-none focus:outline-blue-400" />
                            <button class="font-semibold py-2.5 px-[18px] absolute right-2.5 rounded-full bg-[hsl(218,94%,43%)] text-sm text-white">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div class="mt-4 pb-4">
                        <div  class="w-full h-px bg-gray-600"></div>
                       <div class="flex flex-row items-center justify-between">
                             <h3 class="text-white text-[20px] font-semibold mb-4 mt-3">Follow us</h3>
                            <div class="flex items-center gap-x-3">
                                <i data-lucide="facebook" class="w-6 h-6 text-white"></i>
                                <i data-lucide="twitter" class="w-6 h-6 text-white"></i>
                                <i data-lucide="instagram" class="w-6 h-6 text-white"></i>
                            </div>
                       </div>
                    </div>
                </div>
            </div>


            <div class="flex flex-row items-center justify-between container max-w-7xl mx-[246px] mt-6 border-t border-gray-600 pl-3 py-4 text-white">
                
                    <p class="text-sm">
                        © 2025 Recommerce - All rights reserved.
                    </p>

                    <div class="flex flex-row items-center gap-x-4">
                        <p class="text-sm">
                            Privacy Policy
                        </p>
                        <div class="h-4 bg-gray-600 p-px ">
                        </div>
                        <p class="text-sm">
                            Terms of Service
                        </p>
                    </div>
               
            </div>
        </div>
    `;
}

export default Footer;
