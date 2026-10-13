/* Chatbot tư vấn sơn PAGO — câu hỏi cố định + tự trả lời theo từ khóa.
   Thông tin khách để lại được lưu TRÊN TRÌNH DUYỆT của khách (localStorage),
   và tự mở Zalo với tin nhắn soạn sẵn để khách bấm Gửi là shop nhận được ngay. */
(function () {
  const PHONE = PAGO_CONTACT.phone;
  const ZALO = PAGO_CONTACT.zalo;

  const QUICK = [
    { q: "💰 Giá sơn bao nhiêu?", a: "Giá bán lẻ & đại lý vui lòng nhắn Zalo <a href='" + ZALO + "' target='_blank'>" + PHONE + "</a> để được báo giá tốt nhất (Mr QUYẾT trực tiếp tư vấn). Trên web mình không niêm yết giá ạ." },
    { q: "🏠 Tư vấn sơn trong nhà", a: "Sơn trong nhà PAGO có các dòng: mịn cao cấp 668PG, lau chùi Easy Clean 200PG, bóng mờ 300PG, 5 in 1 (400PG), 7 in 1 (500PG), 9 in 1 chống tia UV (600PG) và siêu trắng trần 900PG. Bạn cần sơn phòng khách hay phòng ngủ để mình gợi ý kỹ hơn?" },
    { q: "🧱 Tư vấn sơn chống thấm", a: "Chống thấm PAGO: PC-11A (trộn xi măng 1:1), PG-55 (chống thấm màu), PU-66 (co giãn 800%), PS-88 (sàn vệ sinh, bể bơi), PN-99 (chống thấm ngược), CLEAR (phủ bóng giả đá/giả gỗ) và NHŨ (nhũ đồng). Bạn cần chống thấm khu vực nào?" },
    { q: "🌦️ Tư vấn sơn ngoài trời", a: "Sơn ngoài trời: T111A (kinh tế), T222A (men sứ, chống nấm mốc), T300A (Nano 7 in 1, tự làm sạch), T400A (Nano 9 in 1, chống thấm cực tốt). Nhớ dùng kèm sơn lót kháng kiềm GO 250 / GO 2000 cho bền màu nhé." },
    { q: "📍 Địa chỉ công ty", a: "<b>" + PAGO_CONTACT.company + "</b><br>" + PAGO_CONTACT.factory + ". Liên hệ/Zalo: <a href='" + ZALO + "' target='_blank'>" + PHONE + "</a>." },
    { q: "🧮 Tính lượng sơn cần mua", a: "Bạn kéo xuống mục <b>\"Tự tính lượng sơn\"</b> trên web, nhập diện tích (m²), chọn loại sơn và số lớp — web sẽ tính ngay số lít và số thùng cần mua (đã gồm 10% hao hụt) ạ." },
    { q: "📝 Để lại thông tin liên hệ", form: true },
  ];

  const box = document.getElementById("chat-box");
  const msgs = document.getElementById("chat-msgs");
  const quick = document.getElementById("chat-quick");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  document.getElementById("chat-fab").onclick = () => {
    box.classList.toggle("open");
    if (box.classList.contains("open") && !msgs.dataset.hi) {
      msgs.dataset.hi = "1";
      bot("Chào bạn! Mình là trợ lý sơn PAGO. Bạn cần tư vấn gì ạ? Có thể bấm câu hỏi nhanh bên dưới hoặc nhắn trực tiếp nhé.");
    }
  };
  document.getElementById("chat-close").onclick = () => box.classList.remove("open");

  /* Tự động mở khung chat khi mở web (mỗi phiên trình duyệt 1 lần) */
  try {
    if (!sessionStorage.getItem("chat_auto_open")) {
      sessionStorage.setItem("chat_auto_open", "1");
      setTimeout(() => {
        if (!box.classList.contains("open")) document.getElementById("chat-fab").click();
      }, 1500);
    }
  } catch (e) {}

  function scroll() { msgs.scrollTop = msgs.scrollHeight; }
  function bot(html) {
    const d = document.createElement("div");
    d.className = "msg bot"; d.innerHTML = html;
    msgs.appendChild(d); scroll();
  }
  function user(text) {
    const d = document.createElement("div");
    d.className = "msg user"; d.textContent = text;
    msgs.appendChild(d); scroll();
  }

  QUICK.forEach((item) => {
    const b = document.createElement("button");
    b.textContent = item.q;
    b.onclick = () => {
      user(item.q.replace(/^[^\s]+\s/, ""));
      setTimeout(() => item.form ? leadForm() : bot(item.a), 350);
    };
    quick.appendChild(b);
  });

  function leadForm() {
    const wrap = document.createElement("div");
    wrap.className = "msg bot";
    wrap.innerHTML =
      "<b>Để lại thông tin, mình tư vấn chi tiết:</b>" +
      "<div class='lead-form'>" +
      "<input id='lf-name' placeholder='Tên của bạn'>" +
      "<input id='lf-phone' placeholder='Số điện thoại' inputmode='tel'>" +
      "<textarea id='lf-need' rows='2' placeholder='Nhu cầu: ví dụ cần sơn chống thấm sân thượng...'></textarea>" +
      "<button id='lf-send'>Gửi thông tin</button></div>";
    msgs.appendChild(wrap); scroll();
    wrap.querySelector("#lf-send").onclick = () => {
      const name = wrap.querySelector("#lf-name").value.trim();
      const phone = wrap.querySelector("#lf-phone").value.trim();
      const need = wrap.querySelector("#lf-need").value.trim();
      if (!name || !phone) { bot("Bạn nhập giúp mình <b>tên</b> và <b>số điện thoại</b> nhé."); return; }
      if (phone.replace(/\D/g, "").length < 9) { bot("Số điện thoại chưa đúng, bạn kiểm tra lại giúp mình nhé."); return; }
      const lead = { name, phone, need, at: new Date().toISOString() };
      const leads = JSON.parse(localStorage.getItem("pago_leads") || "[]");
      leads.push(lead);
      localStorage.setItem("pago_leads", JSON.stringify(leads));
      user("Đã gửi: " + name + " - " + phone);
      const text = encodeURIComponent("KHÁCH MỚI từ web sonnano.fampanai.com\nTên: " + name + "\nSĐT: " + phone + "\nNhu cầu: " + (need || "tư vấn sơn"));
      const zaloUrl = ZALO + "?text=" + text;
      window.open(zaloUrl, "_blank");
      bot("Cảm ơn <b>" + name + "</b>! Mình đã mở Zalo với tin nhắn soạn sẵn — bạn bấm <b>Gửi</b> là Mr QUYẾT (" + PHONE + ") nhận được thông tin ngay. Nếu Zalo chưa tự mở, bấm nút bên dưới:<br><br><a href='" + zaloUrl + "' target='_blank' style='display:inline-block;background:#0068ff;color:#fff;padding:10px 22px;border-radius:20px;text-decoration:none'>Gửi qua Zalo Mr QUYẾT " + PHONE + "</a>");
    };
  }

  function autoReply(t) {
    const s = t.toLowerCase();
    const has = (...ws) => ws.some((w) => s.includes(w));
    if (has("giá", "bao nhiêu", "báo giá")) return "Giá bán lẻ & đại lý vui lòng nhắn Zalo Mr QUYẾT <a href='" + ZALO + "' target='_blank'>" + PHONE + "</a> để được báo giá tốt nhất ạ. Trên web mình không niêm yết giá.";
    if (has("nano lux", "nanolux")) return "Sơn <b>NANO LUX</b>: H100–H700 (nội thất), T100–T300 (ngoại thất), T800 (nhũ đồng cao cấp), K1000/K2000 (lót kháng kiềm), K3000/K4000 (chống thấm), CLEAR (phủ bóng giả đá/giả gỗ). Bạn cần dòng nào để mình gợi ý?";
    if (has("nano x", "nanox")) return "Sơn <b>NANO X</b>: N100–N700 (nội thất), T100–T300 (ngoại thất), K1000/K2000 (lót kháng kiềm), K3000/K4000 + chống thấm sàn Nano hệ cao su, CLEAR (phủ bóng giả đá/giả gỗ). Bạn cần dòng nào để mình gợi ý?";
    if (has("chống thấm", "thấm", "dột")) return "Chống thấm PAGO: PC-11A (trộn xi măng), PG-55 (chống thấm màu), PU-66 (co giãn 800%), PS-88 (sàn vệ sinh, bể bơi), PN-99 (chống thấm ngược). Bạn cần xử lý khu vực nào để mình gợi ý đúng loại?";
    if (has("trong nhà", "nội thất", "phòng khách", "phòng ngủ")) return "Sơn trong nhà nổi bật: 400PG (5 in 1), 500PG (7 in 1), 600PG (9 in 1 chống tia UV), 900PG (siêu trắng trần). Nhớ sơn lót PA 150 / PA 1000 trước cho bền màu nhé.";
    if (has("ngoài trời", "ngoại thất", "mặt tiền")) return "Sơn ngoài trời: T111A (kinh tế), T222A (men sứ), T300A (Nano 7 in 1), T400A (Nano 9 in 1). Dùng kèm lót kháng kiềm GO 250 / GO 2000.";
    if (has("lót", "kiềm", "kháng kiềm")) return "Sơn lót kháng kiềm: PA 150 & PA 1000 (nội thất), GO 250 & GO 2000 (ngoại thất, chống kiềm hóa).";
    if (has("địa chỉ", "ở đâu", "công ty", "nhà máy")) return "<b>" + PAGO_CONTACT.company + "</b><br>" + PAGO_CONTACT.factory + ".";
    if (has("zalo", "liên hệ", "mua", "đặt", "sđt", "sdt", "điện thoại", "hotline")) return "Bạn liên hệ/Zalo: <a href='" + ZALO + "' target='_blank'><b>" + PHONE + "</b></a> (tất cả đơn hàng & báo giá qua số này (Mr QUYẾT) ạ).";
    if (has("chào", "hello", "hi", "xin chào")) return "Chào bạn! Mình có thể tư vấn giá, sơn trong nhà, ngoài trời, chống thấm, sơn lót và địa chỉ công ty. Bạn cần gì ạ?";
    if (has("cảm ơn", "thanks", "thank")) return "Dạ không có gì! Cần gì thêm bạn cứ nhắn, hoặc Zalo Mr QUYẾT " + PHONE + " nhé.";
    return "Mình chưa hiểu rõ ý bạn. Bạn bấm câu hỏi nhanh bên dưới, hoặc nhắn Zalo Mr QUYẾT <a href='" + ZALO + "' target='_blank'>" + PHONE + "</a> để được tư vấn trực tiếp nhé.";
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    const t = input.value.trim();
    if (!t) return;
    user(t); input.value = "";
    setTimeout(() => bot(autoReply(t)), 400);
  };
})();
