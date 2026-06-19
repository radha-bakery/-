const SHOP = {
  name: 'Radha Bakers',
  phoneDisplay: '9418310089',
  phoneWa: '919418310089',
  address: 'Opposite Kali Mandir, Lower Khalini, Shimla'
};

const products = [
  { id: 'pineapple-cake', category: 'Cakes', name: "Pineapple Cake 500g", price: 500, img: 'assets/products/pineapple-cake.jpg', desc: "Fresh pineapple bakery cake" },
  { id: 'black-forest', category: 'Cakes', name: "Black Forest Cake 500g", price: 500, img: 'assets/products/black-forest.jpg', desc: "Chocolate cake with cherry topping" },
  { id: 'butterscotch', category: 'Cakes', name: "Butterscotch Cake 500g", price: 500, img: 'assets/products/butterscotch.jpg', desc: "Butterscotch cream cake" },
  { id: 'choco-truffle', category: 'Cakes', name: "Choco Truffle Cake 500g", price: 550, img: 'assets/products/choco-truffle.jpg', desc: "Rich chocolate truffle cake" },
  { id: 'red-velvet', category: 'Cakes', name: "Red Velvet Cake 500g", price: 650, img: 'assets/products/red-velvet.jpg', desc: "Premium red velvet cake" },
  { id: 'mango-cake', category: 'Cakes', name: "Mango Cake 500g", price: 550, img: 'assets/products/mango-cake.jpg', desc: "Mango cream cake" },
  { id: 'strawberry-cake', category: 'Cakes', name: "Strawberry Cake 500g", price: 550, img: 'assets/products/strawberry-cake.jpg', desc: "Strawberry flavour cake" },
  { id: 'blueberry-cake', category: 'Cakes', name: "Blue Berry Cake 500g", price: 550, img: 'assets/products/blueberry-cake.jpg', desc: "Blueberry flavour cake" },
  { id: 'fresh-mango-cake', category: 'Cakes', name: "Fresh Mango Cake 500g", price: 550, img: 'assets/products/fresh-mango-cake.jpg', desc: "Fresh mango topping cake" },
  { id: 'extra-decoration', category: 'Cakes', name: "Extra Decoration on Cake", price: 100, img: 'assets/products/extra-decoration.jpg', desc: "Extra cake decoration add-on" },
  { id: 'corn-pizza', category: 'Pizza', name: "Corn Pizza", price: 180, img: 'assets/products/corn-pizza.jpg', desc: "Corn loaded pizza" },
  { id: 'veg-pizza', category: 'Pizza', name: "Veg Pizza", price: 200, img: 'assets/products/veg-pizza.jpg', desc: "Vegetable pizza" },
  { id: 'cheese-pizza', category: 'Pizza', name: "Cheese Pizza", price: 170, img: 'assets/products/cheese-pizza.jpg', desc: "Cheese pizza" },
  { id: 'pizza-slice', category: 'Pizza', name: "Pizza Slice", price: 60, img: 'assets/products/pizza-slice.jpg', desc: "Single pizza slice" },
  { id: 'paneer-corn-pizza', category: 'Pizza', name: "Paneer Corn Pizza", price: 230, img: 'assets/products/paneer-corn-pizza.jpg', desc: "Paneer and corn pizza" },
  { id: 'burger', category: 'Burger & Sandwich', name: "Burger", price: 50, img: 'assets/products/burger.jpg', desc: "Veg burger" },
  { id: 'veg-sandwich', category: 'Burger & Sandwich', name: "Veg Sandwich", price: 60, img: 'assets/products/veg-sandwich.jpg', desc: "Vegetable sandwich" },
  { id: 'potato-sandwich', category: 'Burger & Sandwich', name: "Potato Sandwich", price: 70, img: 'assets/products/potato-sandwich.jpg', desc: "Potato sandwich" },
  { id: 'extra-cheese-slice', category: 'Burger & Sandwich', name: "Extra Cheese Slice", price: 15, img: 'assets/products/extra-cheese-slice.jpg', desc: "Cheese slice add-on" },
  { id: 'pasta-full', category: 'Pasta', name: "Pasta Full", price: 100, img: 'assets/products/pasta-full.jpg', desc: "Pasta full plate" },
  { id: 'pasta-half', category: 'Pasta', name: "Pasta Half", price: 50, img: 'assets/products/pasta-half.jpg', desc: "Pasta half plate" },
  { id: 'macaroni-full', category: 'Pasta', name: "Macaroni Full", price: 120, img: 'assets/products/macaroni-full.jpg', desc: "Macaroni full plate" },
  { id: 'macaroni-half', category: 'Pasta', name: "Macaroni Half", price: 60, img: 'assets/products/macaroni-half.jpg', desc: "Macaroni half plate" },
  { id: 'french-fries', category: 'Fries & Snacks', name: "French Fries", price: 60, img: 'assets/products/french-fries.jpg', desc: "Crispy french fries" },
  { id: 'peri-peri-fries', category: 'Fries & Snacks', name: "Peri Peri French Fries", price: 70, img: 'assets/products/peri-peri-fries.jpg', desc: "Peri peri fries" },
  { id: 'smileys', category: 'Fries & Snacks', name: "Smileys 5 pcs", price: 60, img: 'assets/products/smileys.jpg', desc: "Potato smileys pack" },
  { id: 'samosa', category: 'Fries & Snacks', name: "Samosa", price: 15, img: 'assets/products/samosa.jpg', desc: "Fresh samosa" },
  { id: 'momos-full', category: 'Chinese', name: "Momos Full", price: 60, img: 'assets/products/momos-full.jpg', desc: "Steamed momos full plate" },
  { id: 'momos-half', category: 'Chinese', name: "Momos Half", price: 30, img: 'assets/products/momos-half.jpg', desc: "Steamed momos half plate" },
  { id: 'chowmin-full', category: 'Chinese', name: "Chowmin Full", price: 100, img: 'assets/products/chowmin-full.jpg', desc: "Chowmin full plate" },
  { id: 'chowmin-half', category: 'Chinese', name: "Chowmin Half", price: 60, img: 'assets/products/chowmin-half.jpg', desc: "Chowmin half plate" },
  { id: 'fried-momos-full', category: 'Chinese', name: "Fried Momos Full", price: 80, img: 'assets/products/fried-momos-full.jpg', desc: "Fried momos full plate" },
  { id: 'fried-momos-half', category: 'Chinese', name: "Fried Momos Half", price: 40, img: 'assets/products/fried-momos-half.jpg', desc: "Fried momos half plate" },
  { id: 'spring-roll-full', category: 'Chinese', name: "Veg Spring Roll Full", price: 100, img: 'assets/products/spring-roll-full.jpg', desc: "Veg spring roll full" },
  { id: 'spring-roll-half', category: 'Chinese', name: "Veg Spring Roll Half", price: 50, img: 'assets/products/spring-roll-half.jpg', desc: "Veg spring roll half" },
  { id: 'shake', category: 'Drinks', name: "Shakes - Vanilla / Strawberry / Mango", price: 60, img: 'assets/products/shake.jpg', desc: "Choose vanilla, strawberry or mango" },
  { id: 'chocolate-shake', category: 'Drinks', name: "Chocolate / Butter Scotch Shake", price: 70, img: 'assets/products/chocolate-shake.jpg', desc: "Chocolate or butterscotch shake" },
  { id: 'cold-coffee', category: 'Drinks', name: "Cold Coffee", price: 70, img: 'assets/products/cold-coffee.jpg', desc: "Cold coffee" },
  { id: 'cold-coffee-icecream', category: 'Drinks', name: "Cold Coffee with Ice Cream", price: 80, img: 'assets/products/cold-coffee-icecream.jpg', desc: "Cold coffee with ice cream" },
  { id: 'ice-tea-lemon', category: 'Drinks', name: "Ice Tea Lemon", price: 70, img: 'assets/products/ice-tea-lemon.jpg', desc: "Lemon iced tea" }
];

const state = {
  activeCategory: 'All',
  query: '',
  cart: loadCart()
};

const els = {
  grid: document.getElementById('productGrid'),
  tabs: document.getElementById('categoryTabs'),
  cartCount: document.getElementById('cartCount'),
  drawerCount: document.getElementById('drawerCount'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartBackdrop: document.getElementById('cartBackdrop'),
  cartItems: document.getElementById('cartItems'),
  cartTotal: document.getElementById('cartTotal'),
  miniCart: document.getElementById('miniCart'),
  miniSubtotal: document.getElementById('miniSubtotal'),
  miniTotal: document.getElementById('miniTotal'),
  toast: document.getElementById('toast'),
  searchInput: document.getElementById('searchInput')
};

function rupee(value) {
  return `₹${Number(value).toLocaleString('en-IN')}`;
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('radha-bakers-cart') || '{}');
  } catch (error) {
    return {};
  }
}

function saveCart() {
  localStorage.setItem('radha-bakers-cart', JSON.stringify(state.cart));
}

function categories() {
  return ['All', ...new Set(products.map(product => product.category))];
}

function selectedQty(id) {
  return state.cart[id]?.qty || 1;
}

function productById(id) {
  return products.find(product => product.id === id);
}

function filteredProducts() {
  return products.filter(product => {
    const categoryMatch = state.activeCategory === 'All' || product.category === state.activeCategory;
    const q = state.query.trim().toLowerCase();
    const textMatch = !q || `${product.name} ${product.category} ${product.desc}`.toLowerCase().includes(q);
    return categoryMatch && textMatch;
  });
}

function renderTabs() {
  els.tabs.innerHTML = categories().map(category => `
    <button type="button" class="tab ${category === state.activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');
}

function renderProducts() {
  const list = filteredProducts();
  els.grid.innerHTML = list.length ? list.map(product => `
    <article class="product-card reveal visible" data-id="${product.id}">
      <div class="product-art"><img src="${product.img}" alt="${product.name}" loading="lazy"></div>
      <h3>${product.name}</h3>
      <p class="product-meta">${product.desc}<br><small>${product.category}</small></p>
      <div class="price-row">
        <span class="price">${rupee(product.price)}</span>
        <div class="qty-control" aria-label="Quantity selector for ${product.name}">
          <button type="button" data-action="decrease" data-id="${product.id}">−</button>
          <span id="qty-${product.id}">${selectedQty(product.id)}</span>
          <button type="button" data-action="increase" data-id="${product.id}">+</button>
        </div>
      </div>
      <button type="button" class="add-card-btn" data-action="add" data-id="${product.id}">🛒 Add to Cart</button>
    </article>
  `).join('') : '<p class="empty">Is search/category me product nahi mila.</p>';
}

function cartItemsArray() {
  return Object.values(state.cart);
}

function cartTotals() {
  const items = cartItemsArray();
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return { count, total };
}

function renderCart() {
  const items = cartItemsArray();
  const { count, total } = cartTotals();

  els.cartCount.textContent = count;
  els.drawerCount.textContent = count === 1 ? '1 item selected' : `${count} items selected`;
  els.cartTotal.textContent = rupee(total);
  els.miniSubtotal.textContent = rupee(total);
  els.miniTotal.textContent = rupee(total);

  const emptyMarkup = '<p class="empty">Cart empty hai. Menu se product add karo.</p>';

  const markup = items.length ? items.map(item => `
    <div class="cart-item">
      <img class="cart-thumb" src="${item.img}" alt="${item.name}" loading="lazy">
      <div>
        <b>${item.name}</b><br>
        <small>${item.qty} × ${rupee(item.price)} = ${rupee(item.price * item.qty)}</small>
      </div>
      <div class="cart-row">
        <button type="button" data-action="cartDecrease" data-id="${item.id}">−</button>
        <span>${item.qty}</span>
        <button type="button" data-action="cartIncrease" data-id="${item.id}">+</button>
        <button type="button" class="remove-btn" data-action="remove" data-id="${item.id}">×</button>
      </div>
    </div>
  `).join('') : emptyMarkup;

  els.cartItems.innerHTML = markup;
  els.miniCart.innerHTML = items.length ? items.slice(0, 5).map(item => `
    <div class="mini-item">
      <img class="mini-thumb" src="${item.img}" alt="${item.name}" loading="lazy">
      <div>
        <b>${item.name}</b><br>
        <small>${item.qty} × ${rupee(item.price)}</small>
      </div>
      <strong>${rupee(item.price * item.qty)}</strong>
    </div>
  `).join('') + (items.length > 5 ? `<p class="small-note">+ ${items.length - 5} more items in cart</p>` : '') : emptyMarkup;

  saveCart();
}

function setProductQty(id, qty) {
  const product = productById(id);
  if (!product) return;
  const nextQty = Math.max(1, qty);
  state.cart[id] = { ...product, qty: nextQty };
  renderProducts();
  renderCart();
}

function addToCart(id) {
  const product = productById(id);
  if (!product) return;
  const currentQty = state.cart[id]?.qty || 0;
  state.cart[id] = { ...product, qty: currentQty + 1 };
  renderProducts();
  renderCart();
  showToast(`${product.name} cart me add ho gaya`);
}

function changeCartQty(id, delta) {
  const product = productById(id);
  if (!product || !state.cart[id]) return;
  const nextQty = state.cart[id].qty + delta;
  if (nextQty <= 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = { ...product, qty: nextQty };
  }
  renderProducts();
  renderCart();
}

function removeItem(id) {
  delete state.cart[id];
  renderProducts();
  renderCart();
}

function clearCart() {
  state.cart = {};
  renderProducts();
  renderCart();
  showToast('Cart clear ho gaya');
}

function checkoutWhatsApp() {
  const items = cartItemsArray();
  if (!items.length) {
    showToast('Pehle item add karo');
    return;
  }
  const total = cartTotals().total;
  const lines = items.map((item, index) => `${index + 1}. ${item.name} x ${item.qty} = ${rupee(item.price * item.qty)}`).join('\n');
  const message = `Hello ${SHOP.name},\n\nI want to order:\n${lines}\n\nTotal Amount: ${rupee(total)}\n\nCustomer Name:\nAddress:\nDelivery / Pickup:\n\nPlease confirm my order.`;
  const url = `https://wa.me/${SHOP.phoneWa}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function openCart() {
  els.cartDrawer.classList.add('open');
  els.cartDrawer.setAttribute('aria-hidden', 'false');
  els.cartBackdrop.classList.add('show');
}

function closeCart() {
  els.cartDrawer.classList.remove('open');
  els.cartDrawer.setAttribute('aria-hidden', 'true');
  els.cartBackdrop.classList.remove('show');
}

function showToast(text) {
  els.toast.textContent = text;
  els.toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove('show'), 1700);
}

function bindEvents() {
  els.tabs.addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.activeCategory = button.dataset.category;
    renderTabs();
    renderProducts();
  });

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const id = button.dataset.id;
    const action = button.dataset.action;
    if (action === 'add') addToCart(id);
    if (action === 'increase') setProductQty(id, selectedQty(id) + 1);
    if (action === 'decrease') setProductQty(id, selectedQty(id) - 1);
    if (action === 'cartIncrease') changeCartQty(id, 1);
    if (action === 'cartDecrease') changeCartQty(id, -1);
    if (action === 'remove') removeItem(id);
  });

  document.getElementById('openCart').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartBackdrop').addEventListener('click', closeCart);
  document.getElementById('clearCart').addEventListener('click', clearCart);
  document.getElementById('whatsappCheckout').addEventListener('click', checkoutWhatsApp);
  document.getElementById('quickCheckout').addEventListener('click', checkoutWhatsApp);
  document.getElementById('clearSearch').addEventListener('click', () => {
    state.query = '';
    els.searchInput.value = '';
    renderProducts();
  });
  els.searchInput.addEventListener('input', event => {
    state.query = event.target.value;
    renderProducts();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeCart();
  });

  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function init() {
  renderTabs();
  renderProducts();
  renderCart();
  bindEvents();
}

init();
