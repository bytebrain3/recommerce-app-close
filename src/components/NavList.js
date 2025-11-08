function NavList() {
  const navItems = [
    { name: "computer", icon: "laptop-minimal" },
    { name: "camera", icon: "camera" },
    { name: "smartphone", icon: "smartphone" },
    { name: "drone", icon: "drone" },
    { name: "tablet", icon: "tablet" },
    { name: "application", icon: "app-window-mac" },
    { name: "car", icon: "car" },
    { name: "headphones", icon: "headphones" },
    { name: "Stationary", icon: "ruler" },
  ];

  return `
  <div class="hidden md:flex mx-[280px] px-4">
    <ul class="flex flex-wrap  max-w-7xl">
      ${navItems
        .map(
          (item) => `
          <li class="flex items-center gap-2 py-3 pr-6">
            <a href="#" class="flex items-center gap-1.5 text-gray-800 hover:text-blue-500">
              <i data-lucide="${item.icon}" class="w-4 h-4"></i>
              <span class="text-sm font-medium capitalize">${item.name}</span>
            </a>
          </li>
        `
        )
        .join("")}
    </ul>
    </div>

  `;
}

export default NavList;
