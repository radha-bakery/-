const PRODUCTS = [
  {
    "id": "pineapple-cake",
    "name": "Pineapple Cake",
    "category": "Cakes 500g",
    "price": 500,
    "img": "pineapple-cake.jpg"
  },
  {
    "id": "black-forest-cake",
    "name": "Black Forest Cake",
    "category": "Cakes 500g",
    "price": 500,
    "img": "black-forest-cake.jpg"
  },
  {
    "id": "butterscotch-cake",
    "name": "Butterscotch Cake",
    "category": "Cakes 500g",
    "price": 500,
    "img": "butterscotch-cake.jpg"
  },
  {
    "id": "choco-truffle-cake",
    "name": "Choco Truffle Cake",
    "category": "Cakes 500g",
    "price": 550,
    "img": "choco-truffle-cake.jpg"
  },
  {
    "id": "red-velvet-cake",
    "name": "Red Velvet Cake",
    "category": "Cakes 500g",
    "price": 650,
    "img": "red-velvet-cake.jpg"
  },
  {
    "id": "mango-cake",
    "name": "Mango Cake",
    "category": "Cakes 500g",
    "price": 550,
    "img": "mango-cake.jpg"
  },
  {
    "id": "strawberry-cake",
    "name": "Strawberry Cake",
    "category": "Cakes 500g",
    "price": 550,
    "img": "strawberry-cake.jpg"
  },
  {
    "id": "blueberry-cake",
    "name": "Blue Berry Cake",
    "category": "Cakes 500g",
    "price": 550,
    "img": "blueberry-cake.jpg"
  },
  {
    "id": "fresh-mango-cake",
    "name": "Fresh Mango Cake",
    "category": "Cakes 500g",
    "price": 550,
    "img": "fresh-mango-cake.jpg"
  },
  {
    "id": "corn-pizza",
    "name": "Corn Pizza",
    "category": "Pizza",
    "price": 180,
    "img": "corn-pizza.jpg"
  },
  {
    "id": "veg-pizza",
    "name": "Veg Pizza",
    "category": "Pizza",
    "price": 200,
    "img": "veg-pizza.jpg"
  },
  {
    "id": "cheese-pizza",
    "name": "Cheese Pizza",
    "category": "Pizza",
    "price": 170,
    "img": "cheese-pizza.jpg"
  },
  {
    "id": "pizza-slice",
    "name": "Pizza Slice",
    "category": "Pizza",
    "price": 60,
    "img": "pizza-slice.jpg"
  },
  {
    "id": "paneer-corn-pizza",
    "name": "Paneer Corn Pizza",
    "category": "Pizza",
    "price": 230,
    "img": "paneer-corn-pizza.jpg"
  },
  {
    "id": "pastry-1",
    "name": "Pastry 1",
    "category": "Pastry",
    "price": 0,
    "img": "pastry-1.jpg",
    "note": "Price on request"
  },
  {
    "id": "pastry-2",
    "name": "Pastry 2",
    "category": "Pastry",
    "price": 0,
    "img": "pastry-2.jpg",
    "note": "Price on request"
  },
  {
    "id": "pastry-3",
    "name": "Pastry 3",
    "category": "Pastry",
    "price": 0,
    "img": "pastry-3.jpg",
    "note": "Price on request"
  },
  {
    "id": "pastry-4",
    "name": "Pastry 4",
    "category": "Pastry",
    "price": 0,
    "img": "pastry-4.jpg",
    "note": "Price on request"
  },
  {
    "id": "pastry-5",
    "name": "Pastry 5",
    "category": "Pastry",
    "price": 0,
    "img": "pastry-5.jpg",
    "note": "Price on request"
  },
  {
    "id": "pasta",
    "name": "Pasta",
    "category": "Pasta",
    "img": "pasta.jpg",
    "variants": [
      {
        "label": "Macaroni Full",
        "price": 100
      },
      {
        "label": "Macaroni Half",
        "price": 50
      },
      {
        "label": "Penne Full",
        "price": 120
      },
      {
        "label": "Penne Half",
        "price": 60
      }
    ]
  },
  {
    "id": "french-fries",
    "name": "French Fries",
    "category": "Fries & Snacks",
    "price": 60,
    "img": "french-fries.jpg"
  },
  {
    "id": "peri-peri-fries",
    "name": "Peri Peri French Fries",
    "category": "Fries & Snacks",
    "price": 70,
    "img": "peri-peri-fries.jpg"
  },
  {
    "id": "smileys",
    "name": "Smileys (5 pcs)",
    "category": "Fries & Snacks",
    "price": 60,
    "img": "smileys.jpg"
  },
  {
    "id": "samosa",
    "name": "Samosa",
    "category": "Fries & Snacks",
    "price": 15,
    "img": "samosa.jpg"
  },
  {
    "id": "momos",
    "name": "Momos",
    "category": "Chinese",
    "img": "momos.jpg",
    "variants": [
      {
        "label": "Full",
        "price": 60
      },
      {
        "label": "Half",
        "price": 30
      }
    ]
  },
  {
    "id": "chowmin",
    "name": "Chaumin",
    "category": "Chinese",
    "img": "chowmin.jpg",
    "variants": [
      {
        "label": "Full",
        "price": 100
      },
      {
        "label": "Half",
        "price": 60
      }
    ]
  },
  {
    "id": "fried-momos",
    "name": "Fried Momos",
    "category": "Chinese",
    "img": "fried-momos.jpg",
    "variants": [
      {
        "label": "Full",
        "price": 80
      },
      {
        "label": "Half",
        "price": 40
      }
    ]
  },
  {
    "id": "veg-spring-roll",
    "name": "Veg Spring Roll",
    "category": "Chinese",
    "img": "veg-spring-roll.jpg",
    "variants": [
      {
        "label": "Full",
        "price": 100
      },
      {
        "label": "Half",
        "price": 50
      }
    ]
  },
  {
    "id": "vanilla-shake",
    "name": "Vanilla Shake",
    "category": "Drinks",
    "price": 60,
    "img": "vanilla-shake.jpg"
  },
  {
    "id": "strawberry-shake",
    "name": "Strawberry Shake",
    "category": "Drinks",
    "price": 60,
    "img": "strawberry-shake.jpg"
  },
  {
    "id": "mango-shake",
    "name": "Mango Shake",
    "category": "Drinks",
    "price": 60,
    "img": "mango-shake.jpg"
  },
  {
    "id": "chocolate-shake",
    "name": "Chocolate Shake",
    "category": "Drinks",
    "price": 70,
    "img": "chocolate-shake.jpg"
  },
  {
    "id": "butter-scotch-shake",
    "name": "Butter Scotch Shake",
    "category": "Drinks",
    "price": 70,
    "img": "butter-scotch-shake.jpg"
  },
  {
    "id": "cold-coffee",
    "name": "Cold Coffee",
    "category": "Drinks",
    "price": 70,
    "img": "cold-coffee.jpg"
  },
  {
    "id": "cold-coffee-ice-cream",
    "name": "Cold Coffee with Ice Cream",
    "category": "Drinks",
    "price": 80,
    "img": "cold-coffee-ice-cream.jpg"
  },
  {
    "id": "ice-tea-lemon",
    "name": "Ice Tea Lemon",
    "category": "Drinks",
    "price": 70,
    "img": "ice-tea-lemon.jpg"
  },
  {
    "id": "burger",
    "name": "Burger",
    "category": "Burger & Sandwich",
    "price": 50,
    "img": "burger.jpg"
  },
  {
    "id": "veg-sandwich",
    "name": "Veg Sandwich",
    "category": "Burger & Sandwich",
    "price": 60,
    "img": "veg-sandwich.jpg"
  },
  {
    "id": "potato-sandwich",
    "name": "Potato Sandwich",
    "category": "Burger & Sandwich",
    "price": 70,
    "img": "potato-sandwich.jpg"
  },
  {
    "id": "extra-cheese-slice",
    "name": "Extra Cheese Slice",
    "category": "Burger & Sandwich",
    "price": 15,
    "img": "extra-cheese-slice.jpg"
  }
];

const WHATSAPP_NUMBER = "919418310089";
const grid = document.getElementById("productGrid");
const tabs = document.getElementById("categoryTabs");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const subTotalEl = document.getElementById("subTotal");
const grandTotalEl = document.getElementById("grandTotal");

let activeCategory = "All";
let cart = JSON.parse(localStorage.getItem("radhaCart") || "[]");

const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];

function rupee(n) { return "₹" + Number(n || 0).toLocaleString("en-IN"); }
function productPrice(product, variantIndex = 0) {
  if (product.variants) return product.variants[variantIndex].price;
  return product.price || 0;
}
function productVariantLabel(product, variantIndex = 0) {
  if (product.variants) return product.variants[variantIndex].label;
  return "";
}

function renderTabs(){
  tabs.innerHTML = categories.map(cat => `<button class="tab ${cat===activeCategory?'active':''}" data-cat="${cat}">${cat}</button>`).join("");
  tabs.querySelectorAll(".tab").forEach(btn => {
    btn.onclick = () => { activeCategory = btn.dataset.cat; renderTabs(); renderProducts(); };
  });
}

function renderProducts(){
  const filtered = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
  grid.innerHTML = filtered.map(p => {
    const variantHtml = p.variants ? `<select class="variant" id="variant-${p.id}">
      ${p.variants.map((v,i)=>`<option value="${i}">${v.label} - ${rupee(v.price)}</option>`).join("")}
    </select>` : "";
    const price = p.variants ? p.variants[0].price : p.price;
    const priceText = p.note || rupee(price);
    return `<article class="card">
      <div class="card-img"><img src="assets/products/${p.img}" alt="${p.name}" loading="lazy"></div>
      <h3>${p.name}</h3>
      <div class="card-meta"><span class="price">${priceText}</span><span class="badge">${p.category}</span></div>
      ${variantHtml}
      <div class="card-actions">
        <div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button><span id="qty-${p.id}">1</span><button onclick="changeQty('${p.id}',1)">+</button></div>
        <button class="add" onclick="addToCart('${p.id}')">Add to Cart</button>
      </div>
    </article>`;
  }).join("");
}

window.changeQty = function(id, delta){
  const el = document.getElementById("qty-" + id);
  let val = Math.max(1, Number(el.textContent) + delta);
  el.textContent = val;
}

window.addToCart = function(id){
  const p = PRODUCTS.find(x => x.id === id);
  const qty = Number(document.getElementById("qty-" + id)?.textContent || 1);
  const variantIndex = p.variants ? Number(document.getElementById("variant-" + id).value) : 0;
  const variant = productVariantLabel(p, variantIndex);
  const price = productPrice(p, variantIndex);
  const key = id + "::" + variant;
  const existing = cart.find(item => item.key === key);
  if(existing) existing.qty += qty;
  else cart.push({key, id:p.id, name:p.name, variant, price, qty, img:p.img});
  saveCart();
  openCart();
}

function saveCart(){
  localStorage.setItem("radhaCart", JSON.stringify(cart));
  renderCart();
}

function renderCart(){
  const count = cart.reduce((s,i)=>s+i.qty,0);
  const subtotal = cart.reduce((s,i)=>s+i.qty*i.price,0);
  cartCountEl.textContent = count;
  subTotalEl.textContent = rupee(subtotal);
  grandTotalEl.textContent = rupee(subtotal);

  if(cart.length === 0){
    cartItemsEl.innerHTML = `<p style="text-align:center;color:#7e625c;margin-top:50px">Cart empty hai. Products add karo.</p>`;
    return;
  }

  cartItemsEl.innerHTML = cart.map((item, index) => `<div class="cart-row">
    <img src="assets/products/${item.img}" alt="${item.name}">
    <div>
      <h4>${item.name} ${item.variant ? `<small>(${item.variant})</small>` : ""}</h4>
      <p>${rupee(item.price)} × ${item.qty} = <b>${rupee(item.price * item.qty)}</b></p>
      <div style="display:flex;gap:6px;margin-top:7px">
        <button onclick="cartQty(${index},-1)">−</button>
        <button onclick="cartQty(${index},1)">+</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    </div>
    <b>${item.qty}</b>
  </div>`).join("");
}

window.cartQty = function(index, delta){
  cart[index].qty += delta;
  if(cart[index].qty <= 0) cart.splice(index,1);
  saveCart();
}

window.removeItem = function(index){
  cart.splice(index, 1);
  saveCart();
}

function openCart(){
  cartPanel.classList.add("open");
  overlay.classList.add("show");
  cartPanel.setAttribute("aria-hidden","false");
}
function closeCart(){
  cartPanel.classList.remove("open");
  overlay.classList.remove("show");
  cartPanel.setAttribute("aria-hidden","true");
}

document.getElementById("openCart").onclick = openCart;
document.getElementById("closeCart").onclick = closeCart;
overlay.onclick = closeCart;

document.getElementById("checkoutBtn").onclick = function(){
  if(cart.length === 0) {
    alert("Cart empty hai.");
    return;
  }
  const lines = cart.map((item, i) => {
    const title = item.variant ? `${item.name} (${item.variant})` : item.name;
    return `${i+1}. ${title} × ${item.qty} = ${rupee(item.price * item.qty)}`;
  }).join("%0A");
  const total = cart.reduce((s,i)=>s+i.qty*i.price,0);
  const message =
`Hello Radha Bakers,%0A%0AI want to order:%0A${lines}%0A%0ATotal Amount: ${rupee(total)}%0A%0AName:%0AAddress:%0ADelivery / Pickup:%0A%0APlease confirm my order.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
}

renderTabs();
renderProducts();
renderCart();
