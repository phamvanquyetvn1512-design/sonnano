/* Dữ liệu sản phẩm sơn PAGO — lấy từ bảng báo giá đính kèm (áp dụng 26/02/2026).
   Cột "pack" = QUY CÁCH BAO BÌ theo bảng giá. Web KHÔNG hiển thị giá — giá liên hệ Zalo 0372569504. */
const PAGO_PRODUCTS = [
  // ===== SƠN TRONG NHÀ =====
  { brand: "PAGO", msp: "668PG", name: "Sơn mịn nội thất cao cấp", en: "Smooth.Int", img: "pago/pago668pg.jpg", cat: "pago", feat: "Độ phủ tốt, bề mặt mịn, màu sắc bền đẹp", pack: "Thùng 18L · Lon 5L" },
  { brand: "PAGO", msp: "200PG", name: "Sơn nội thất lau chùi hiệu quả màu tươi sáng", en: "Easy Clean", img: "pago/pago200pg.jpg", cat: "pago", feat: "Bề mặt mịn, màu tươi sáng, độ che phủ cao", pack: "Thùng 18L · Lon 5L" },
  { brand: "PAGO", msp: "300PG", name: "Sơn bóng mờ nội thất lau chùi hiệu quả màu tươi sáng", en: "Semi Gloss.Int", img: "pago/pago300pg.jpg", cat: "pago", feat: "Bề mặt bóng mờ, độ phủ cao, lau chùi hiệu quả", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "400PG", name: "Sơn bóng nội thất cao cấp 5 in 1", en: "Glossy 5in1", img: "pago/pago400pg.jpg", cat: "pago", feat: "Bóng dịu mát, chịu lau rửa, màng sơn bền màu, dễ thi công", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "500PG", name: "Sơn siêu bóng nội thất cao cấp 7 in 1", en: "Glossy 7in1", img: "pago/pago500pg.jpg", cat: "pago", feat: "Đàn hồi cao, màu tươi sáng ánh ngọc trai, chống bám bụi", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "600PG", name: "Sơn siêu bóng, siêu mượt nội thất cao cấp 9 in 1 chống tia UV", en: "Glossy Nano 9in1", img: "pago/pago600pg.jpg", cat: "pago", feat: "Chống tia UV, bền màu tối ưu, siêu bóng siêu mượt", pack: "Liên hệ Zalo" },
  { brand: "PAGO", msp: "900PG", name: "Sơn siêu trắng trần nội thất cao cấp", en: "Super White", img: "pago/pago900pg.jpg", cat: "pago", feat: "Độ trắng hoàn hảo, chuyên phủ trần nội thất", pack: "Thùng 18L · Lon 5L" },
  // ===== SƠN NGOÀI TRỜI =====
  { brand: "PAGO", msp: "T111A", name: "Sơn mịn ngoại thất màu tươi sáng", en: "Smooth.Ext", img: "pago/t111a.jpg", cat: "pago", feat: "Sơn công trình dân dụng, kinh tế, mặt mịn", pack: "Thùng 18L · Lon 5L" },
  { brand: "PAGO", msp: "T222A", name: "Sơn bóng ngoại thất men sứ cao cấp", en: "Nano Proshield", img: "pago/t222a.jpg", cat: "pago", feat: "Màng sơn bóng, lau rửa tốt, chống thấm, chống nấm mốc", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "T300A", name: "Sơn siêu bóng ngoại thất Nano 7 in 1 cao cấp", en: "Nano 7 IN 1.Ext", img: "pago/t300a.jpg", cat: "pago", feat: "Chống thấm tốt, tự làm sạch, màu tươi sáng ánh ngọc trai", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "T400A", name: "Sơn siêu bóng - siêu mượt ngoại thất Nano 9 in 1", en: "Nano 9 IN 1.Ext", img: "pago/t400a.jpg", cat: "pago", feat: "Chống thấm cực tốt, tự làm sạch, chịu rửa tối đa", pack: "Lon 5L · Hộp 1L" },
  // ===== SƠN LÓT KHÁNG KIỀM =====
  { brand: "PAGO", msp: "PA 150", name: "Sơn lót kháng kiềm nội thất cao cấp", en: "Primer.Int", img: "pago/pa150.jpg", cat: "pago", feat: "Chống kiềm tốt, độ phủ cao, chống rêu mốc", pack: "Thùng 18L · Lon 5L" },
  { brand: "PAGO", msp: "PA 1000", name: "Sơn lót kháng kiềm nội thất cao cấp - chống kiềm hóa", en: "Nano Primer.Int", img: "pago/pa1000.jpg", cat: "pago", feat: "Chống kiềm cực tốt, độ phủ cao, chống rêu mốc", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "GO 250", name: "Sơn lót kháng kiềm ngoại thất cao cấp", en: "Alkaline.Int", img: "pago/go250.jpg", cat: "pago", feat: "Chống kiềm ngoại thất, liên kết cao, độ phủ hoàn hảo", pack: "Liên hệ Zalo" },
  { brand: "PAGO", msp: "GO 2000", name: "Sơn lót kháng kiềm ngoại thất cao cấp - chống kiềm hóa", en: "Nano Alkaline.Int", img: "pago/go2000.jpg", cat: "pago", feat: "Chống kiềm hóa cực tốt, liên kết cao, độ phủ hoàn hảo", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  // ===== SƠN CHỐNG THẤM =====
  { brand: "PAGO", msp: "PC-11A", name: "Sơn chống thấm đa năng trộn xi măng", en: "Watter Froof Cement", img: "pago/pc11a.jpg", cat: "pago", feat: "Trộn xi măng tỷ lệ 1:1 khi thi công, chống thấm cực tốt", pack: "Thùng 18L · Lon 5L" },
  { brand: "PAGO", msp: "PG-55", name: "Sơn chống thấm màu cao cấp", en: "Watter Froof Color", img: "pago/pg55.jpg", cat: "pago", feat: "Chống thấm dẻo, lăn thẳng như sơn màu, màu sắc chân thực", pack: "Thùng 18L · Lon 5L" },
  { brand: "PAGO", msp: "PU-66", name: "Sơn chống thấm PU", en: "Watter Froof PU", img: "pago/pu66.jpg", cat: "pago", feat: "Chống thấm tường đứng, sàn, sân thượng; co giãn 800%", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "PS-88", name: "Sơn chống thấm sàn hệ cao su", en: "Aqua Shield", img: "pago/ps88.jpg", cat: "pago", feat: "Chống thấm sàn vệ sinh, tầng hầm, bể bơi; chống hóa chất", pack: "Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "PN-99", name: "Sơn chống thấm ngược", en: "", img: "pago/pn99.jpg", cat: "pago", feat: "Chống thấm ngược cho tường, tầng hầm", pack: "Liên hệ Zalo" },
  { brand: "PAGO", msp: "CLEAR", name: "Sơn phủ bóng chuyên giả đá - giả gỗ", en: "", img: "pago/clear.jpg", cat: "pago", feat: "Màu sắc đẹp, hiệu ứng thật, bề mặt bóng", pack: "Lon 5L · Hộp 1L" },
  { brand: "PAGO", msp: "NHŨ", name: "Sơn nhũ đồng", en: "", img: "pago/nhu.jpg", cat: "pago", feat: "Sơn nhũ ánh đồng trang trí cao cấp", pack: "Hộp 1L" },
  // ===== SƠN NANO X =====
  { brand: "NANO X", msp: "N100", name: "Sơn mịn nội thất cao cấp", en: "", img: "nanox/n100.jpg", cat: "nano-x", feat: "Độ phủ tốt, bề mặt mịn, màu sắc bền đẹp", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "N200", name: "Sơn mịn nội thất màu tươi sáng", en: "", img: "nanox/n200.jpg", cat: "nano-x", feat: "Bề mặt mịn, màu sắc tươi sáng, độ che phủ cao", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "N300", name: "Sơn lau chùi hiệu quả tươi sáng cao cấp", en: "", img: "nanox/n300.jpg", cat: "nano-x", feat: "Bề mặt danh, độ phủ cao, lau chùi hiệu quả", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "N500", name: "Sơn siêu bóng nội thất cao cấp 7 in 1", en: "", img: "nanox/n500.jpg", cat: "nano-x", feat: "Độ đàn hồi hoàn hảo, màu tươi sáng ánh ngọc trai, chống nấm mốc", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "NANO X", msp: "N700", name: "Sơn siêu trắng trần nội thất cao cấp", en: "", img: "nanox/n700.jpg", cat: "nano-x", feat: "Độ trắng hoàn hảo, chuyên phủ trần nội thất", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "T100", name: "Sơn mịn ngoại thất màu tươi sáng", en: "", img: "nanox/t100.jpg", cat: "nano-x", feat: "Sơn công trình dân dụng, kinh tế, chịu mài mòn", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "T200", name: "Sơn bóng ngoại thất men sứ cao cấp", en: "", img: "nanox/t200.jpg", cat: "nano-x", feat: "Màng sơn bóng, lau rửa tốt, chống thấm, chống nấm mốc", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "NANO X", msp: "T300", name: "Sơn siêu bóng ngoại thất NANO 7 in 1 cao cấp", en: "", img: "nanox/t300.jpg", cat: "nano-x", feat: "Chống thấm tốt, tự làm sạch, màu tươi sáng ánh ngọc trai", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "NANO X", msp: "K1000", name: "Sơn lót kháng kiềm nội thất cao cấp", en: "", img: "nanox/k1000.jpg", cat: "nano-x", feat: "Chống kiềm cực tốt, độ phủ cao, chống rêu mốc", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "K2000", name: "Sơn lót kháng kiềm ngoại thất cao cấp", en: "", img: "nanox/k2000.jpg", cat: "nano-x", feat: "Chống kiềm cực tốt, liên kết cao, độ phủ hoàn hảo", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "K3000", name: "Sơn chống thấm đa năng trộn xi măng", en: "", img: "nanox/k3000.jpg", cat: "nano-x", feat: "Chống thấm cực tốt, trộn xi măng tỷ lệ 1:1 khi thi công", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "K4000", name: "Sơn chống thấm màu cao cấp", en: "", img: "nanox/k4000.jpg", cat: "nano-x", feat: "Chống thấm siêu tốt, lăn thẳng như sơn màu, màu sắc chân thực", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO X", msp: "NANO-CT", name: "Sơn chống thấm sàn Nano hệ cao su", en: "", img: "nanox/chong-tham-san-nano.jpg", cat: "nano-x", feat: "Chống thấm sàn vệ sinh, sân thượng, hệ cao su đàn hồi", pack: "Liên hệ Zalo" },
  { brand: "NANO X", msp: "CLEAR", name: "Sơn phủ bóng chuyên giả đá, giả gỗ", en: "", img: "nanox/clear.jpg", cat: "nano-x", feat: "Màu sắc đẹp, hiệu ứng thật, bề mặt bóng", pack: "Lon 5L · Hộp 1L" },
  // ===== SƠN NANO LUX =====
  { brand: "NANO LUX", msp: "H100", name: "Sơn mịn nội thất cao cấp", en: "", img: "nanolux/h100.jpg", cat: "nano-lux", feat: "Độ phủ tốt, bề mặt mịn, màu sắc bền đẹp", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "H200", name: "Sơn mịn nội thất màu tươi sáng", en: "", img: "nanolux/h200.jpg", cat: "nano-lux", feat: "Bề mặt mịn, màu tươi sáng, độ che phủ cao", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "H300", name: "Sơn lau chùi hiệu quả tươi sáng cao cấp", en: "", img: "nanolux/h300.jpg", cat: "nano-lux", feat: "Bề mặt danh, độ phủ cao, lau chùi hiệu quả", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "H400", name: "Sơn bóng nội thất cao cấp 5 in 1", en: "", img: "nanolux/h400.jpg", cat: "nano-lux", feat: "Bóng dịu mát, chịu lau rửa, màng sơn bền màu", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "NANO LUX", msp: "H500", name: "Sơn siêu bóng nội thất cao cấp 7 in 1", en: "", img: "nanolux/h500.jpg", cat: "nano-lux", feat: "Màu tươi sáng ánh ngọc trai, chống bám bụi", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "NANO LUX", msp: "H700", name: "Sơn siêu trắng trần nội thất cao cấp", en: "", img: "nanolux/h700.jpg", cat: "nano-lux", feat: "Độ trắng hoàn hảo, chuyên phủ trần nội thất", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "T100", name: "Sơn mịn ngoại thất màu tươi sáng", en: "", img: "nanolux/t100.jpg", cat: "nano-lux", feat: "Sơn công trình dân dụng, kinh tế, chịu mài mòn", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "T200", name: "Sơn bóng ngoại thất men sứ cao cấp", en: "", img: "nanolux/t200.jpg", cat: "nano-lux", feat: "Màng sơn bóng, lau rửa tốt, chống thấm, chống nấm mốc", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "NANO LUX", msp: "T300", name: "Sơn siêu bóng ngoại thất NANO 7 in 1 cao cấp", en: "", img: "nanolux/t300.jpg", cat: "nano-lux", feat: "Chống thấm tốt, tự làm sạch, màu tươi sáng ánh ngọc trai", pack: "Thùng 18L · Lon 5L · Hộp 1L" },
  { brand: "NANO LUX", msp: "T800", name: "Sơn nhũ đồng cao cấp", en: "", img: "nanolux/t800.jpg", cat: "nano-lux", feat: "Sơn nhũ ánh đồng trang trí cao cấp", pack: "Hộp 1L" },
  { brand: "NANO LUX", msp: "K1000", name: "Sơn lót kháng kiềm nội thất cao cấp chống kiềm hóa", en: "", img: "nanolux/k1000.jpg", cat: "nano-lux", feat: "Chống kiềm cực tốt, độ phủ cao, chống rêu mốc", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "K2000", name: "Sơn lót kháng kiềm ngoại thất cao cấp chống kiềm hóa", en: "", img: "nanolux/k2000.jpg", cat: "nano-lux", feat: "Chống kiềm cực tốt, liên kết cao, độ phủ hoàn hảo", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "K3000", name: "Sơn chống thấm đa năng trộn xi măng", en: "", img: "nanolux/k3000.jpg", cat: "nano-lux", feat: "Chống thấm cực tốt, trộn xi măng tỷ lệ 1:1 khi thi công", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "K4000", name: "Sơn chống thấm màu cao cấp", en: "", img: "nanolux/k4000.jpg", cat: "nano-lux", feat: "Chống thấm siêu tốt, lăn thẳng như sơn màu, màu sắc chân thực", pack: "Thùng 18L · Lon 5L" },
  { brand: "NANO LUX", msp: "CLEAR", name: "Sơn phủ bóng chuyên giả đá, giả gỗ", en: "", img: "nanolux/clear.jpg", cat: "nano-lux", feat: "Màu sắc đẹp, hiệu ứng thật, bề mặt bóng", pack: "Lon 5L · Hộp 1L" },
];

const PAGO_CATS = [
  { id: "all", label: "Tất cả các loại sơn" },
  { id: "nano-lux", label: "NANO LUX" },
  { id: "nano-x", label: "NANO X" },
  { id: "pago", label: "PAGO" },
];

const PAGO_CONTACT = {
  phone: "0372569504",
  zalo: "https://zalo.me/0372569504",
  company: "CÔNG TY TNHH CÔNG NGHỆ NANO X VIỆT NAM",
  factory: "Nhà máy sản xuất: Vạn Phúc, Thanh Trì, Hà Nội",
};
