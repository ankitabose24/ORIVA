/* =========================================================
   GOODMORN - FOOD WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================================================
   FOOD DATA
   ========================================================= */

const foods = [
  {
    id: 1,
    category: "fruits",
    categoryLabel: "FRESH FRUITS",
    title: "Rainbow Fruit Cup",
    description:
      "A bright mix of seasonal fruit for a naturally refreshing snack.",
    price: 69,
    protein: "2g",
    fibre: "5g",
    calories: "110",
    time: "05 MIN · FRESH",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Naturally sweet and refreshing",
      "Provides fibre from whole fruits",
      "Easy light snack for any time"
    ]
  },

  {
    id: 2,
    category: "fruits",
    categoryLabel: "FRESH FRUITS",
    title: "Banana Berry Bowl",
    description:
      "Banana and berries with a simple yogurt topping.",
    price: 79,
    protein: "5g",
    fibre: "6g",
    calories: "185",
    time: "05 MIN · SWEET",
    image:
      "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Fruit-based source of fibre",
      "Creamy and filling",
      "No complicated ingredients"
    ]
  },

  {
    id: 3,
    category: "bowls",
    categoryLabel: "LEGUME & GRAIN BOWLS",
    title: "Chickpea Power Bowl",
    description:
      "Chickpeas, grains, vegetables, seeds and a fresh dressing.",
    price: 99,
    protein: "12g",
    fibre: "9g",
    calories: "320",
    time: "15 MIN · VEGETARIAN",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Plant-based protein from chickpeas",
      "Fibre-rich legumes and vegetables",
      "Filling option for a busy day"
    ]
  },

  {
    id: 4,
    category: "bowls",
    categoryLabel: "LEGUME & GRAIN BOWLS",
    title: "Sprouted Moong Bowl",
    description:
      "Fresh sprouts, vegetables and grains with a light lemon dressing.",
    price: 89,
    protein: "10g",
    fibre: "8g",
    calories: "275",
    time: "12 MIN · LIGHT",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Good source of plant protein",
      "Fibre from sprouts and vegetables",
      "Light but satisfying"
    ]
  },

  {
    id: 5,
    category: "breakfast",
    categoryLabel: "BREAKFAST",
    title: "Garden Avocado Toast",
    description:
      "Whole-grain toast with avocado, tomato, seeds and herbs.",
    price: 89,
    protein: "7g",
    fibre: "7g",
    calories: "240",
    time: "08 MIN · SAVOURY",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Fibre from whole grains and vegetables",
      "Healthy fats from avocado",
      "Quick breakfast option"
    ]
  },

  {
    id: 6,
    category: "breakfast",
    categoryLabel: "BREAKFAST",
    title: "Berry Oat Pancakes",
    description:
      "Soft oat pancakes topped with berries and yogurt.",
    price: 99,
    protein: "8g",
    fibre: "6g",
    calories: "290",
    time: "12 MIN · SWEET",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Oats add fibre to breakfast",
      "Fruit adds natural sweetness",
      "Comforting breakfast choice"
    ]
  },

  {
    id: 7,
    category: "drinks",
    categoryLabel: "HEALTHY DRINKS",
    title: "Green Morning Smoothie",
    description:
      "A fresh blend of greens, banana and fruit for an easy morning drink.",
    price: 79,
    protein: "4g",
    fibre: "4g",
    calories: "160",
    time: "05 MIN · FRESH",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Easy way to add fruit and greens",
      "Fibre from whole blended ingredients",
      "Refreshing start to the day"
    ]
  },

  {
    id: 8,
    category: "drinks",
    categoryLabel: "HEALTHY DRINKS",
    title: "Mango Yogurt Cooler",
    description:
      "Mango and yogurt blended into a smooth, cooling drink.",
    price: 89,
    protein: "6g",
    fibre: "2g",
    calories: "190",
    time: "05 MIN · COOL",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Creamy and refreshing",
      "Protein from yogurt",
      "A simple alternative to sugary soft drinks"
    ]
  },

  {
    id: 9,
    category: "snacks",
    categoryLabel: "SMART SNACKS",
    title: "Crunchy Seed Bars",
    description:
      "A handy bite made with oats, seeds and nuts.",
    price: 59,
    protein: "5g",
    fibre: "4g",
    calories: "175",
    time: "READY · SNACK",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Portable snack",
      "Seeds and oats provide fibre",
      "Useful for between-meal hunger"
    ]
  },

  {
    id: 10,
    category: "snacks",
    categoryLabel: "SMART SNACKS",
    title: "Peanut Energy Bites",
    description:
      "Small no-fuss bites made with peanut butter, oats and dates.",
    price: 69,
    protein: "6g",
    fibre: "4g",
    calories: "165",
    time: "READY · SNACK",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    benefits: [
      "Protein from peanuts",
      "Fibre from oats and dates",
      "Small portion for a quick snack"
    ]
  }
];


/* =========================================================
   VARIABLES
   ========================================================= */

let cart = [];
let activeCategory = "all";
let selectedFood = null;

let flyerIndex = 0;
let flyerTimer;


/* =========================================================
   GET HTML ELEMENTS
   ========================================================= */

const foodGrid = document.getElementById("foodGrid");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");

const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const dishModal = document.getElementById("dishModal");
const closeModal = document.getElementById("closeModal");

const modalAdd = document.getElementById("modalAdd");

const toast = document.getElementById("toast");


/* =========================================================
   RENDER FOOD CARDS
   ========================================================= */

function renderFoods() {

  if (!foodGrid) {
    console.error("foodGrid element not found");
    return;
  }

  let filteredFoods;

  if (activeCategory === "all") {
    filteredFoods = foods;
  } else {
    filteredFoods = foods.filter(
      food => food.category === activeCategory
    );
  }

  foodGrid.innerHTML = filteredFoods
    .map(food => {

      return `
        <article class="food-card" data-id="${food.id}">

          <div class="food-image">

            <img
              src="${food.image}"
              alt="${food.title}"
              loading="lazy"
            >

            <span class="food-category">
              ${food.categoryLabel}
            </span>

          </div>

          <div class="food-info">

            <h3>${food.title}</h3>

            <p>
              ${food.description}
            </p>

            <div class="food-meta">

              <div class="food-nutrition">

                <span>
                  <b>${food.protein}</b>
                  protein
                </span>

                <span>
                  <b>${food.fibre}</b>
                  fibre
                </span>

              </div>

              <strong class="food-price">
                ₹${food.price}
              </strong>

            </div>

          </div>

        </article>
      `;

    })
    .join("");


  /* ADD CLICK TO EACH FOOD */

  const cards =
    document.querySelectorAll(".food-card");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const id =
        Number(card.dataset.id);

      openDish(id);

    });

  });

}


/* =========================================================
   OPEN DISH DETAILS
   ========================================================= */

function openDish(id) {

  selectedFood =
    foods.find(food => food.id === id);

  if (!selectedFood) {
    return;
  }


  const modalImage =
    document.getElementById("modalImage");

  const modalCategory =
    document.getElementById("modalCategory");

  const modalTime =
    document.getElementById("modalTime");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalDescription =
    document.getElementById("modalDescription");

  const modalProtein =
    document.getElementById("modalProtein");

  const modalFibre =
    document.getElementById("modalFibre");

  const modalCalories =
    document.getElementById("modalCalories");

  const modalPrice =
    document.getElementById("modalPrice");

  const modalBenefits =
    document.getElementById("modalBenefits");


  if (modalImage) {

    modalImage.src =
      selectedFood.image;

    modalImage.alt =
      selectedFood.title;

  }


  if (modalCategory) {

    modalCategory.textContent =
      selectedFood.categoryLabel;

  }


  if (modalTime) {

    modalTime.textContent =
      selectedFood.time;

  }


  if (modalTitle) {

    modalTitle.textContent =
      selectedFood.title;

  }


  if (modalDescription) {

    modalDescription.textContent =
      selectedFood.description;

  }


  if (modalProtein) {

    modalProtein.textContent =
      selectedFood.protein;

  }


  if (modalFibre) {

    modalFibre.textContent =
      selectedFood.fibre;

  }


  if (modalCalories) {

    modalCalories.textContent =
      selectedFood.calories;

  }


  if (modalPrice) {

    modalPrice.textContent =
      `₹${selectedFood.price}`;

  }


  if (modalBenefits) {

    modalBenefits.innerHTML =
      selectedFood.benefits
        .map(
          benefit =>
            `<li>${benefit}</li>`
        )
        .join("");

  }


  if (dishModal) {

    dishModal.classList.add("open");

    dishModal.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  document.body.style.overflow =
    "hidden";
}


/* =========================================================
   CLOSE DISH DETAILS
   ========================================================= */

function closeDish() {

  if (dishModal) {

    dishModal.classList.remove("open");

    dishModal.setAttribute(
      "aria-hidden",
      "true"
    );

  }

  document.body.style.overflow =
    "";
}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(id) {

  const existing =
    cart.find(item => item.id === id);


  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({

      id: id,

      quantity: 1

    });

  }


  updateCart();

  showToast(
    "Added to your cart ✓"
  );

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCart() {

  if (!cartCount || !cartItems || !cartTotal) {
    return;
  }


  /* TOTAL ITEM COUNT */

  const count =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  cartCount.textContent =
    count;


  /* EMPTY CART */

  if (cart.length === 0) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        Your cart is waiting
        for something good.

        <br><br>

        Browse the menu and
        choose your favourites.

      </div>

    `;

    cartTotal.textContent =
      "₹0";

    return;
  }


  /* CALCULATE TOTAL */

  let total = 0;


  cartItems.innerHTML =
    cart
      .map(item => {

        const food =
          foods.find(
            foodItem =>
              foodItem.id === item.id
          );


        if (!food) {
          return "";
        }


        const itemTotal =
          food.price *
          item.quantity;


        total += itemTotal;


        return `

          <div class="cart-item">

            <img
              src="${food.image}"
              alt="${food.title}"
            >

            <div class="cart-item-info">

              <h4>
                ${food.title}
              </h4>

              <p>
                ₹${food.price} each
              </p>

              <div class="qty-controls">

                <button
                  type="button"
                  data-action="decrease"
                  data-id="${food.id}"
                >
                  −
                </button>

                <span>
                  ${item.quantity}
                </span>

                <button
                  type="button"
                  data-action="increase"
                  data-id="${food.id}"
                >
                  +
                </button>

              </div>

            </div>

            <strong>
              ₹${itemTotal}
            </strong>

          </div>

        `;

      })
      .join("");


  cartTotal.textContent =
    `₹${total}`;


  /* QUANTITY BUTTONS */

  const quantityButtons =
    cartItems.querySelectorAll(
      ".qty-controls button"
    );


  quantityButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const id =
          Number(button.dataset.id);

        const item =
          cart.find(
            cartItem =>
              cartItem.id === id
          );


        if (!item) {
          return;
        }


        if (
          button.dataset.action ===
          "increase"
        ) {

          item.quantity += 1;

        } else {

          item.quantity -= 1;


          if (item.quantity <= 0) {

            cart =
              cart.filter(
                cartItem =>
                  cartItem.id !== id
              );

          }

        }


        updateCart();

      }
    );

  });

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCart() {

  updateCart();


  if (cartPanel) {

    cartPanel.classList.add("open");

    cartPanel.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  if (overlay) {

    overlay.classList.add("show");

  }

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCartPanel() {

  if (cartPanel) {

    cartPanel.classList.remove(
      "open"
    );

    cartPanel.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  if (overlay) {

    overlay.classList.remove(
      "show"
    );

  }

}


/* =========================================================
   TOAST MESSAGE
   ========================================================= */

function showToast(message) {

  if (!toast) {
    return;
  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    showToast.timeout
  );


  showToast.timeout =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      1800
    );

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

const categoryTabs =
  document.querySelectorAll(
    ".category-tab"
  );


categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    switchCategory(tab.dataset.category, false);
  });
});


/* =========================================================
   DISH MODAL BUTTON
   ========================================================= */

if (modalAdd) {

  modalAdd.addEventListener(
    "click",
    () => {

      if (!selectedFood) {
        return;
      }


      addToCart(
        selectedFood.id
      );


      closeDish();

    }
  );

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

if (closeModal) {

  closeModal.addEventListener(
    "click",
    closeDish
  );

}


if (dishModal) {

  dishModal.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        dishModal
      ) {

        closeDish();

      }

    }
  );

}


/* =========================================================
   CART BUTTON
   ========================================================= */

if (cartButton) {

  cartButton.addEventListener(
    "click",
    openCart
  );

}


if (closeCart) {

  closeCart.addEventListener(
    "click",
    closeCartPanel
  );

}


if (overlay) {

  overlay.addEventListener(
    "click",
    closeCartPanel
  );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

const checkoutButton =
  document.getElementById(
    "checkoutButton"
  );


if (checkoutButton) {

  checkoutButton.addEventListener(
    "click",
    () => {

      if (cart.length === 0) {

        showToast(
          "Your cart is empty!"
        );

        return;

      }


      alert(
        "Congratulations! You chose your health, you chose ORIVA."
      );

    }
  );

}


/* =========================================================
   FULL SCREEN HERO SLIDER
   ========================================================= */

const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".fullscreen-slide");
const sliderPrevBtn = document.getElementById("sliderPrevBtn");
const sliderNextBtn = document.getElementById("sliderNextBtn");
const sliderDashes = document.querySelectorAll("#sliderDashIndicators .slider-dash");
const sliderContainer = document.querySelector(".fullscreen-slider-container");

let currentSlide = 0;
let sliderAutoTimer = null;
const totalSlides = slides.length;

function goToSlide(index) {
  if (totalSlides === 0 || !sliderTrack) return;

  currentSlide = (index + totalSlides) % totalSlides;

  // Move the slider track horizontally across full screen width
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update active states
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  sliderDashes.forEach((dash, i) => {
    dash.classList.toggle("active", i === currentSlide);
  });
}

function startSliderTimer() {
  if (totalSlides <= 1) return;
  clearInterval(sliderAutoTimer);
  sliderAutoTimer = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 4500);
}

function stopSliderTimer() {
  clearInterval(sliderAutoTimer);
}

// Next and Previous button clicks
if (sliderNextBtn) {
  sliderNextBtn.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
    startSliderTimer();
  });
}

if (sliderPrevBtn) {
  sliderPrevBtn.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
    startSliderTimer();
  });
}

// Dash pagination clicks
sliderDashes.forEach((dash, idx) => {
  dash.addEventListener("click", () => {
    goToSlide(idx);
    startSliderTimer();
  });
});

// Pause autoplay on hover, resume on leave
if (sliderContainer) {
  sliderContainer.addEventListener("mouseenter", stopSliderTimer);
  sliderContainer.addEventListener("mouseleave", startSliderTimer);

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        goToSlide(currentSlide + 1);
      } else {
        goToSlide(currentSlide - 1);
      }
      startSliderTimer();
    }
  }, { passive: true });
}

// Initialize first slide and timer
goToSlide(0);
startSliderTimer();


/* =========================================================
   CATEGORY CIRCLES INTERACTION ("Icons like pictures")
   ========================================================= */

function switchCategory(categoryKey, smoothScroll = true) {
  activeCategory = categoryKey;

  // Sync category circle icons
  document.querySelectorAll(".category-circle-item").forEach(item => {
    item.classList.toggle("active", item.dataset.category === categoryKey);
  });

  // Sync menu tabs
  if (categoryTabs) {
    categoryTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.category === categoryKey);
    });
  }

  // Re-render food items
  renderFoods();

  // Scroll to menu section if requested
  if (smoothScroll) {
    const menuSec = document.getElementById("categories");
    if (menuSec) {
      menuSec.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Category Circle item buttons
const categoryCircleItems = document.querySelectorAll(".category-circle-item");
categoryCircleItems.forEach(item => {
  item.addEventListener("click", () => {
    const cat = item.dataset.category || "all";
    switchCategory(cat, true);
  });
});

// Quick Promo and Dropdown filter buttons
document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const filterCat = btn.getAttribute("data-filter");
    if (filterCat) {
      switchCategory(filterCat, true);
    }
  });
});

// Search and User Account buttons
const searchButton = document.getElementById("searchButton");
if (searchButton) {
  searchButton.addEventListener("click", () => {
    const query = prompt("Search healthy snacks, khakhras, namkeens, sweets:");
    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      activeCategory = "all";
      const filtered = foods.filter(f => 
        f.title.toLowerCase().includes(q) || 
        f.description.toLowerCase().includes(q) ||
        f.categoryLabel.toLowerCase().includes(q)
      );
      if (foodGrid) {
        if (filtered.length === 0) {
          foodGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding: 40px; color:#666;">No products found for "${query}". Try searching "chana", "khakhra", "laddoo", or "bowl".</p>`;
        } else {
          foodGrid.innerHTML = filtered.map(food => `
            <article class="food-card" data-id="${food.id}">
              <div class="food-image">
                <img src="${food.image}" alt="${food.title}" loading="lazy">
                <span class="food-category">${food.categoryLabel}</span>
              </div>
              <div class="food-info">
                <h3>${food.title}</h3>
                <p>${food.description}</p>
                <div class="food-meta">
                  <div class="food-nutrition">
                    <span><b>${food.protein}</b> protein</span>
                    <span><b>${food.fibre}</b> fibre</span>
                  </div>
                  <strong class="food-price">₹${food.price}</strong>
                </div>
              </div>
            </article>
          `).join("");

          document.querySelectorAll(".food-card").forEach(c => {
            c.addEventListener("click", () => openDish(Number(c.dataset.id)));
          });
        }
        document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

const userButton = document.getElementById("userButton");
if (userButton) {
  userButton.addEventListener("click", () => {
    alert("Welcome to ORIVA! Log in to view your orders, loyalty points, and healthy favorites.");
  });
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton =
  document.getElementById(
    "menuButton"
  );


const navLinks =
  document.querySelector(
    ".nav-links"
  );


if (
  menuButton &&
  navLinks
) {

  menuButton.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "open"
      );

    }
  );


  navLinks
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove(
            "open"
          );

        }
      );

    });

}


/* =========================================================
   CONTACT MODAL
   ========================================================= */

const contactModal = document.getElementById("contactModal");
const contactNavBtn = document.getElementById("contactNavBtn");
const closeContactModalBtn = document.getElementById("closeContactModal");
const contactForm = document.getElementById("contactForm");
const contactFormContainer = document.getElementById("contactFormContainer");
const contactSuccessState = document.getElementById("contactSuccessState");
const closeContactSuccessBtn = document.getElementById("closeContactSuccessBtn");

function openContactModal() {
  if (!contactModal) return;
  contactModal.classList.add("open");
  contactModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Reset form to active input state if previously submitted
  if (contactFormContainer) contactFormContainer.style.display = "block";
  if (contactSuccessState) contactSuccessState.style.display = "none";
}

function closeContactModal() {
  if (!contactModal) return;
  contactModal.classList.remove("open");
  contactModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (contactNavBtn) {
  contactNavBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openContactModal();
  });
}

const footerContactBtn = document.getElementById("footerContactBtn");
if (footerContactBtn) {
  footerContactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openContactModal();
  });
}

if (closeContactModalBtn) {
  closeContactModalBtn.addEventListener("click", closeContactModal);
}

if (closeContactSuccessBtn) {
  closeContactSuccessBtn.addEventListener("click", closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    // Display success confirmation
    if (contactFormContainer) contactFormContainer.style.display = "none";
    if (contactSuccessState) contactSuccessState.style.display = "block";
    contactForm.reset();
  });
}

/* =========================================================
   REVIEW MODAL & LIVE SUBMISSION
   ========================================================= */

const reviewModal = document.getElementById("reviewModal");
const openReviewModalBtn = document.getElementById("openReviewModalBtn");
const closeReviewModalBtn = document.getElementById("closeReviewModal");
const reviewForm = document.getElementById("reviewForm");
const reviewFormContainer = document.getElementById("reviewFormContainer");
const reviewSuccessState = document.getElementById("reviewSuccessState");
const closeReviewSuccessBtn = document.getElementById("closeReviewSuccessBtn");
const reviewsGrid = document.getElementById("reviewsGrid");
const starBtns = document.querySelectorAll("#starRatingSelector .star-btn");
const selectedRatingInput = document.getElementById("selectedRatingInput");
const ratingTextLabel = document.getElementById("ratingTextLabel");

const ratingLabels = {
  1: "1.0 / 5 (Needs Improvement)",
  2: "2.0 / 5 (Fair)",
  3: "3.0 / 5 (Good)",
  4: "4.0 / 5 (Very Good)",
  5: "5.0 / 5 (Excellent)"
};

function setStarRating(rating) {
  if (!selectedRatingInput) return;
  selectedRatingInput.value = rating;
  if (ratingTextLabel) {
    ratingTextLabel.textContent = ratingLabels[rating] || `${rating}.0 / 5`;
  }
  starBtns.forEach((btn) => {
    const btnRating = parseInt(btn.dataset.rating, 10);
    if (btnRating <= rating) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

if (starBtns && starBtns.length > 0) {
  starBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const rating = parseInt(btn.dataset.rating, 10);
      setStarRating(rating);
    });
  });
}

function openReviewModal() {
  if (!reviewModal) return;
  reviewModal.classList.add("open");
  reviewModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Reset form to active input state
  if (reviewFormContainer) reviewFormContainer.style.display = "block";
  if (reviewSuccessState) reviewSuccessState.style.display = "none";
}

function closeReviewModal() {
  if (!reviewModal) return;
  reviewModal.classList.remove("open");
  reviewModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (openReviewModalBtn) {
  openReviewModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openReviewModal();
  });
}

if (closeReviewModalBtn) {
  closeReviewModalBtn.addEventListener("click", closeReviewModal);
}

if (closeReviewSuccessBtn) {
  closeReviewSuccessBtn.addEventListener("click", () => {
    closeReviewModal();
    const reviewsSec = document.getElementById("reviews");
    if (reviewsSec) {
      reviewsSec.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (reviewModal) {
  reviewModal.addEventListener("click", (e) => {
    if (e.target === reviewModal) {
      closeReviewModal();
    }
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const author = document.getElementById("reviewAuthorName").value.trim();
    const location = document.getElementById("reviewAuthorLocation").value.trim();
    const product = document.getElementById("reviewProductSelect").value;
    const title = document.getElementById("reviewTitleInput").value.trim();
    const content = document.getElementById("reviewContentInput").value.trim();
    const rating = parseInt(selectedRatingInput ? selectedRatingInput.value : "5", 10) || 5;

    if (!author || !title || !content) {
      alert("Please fill in your name, review headline, and message.");
      return;
    }

    // Build the new review card
    const starsString = "★".repeat(rating) + "☆".repeat(Math.max(0, 5 - rating));
    const initial = author.charAt(0).toUpperCase();
    const locationMeta = location ? `${escapeHtml(product)} · ${escapeHtml(location)}` : escapeHtml(product);

    const newCard = document.createElement("article");
    newCard.className = "review-card";
    newCard.innerHTML = `
      <div class="review-top">
        <div class="review-stars">${starsString}</div>
        <span class="verified-badge">✓ Verified Buyer</span>
      </div>
      <h3 class="review-title">"${escapeHtml(title)}"</h3>
      <p class="review-body">${escapeHtml(content)}</p>
      <div class="review-author">
        <div class="author-avatar">${initial}</div>
        <div>
          <strong>${escapeHtml(author)}</strong>
          <small>Ordered ${locationMeta}</small>
        </div>
      </div>
    `;

    if (reviewsGrid) {
      reviewsGrid.prepend(newCard);
    }

    // Reset form and show success state
    reviewForm.reset();
    setStarRating(5);
    if (reviewFormContainer) reviewFormContainer.style.display = "none";
    if (reviewSuccessState) reviewSuccessState.style.display = "block";
  });
}

/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDish();
    closeCartPanel();
    closeContactModal();
    closeReviewModal();
  }
});


/* =========================================================
   INITIAL LOAD
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderFoods();

    updateCart();

  }
);

/* =========================================
   PAGE LOADER & SITE REVEAL
========================================= */

function revealWebsite() {
  document.body.classList.add("site-opened");
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    if (loader) {
      loader.classList.add("hidden");
    }
    revealWebsite();
  }, 850);
});

// Safety fallback
setTimeout(() => {
  const loader = document.querySelector(".loader");
  if (loader && !loader.classList.contains("hidden")) {
    loader.classList.add("hidden");
  }
  revealWebsite();
}, 2000);