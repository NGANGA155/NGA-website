const products = [
  {
    name: "Tất lót lông cổ cao ấm áp giữ nhiệt",
    price: "1.000 ₫",
    oldPrice: "30.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp0dnq8hcdi394.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/8V0XpdoU7R" // Thay link Shopee thật
  },
  {
    name: "Lọ Đựng Gia Vị Thủy Tinh",
    price: "1.000 ₫",
    oldPrice: "17.711₫ ₫",
    sale: "97%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-m0273z390ood3c.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/1LXMwwNDow" // Thay link Shopee thật
  },
 {
    name: "Thanh Chặn Khe Cửa",
    price: "1.000 ₫",
    oldPrice: "29.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhkdvihjmvup0a@resize_w450_nl.webp", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/11zMpAbR3" // Thay link Shopee thật
  },
{    name: "Tranh Tô Màu Nước MaGIC",
    price: "1.000 ₫",
    oldPrice: "29.000 ₫",
    sale: "98%",
    image: "https://down-vn.img.susercontent.com/file/vn-11134258-820l4-mfxq62t9foqw33", // Thay ảnh thật ở đây
    link: "https://s.shopee.vn/9zpLcT39oA" // Thay link Shopee thật
  },
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

