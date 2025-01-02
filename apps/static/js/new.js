document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("[data-filter-btn]");
    const filterItems = document.querySelectorAll("[data-filter-item]");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.textContent.trim().toLowerCase();
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        filterItems.forEach((item) => {
          if (category === "all" || item.dataset.category.includes(category)) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      });
    });
  });
  