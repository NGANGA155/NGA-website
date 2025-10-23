const products = [
  {
    name: "Tất cao cổ nam nữ trơn PEALO BASIC",
    price: "1.000 ₫",
    oldPrice: "40.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134258-820l4-mfxq31jlyw3s72", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/4q7F0oopxS" // Thay link Shopee thật
  },
  {
    name: "Set 10 móc áo trẻ em Inochi",
    price: "1.000 ₫",
    oldPrice: "30.000 ₫",
    sale: "97%",
    image: "https://cf.shopee.vn/file/xyzabc", // Thay ảnh thật ở đây
    link: "https://shopee.vn/product/456789/321654" // Thay link Shopee thật
  },
  // Thêm các sản phẩm khác ở đây
];

const container = document.getElementById("product-list");

function renderProducts(list) {
  container.innerHTML = list.map(p => `
    <div class="card">
      <div class="flash-sale">${p.sale} OFF</div>
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="price">${p.price}</div>
      <div class="old-price">${p.oldPrice}</div>
      <a href="${p.link}" target="_blank" class="btn">Xem sản phẩm</a>
    </div>
  `).join("");
}

renderProducts(products);

// 🔍 Tìm kiếm
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(val));
  renderProducts(filtered);
});

// ⏱️ Đếm ngược
const timer = document.getElementById("timer");
let countdown = 60 * 5; // 5 phút ví dụ
setInterval(() => {
  if (countdown <= 0) { timer.textContent = "ĐANG DIỄN RA"; return; }
  countdown--;
  const m = Math.floor(countdown / 60);
  const s = countdown % 60;
  timer.textContent = `${m}:${s.toString().padStart(2, '0')}`;
}, 1000);
