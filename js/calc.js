/* Máy tính lượng sơn tự động — công thức: diện tích × số lớp / độ phủ, +10% hao hụt */
(function () {
  const btn = document.getElementById("calc-btn");
  if (!btn) return;
  btn.onclick = function () {
    const dt = parseFloat(document.getElementById("calc-dt").value) || 0;
    const doPhu = parseFloat(document.getElementById("calc-loai").value);
    const lop = parseInt(document.getElementById("calc-lop").value, 10);
    const thung = parseFloat(document.getElementById("calc-thung").value);
    const kq = document.getElementById("calc-kq");
    if (dt <= 0) { kq.textContent = "Vui lòng nhập diện tích lớn hơn 0."; return; }
    const tong = (dt * lop) / doPhu;
    const tongHaoHut = tong * 1.1;
    const soThung = Math.ceil(tongHaoHut / thung);
    const donVi = doPhu <= 3 ? "kg" : "lít";
    const tenThung = thung >= 18 ? "thùng lớn" : "lon nhỏ";
    const msg = "Với " + dt + " m², sơn " + lop + " lớp: cần khoảng " +
      tongHaoHut.toFixed(1) + " " + donVi + " (đã gồm 10% hao hụt) — tương đương " +
      soThung + " " + tenThung + " loại " + thung + (doPhu <= 3 ? "kg" : "L") + ".";
    const zalo = "https://zalo.me/0372569504?text=" + encodeURIComponent(
      "Chào shop, mình cần sơn khoảng " + dt + "m² (" + lop + " lớp). Shop tư vấn giúp mình loại sơn và báo giá " + soThung + " thùng " + thung + "L nhé.");
    kq.innerHTML = msg + '<br><br><a href="' + zalo + '" target="_blank" style="display:inline-block;background:#0068ff;color:#fff;padding:10px 24px;border-radius:22px;font-weight:700">Hỏi giá Zalo Mr QUYẾT cho lượng sơn này</a>';
  };
})();
