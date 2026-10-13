/* Phong thủy chọn màu sơn — tra mệnh ngũ hành (nạp âm) + cung phi bát trạch theo năm sinh.
   Công thức nạp âm: cặp 2 năm liên tiếp chung một hành, thứ tự 30 cặp bắt đầu từ Giáp Tý (1984) = Kim. */
(function () {
  var wrap = document.getElementById("phong-thuy");
  if (!wrap) return;

  var CAN = ["Giáp","Ất","Bính","Đinh","Mậu","Kỷ","Canh","Tân","Nhâm","Quý"];
  var CHI = ["Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi","Thân","Dậu","Tuất","Hợi"];
  var SEQ = ["Kim","Hỏa","Mộc","Thổ","Kim","Hỏa","Thủy","Thổ","Kim","Mộc","Thủy","Thổ","Hỏa","Mộc","Thủy","Kim","Hỏa","Mộc","Thổ","Kim","Hỏa","Thủy","Thổ","Kim","Mộc","Thủy","Thổ","Hỏa","Mộc","Thủy"];
  var CUNG = {1:["Khảm","Thủy"],2:["Khôn","Thổ"],3:["Chấn","Mộc"],4:["Tốn","Mộc"],6:["Càn","Kim"],7:["Đoài","Kim"],8:["Cấn","Thổ"],9:["Ly","Hỏa"]};

  var MENH = {
    "Kim":  { hop:["Trắng","Xám","Ghi","Vàng nhạt","Ánh kim"], ky:["Đỏ","Hồng","Tím"], sw:["#ffffff","#9aa0a6","#cfd4d9","#f7e8a4","#d4af37"], note:"Thổ sinh Kim — vàng đất, nâu đất làm điểm nhấn rất tốt." },
    "Mộc":  { hop:["Xanh lá","Xanh rêu","Xanh dương","Đen"], ky:["Trắng","Xám","Ghi"], sw:["#2e7d32","#4a6741","#1565c0","#212121"], note:"Thủy sinh Mộc — xanh dương, đen là màu tương sinh." },
    "Thủy": { hop:["Xanh dương","Đen","Trắng","Xám"], ky:["Vàng đất","Nâu đất"], sw:["#1565c0","#212121","#ffffff","#9aa0a6"], note:"Kim sinh Thủy — trắng, xám là màu tương sinh." },
    "Hỏa":  { hop:["Đỏ","Hồng","Cam","Tím","Xanh lá"], ky:["Xanh dương","Đen"], sw:["#d32f2f","#ec407a","#ef6c00","#7b1fa2","#2e7d32"], note:"Mộc sinh Hỏa — xanh lá là màu tương sinh." },
    "Thổ":  { hop:["Vàng đất","Nâu","Cam đất","Đỏ","Hồng"], ky:["Xanh lá cây"], sw:["#c9a227","#795548","#bf6a30","#d32f2f","#ec407a"], note:"Hỏa sinh Thổ — đỏ, hồng là màu tương sinh." }
  };

  function mod(a, n){ return ((a % n) + n) % n; }
  function menhOf(y){
    var pair = Math.floor((y - 1984) / 2);
    return SEQ[mod(pair, 30)];
  }
  function canChi(y){
    return CAN[mod(y - 4, 10)] + " " + CHI[mod(y - 4, 12)];
  }
  function digitSum(n){ var s = 0; while (n > 0){ s += n % 10; n = Math.floor(n / 10); } return s; }
  function cungPhi(y, gt){
    var t = y % 100, n;
    if (t === 0) n = digitSum(y);          /* năm tròn như 2000: cộng cả 4 chữ số */
    else { n = digitSum(t); while (n > 9) n = digitSum(n); }
    var r;
    if (gt === "nam"){ r = 11 - n; if (r === 10) r = 1; if (r === 11) r = 2; if (r === 5) r = 2; }
    else { r = 4 + n; if (r > 9) r -= 9; if (r === 5) r = 8; }
    return CUNG[r];
  }

  /* Vẽ 5 thẻ mệnh + danh sách năm sinh 1975–2045 */
  var grid = document.getElementById("menh-grid");
  var order = ["Kim","Mộc","Thủy","Hỏa","Thổ"];
  var years = {};
  order.forEach(function(m){ years[m] = []; });
  for (var y = 1975; y <= 2045; y++) years[menhOf(y)].push(y);

  grid.innerHTML = order.map(function(m){
    var d = MENH[m];
    var sw = d.hop.map(function(c, i){
      return '<span class="sw" style="background:' + d.sw[i] + '" title="' + c + '"></span>';
    }).join("");
    var yl = years[m].map(function(yy){ return '<span class="ychip">' + yy + '</span>'; }).join("");
    return '<div class="menh-card menh-' + m + '">' +
      '<h3>MỆNH ' + m.toUpperCase() + '</h3>' +
      '<div class="mrow"><b>Màu hợp:</b> ' + d.hop.join(", ") + '</div>' +
      '<div class="swatches">' + sw + '</div>' +
      '<div class="mrow"><b>Màu kỵ:</b> ' + d.ky.join(", ") + '</div>' +
      '<div class="mnote">' + d.note + '</div>' +
      '<details class="years"><summary>Các năm sinh mệnh ' + m + ' (1975–2045)</summary><div class="ychips">' + yl + '</div></details>' +
    '</div>';
  }).join("");

  /* Tra cứu */
  document.getElementById("fs-btn").onclick = function(){
    var y = parseInt(document.getElementById("fs-year").value, 10);
    var gt = document.getElementById("fs-gt").value;
    var kq = document.getElementById("fs-kq");
    if (!y || y < 1900 || y > 2100){ kq.innerHTML = "Bạn nhập năm sinh (ví dụ 1990) giúp mình nhé."; return; }
    var m = menhOf(y), d = MENH[m], cp = cungPhi(y, gt);
    var sw = d.hop.map(function(c, i){
      return '<span class="sw" style="background:' + d.sw[i] + '" title="' + c + '"></span>';
    }).join("");
    kq.innerHTML =
      '<div class="fs-result">' +
      '<div class="fs-line">Năm <b>' + y + '</b> (' + canChi(y) + ') — <b class="hl">MỆNH ' + m.toUpperCase() + '</b> · Cung phi: <b>' + cp[0] + '</b> (' + cp[1] + ')</div>' +
      '<div class="fs-line"><b>Màu sơn hợp:</b> ' + d.hop.join(", ") + '</div>' +
      '<div class="swatches">' + sw + '</div>' +
      '<div class="fs-line"><b>Màu nên tránh:</b> ' + d.ky.join(", ") + '</div>' +
      '<div class="mnote">' + d.note + ' Nhắn Zalo Mr QUYẾT ' + PAGO_CONTACT.phone + ' để được phối màu thử miễn phí.</div>' +
      '</div>';
  };
})();
