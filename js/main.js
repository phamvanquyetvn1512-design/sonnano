/* Render danh mục + lưới sản phẩm sơn PAGO */
(function () {
  const grid = document.getElementById("product-grid");
  const filter = document.getElementById("cat-filter");
  const ZALO = PAGO_CONTACT.zalo;
  const PHONE = PAGO_CONTACT.phone;

  PAGO_CATS.forEach((c, i) => {
    const b = document.createElement("button");
    b.textContent = c.label + " (" + (c.id === "all" ? PAGO_PRODUCTS.length : PAGO_PRODUCTS.filter(p => p.cat === c.id).length) + ")";
    if (i === 0) b.classList.add("active");
    b.onclick = () => {
      filter.querySelectorAll("button").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      render(c.id);
    };
    filter.appendChild(b);
  });

  function card(p) {
    const zaloText = encodeURIComponent("Chào shop, mình muốn hỏi giá sơn " + p.brand + " " + p.msp + " (" + p.name + ")");
    return `<div class="card">
      <div class="thumb"><img src="images/${p.img}" alt="Sơn ${p.brand} ${p.msp}" loading="lazy"></div>
      <div class="body">
        <div class="badges"><span class="badge-brand">${p.brand}</span><span class="badge-msp">${p.msp}</span></div>
        <h3>${p.name}</h3>
        ${p.en ? `<div class="en">${p.en}</div>` : ""}
        <div class="feat">${p.feat}</div>
        <div class="pack">📦 Quy cách: ${p.pack}</div>
        <div class="price-note">Giá: liên hệ Zalo</div>
        <div class="actions">
          <a class="zalo" href="${ZALO}?text=${zaloText}" target="_blank">Hỏi giá Zalo Mr QUYẾT</a>
          <a class="call" href="tel:${PHONE}">Gọi ${PHONE}</a>
        </div>
      </div>
    </div>`;
  }

  function render(cat) {
    const list = cat === "all" ? PAGO_PRODUCTS : PAGO_PRODUCTS.filter(p => p.cat === cat);
    grid.innerHTML = list.map(card).join("");
  }
  render("all");

  document.getElementById("year").textContent = new Date().getFullYear();

  /* Toggle chi tiết quy trình sơn */
  document.querySelectorAll(".proc-toggle").forEach((b) => {
    b.onclick = () => {
      const d = document.getElementById(b.dataset.t);
      const open = d.classList.toggle("open");
      b.textContent = open ? "Thu gọn ▴" : "Xem chi tiết ▾";
    };
  });

  /* Slideshow nhà màu ở hero: mỗi ảnh 3 giây, tự động lặp lại */
  (function () {
    const imgs = [
      "images/nha-mau-do.webp",
      "images/nha-mau-xanh-duong.webp",
      "images/nha-mau-vang.webp",
      "images/nha-mau-xanh-la.webp",
      "images/nha-mau-tim.webp",
    ];
    const el = document.getElementById("hero-slide-img");
    if (!el) return;
    imgs.forEach((src) => { const im = new Image(); im.src = src; });
    let i = 0;
    setInterval(() => {
      i = (i + 1) % imgs.length;
      el.style.opacity = "0";
      setTimeout(() => { el.src = imgs[i]; el.style.opacity = "1"; }, 350);
    }, 3000);
  })();

  /* Bảng màu sơn tham khảo ở cột trái — bấm để hỏi Mr QUYẾT qua Zalo */
  (function () {
    const grid = document.getElementById("color-grid");
    if (!grid) return;
    const COLORS = [
      ["WH-01","Trắng sứ","#F8F8F5"],["WH-02","Trắng kem","#F5F0E6"],
      ["GR-01","Xám nhạt","#D9D9D9"],["GR-02","Xám","#9AA0A6"],["GR-03","Ghi đậm","#5F6368"],
      ["YL-01","Vàng kem","#F7E8A4"],["YL-02","Vàng chanh","#F2D024"],["YL-03","Vàng đất","#C9A227"],
      ["OR-01","Cam nhạt","#F5B971"],["OR-02","Cam đất","#BF6A30"],["OR-03","Cam đậm","#EF6C00"],
      ["RD-01","Đỏ gạch","#C0392B"],["RD-02","Đỏ tươi","#D32F2F"],["RD-03","Đỏ đô","#8E1616"],
      ["PK-01","Hồng phấn","#F4C2D7"],["PK-02","Hồng đậm","#EC407A"],
      ["PU-01","Tím nhạt","#C3A6E0"],["PU-02","Tím đậm","#7B1FA2"],
      ["BL-01","Xanh da trời","#A8D8F0"],["BL-02","Xanh dương","#1565C0"],["BL-03","Xanh navy","#1A237E"],
      ["GN-01","Xanh lá nhạt","#AED581"],["GN-02","Xanh lá","#2E7D32"],["GN-03","Xanh rêu","#4A6741"],
      ["BR-01","Nâu nhạt","#C8A97E"],["BR-02","Nâu đất","#795548"],["BR-03","Nâu đậm","#4E342E"],
    ];
    grid.innerHTML = COLORS.map((c) => {
      const text = encodeURIComponent("Chào Mr QUYẾT, mình muốn hỏi màu sơn " + c[0] + " (" + c[1] + ")");
      return `<a class="csw" href="${ZALO}?text=${text}" target="_blank" title="Hỏi màu ${c[0]} qua Zalo"><i style="background:${c[2]}"></i><b>${c[0]}</b><span>${c[1]}</span></a>`;
    }).join("");
  })();
})();
