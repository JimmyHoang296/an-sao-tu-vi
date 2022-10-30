const moonDate = {
  mH: "",
  mD: "",
  mM: "",
  mY: "",
};
const laSo = {
  db1: {
    Cung: "Tý",
  },
  db2: {
    Cung: "Sửu",
  },
  db3: {
    Cung: "Dần",
  },
  db4: {
    Cung: "Mão",
  },
  db5: {
    Cung: "Thìn",
  },
  db6: {
    Cung: "Tỵ",
  },
  db7: {
    Cung: "Ngọ",
  },
  db8: {
    Cung: "Mùi",
  },
  db9: {
    Cung: "Thân",
  },
  db10: {
    Cung: "Dậu",
  },
  db11: {
    Cung: "Tuất",
  },
  db12: {
    Cung: "Hợi",
  },
  tb: {},
};
const anCung = [
  "Mệnh",
  "Phụ Mẫu",
  "Phúc Đức",
  "Điền Trạch",
  "Quan Lộc",
  "Nô Bộc",
  "Thiên Di",
  "Tật Ách",
  "Tài Bạch",
  "Tử Tức",
  "Phối Tử",
  "Huynh Đệ",
];
function anMenhThan(thangSinh, gioSinh) {
  const cungMenh =
    3 + thangSinh - gioSinh > 0
      ? 3 + thangSinh - gioSinh
      : 12 - 3 - thangSinh + gioSinh;
  const cungThan = 3 + thangSinh - 1 + gioSinh - 1;
  for (let i = 0; i < 12; i++) {
    const dbAn = cungMenh + i < 13 ? cungMenh + i : cungMenh + i - 12;
    laSo[`db${dbAn}`]["anCung"] = anCung[i];
  }
  const dbAnThan = cungThan < 13 ? cungThan : cungThan - 12;
  laSo[`db${dbAnThan}`]["anCung"] += " (Thân)";
}
async function getJsonData(url) {
  let res = await fetch(url);
  return res.json();
}

async function anTuvi(namSinh, ngaySinh) {
  const cuc = await fetch("./src/ban_menh.json")
                    .then(res => res.json())
                    .then(data => data[namSinh]["Cục"])
  const data = await fetch("./src/an_tu_vi.json")
                    .then(res=> res.json())

  const anCungTuVi = data[cuc][ngaySinh];
  const dbTuVi = anCungTuVi.slice(2);
  const dbLiemTrinh = anSaoTheoSau(dbTuVi, 4)
  const dbThienDong = anSaoTheoSau(dbTuVi, 7)
  const dbVuKhuc = anSaoTheoSau(dbTuVi, 8)
  const dbThaiDuong = anSaoTheoSau(dbTuVi, 9)
  const dbThienCo = anSaoTheoSau(dbTuVi, 11)

  anChinhTinh(dbTuVi, "Tử Vi");
  anChinhTinh(dbLiemTrinh, "Liêm Trinh");
  anChinhTinh(dbThienDong, "Thiên Đồng");
  anChinhTinh(dbVuKhuc, "Vũ Khúc");
  anChinhTinh(dbThaiDuong, "Thái Dương");
  anChinhTinh(dbThienCo, "Thiên Cơ");
}

function anThienPhu() {
  const anCungTuVi = Object.keys(laSo).find((db) =>
    laSo[db]["chinhTinh"] == undefined
      ? false
      : laSo[db]["chinhTinh"].includes("Tử Vi")
  );
  const dbTuVi = anCungTuVi.slice(2);
  const dbThienPhu = 6 - dbTuVi > 0 ? 6 - dbTuVi : 18 - dbTuVi * 1;
  const dbThaiAm = anSaoTheoSau(dbThienPhu, 1)
  const dbThamLang = anSaoTheoSau(dbThienPhu, 2)
  const dbCuMon = anSaoTheoSau(dbThienPhu, 3)
  const dbThienTuong = anSaoTheoSau(dbThienPhu, 4)
  const dbThienLuong =  anSaoTheoSau(dbThienPhu, 5)
  const dbThatSat =anSaoTheoSau(dbThienPhu, 6)
  const dbPhaQuan = anSaoTheoSau(dbThienPhu, 10)
    
  anChinhTinh(dbThienPhu, "Thiên Phủ");
  anChinhTinh(dbThaiAm, "Thái Âm");
  anChinhTinh(dbThamLang, "Tham Lang");
  anChinhTinh(dbCuMon, "Cự Môn");
  anChinhTinh(dbThienTuong, "Thiên Tướng");
  anChinhTinh(dbThienLuong, "Thiên Lương");
  anChinhTinh(dbThatSat, "Thất Sát");
  anChinhTinh(dbPhaQuan, "Phá Quân");
}

function anThaiTue(namSinh) {
  const thienCan = namSinh.split(" ")[1];
  const anCungThaiTue = Object.keys(laSo).find(
    (db) => laSo[db]["Cung"] == thienCan
  );
  const dbThaiTue = anCungThaiTue.slice(2);
  const dbThieuDuong = anSaoTheoSau(dbThaiTue,1)
  const dbTangMon = anSaoTheoSau(dbThaiTue,2)
  const dbThieuAm = anSaoTheoSau(dbThaiTue,3)
  const dbQuanPhu = anSaoTheoSau(dbThaiTue,4)
  const dbTuPhu = anSaoTheoSau(dbThaiTue,5)
  const dbTuePha = anSaoTheoSau(dbThaiTue,6)
  const dbLongDuc = anSaoTheoSau(dbThaiTue,7)
  const dbBachHo = anSaoTheoSau(dbThaiTue,8)
  const dbPhucDuc = anSaoTheoSau(dbThaiTue,9)
  const dbDieuKhach = anSaoTheoSau(dbThaiTue,10)
  const dbTrucPhu = anSaoTheoSau(dbThaiTue,11)

  anPhuTinh(dbThaiTue,"Thái Tuế")
  anPhuTinh(dbThieuDuong,"Thiếu Dương")
  anPhuTinh(dbThieuDuong,"Thiên Không")
  anPhuTinh(dbTangMon,"Tang Môn")
  anPhuTinh(dbThieuAm,"Thiếu Âm")
  anPhuTinh(dbQuanPhu,"Quan Phù")
  anPhuTinh(dbTuPhu,"Tử Phù")
  anPhuTinh(dbTuePha,"Tuế Phá")
  anPhuTinh(dbLongDuc,"Long Đức")
  anPhuTinh(dbBachHo,"Bạch Hổ")
  anPhuTinh(dbPhucDuc,"Phúc Đức")
  anPhuTinh(dbDieuKhach,"Điếu Khách")
  anPhuTinh(dbTrucPhu,"Trực Phù")  
}

async function anLocTon ( namSinh, gioiTinh) {
  const isNghich = gioiTinh=="Dương Nam"|| gioiTinh=="Âm Nữ" ? false: true
  const thienCan = namSinh.split(" ")[0]
  const dataAnLocTon = await fetch("./src/an_phu_tinh.json").then(res => res.json()).then(data => data["Lộc Tồn"]);

  const anCungLocTon = Object.keys(laSo).find(
    (db) => laSo[db]["Cung"] == dataAnLocTon[thienCan]
  );
  const dbLocTon = anCungLocTon.slice(2);
  const dbLucSy = anSaoTheoSau(dbLocTon,1,isNghich)
  const dbThanhLong = anSaoTheoSau(dbLocTon,2,isNghich)
  const dbTieuHao = anSaoTheoSau(dbLocTon,3,isNghich)
  const dbTuongQuan = anSaoTheoSau(dbLocTon,4,isNghich)
  const dbTauThu = anSaoTheoSau(dbLocTon,5,isNghich)
  const dbPhiLiem = anSaoTheoSau(dbLocTon,6,isNghich)
  const dbHyThan = anSaoTheoSau(dbLocTon,7,isNghich)
  const dbBenhPhu = anSaoTheoSau(dbLocTon,8,isNghich)
  const dbDaiHao = anSaoTheoSau(dbLocTon,9,isNghich)
  const dbPhucBinh = anSaoTheoSau(dbLocTon,10,isNghich)

  anPhuTinh(dbLocTon,"Lộc Tồn")
  anPhuTinh(dbLocTon,"Bác Sỹ")
  anPhuTinh(dbLucSy,"Lực Sỹ")
  anPhuTinh(dbThanhLong,"Thanh Long")
  anPhuTinh(dbTieuHao,"Tiểu Hao")
  anPhuTinh(dbTuongQuan,"Tướng Quân")
  anPhuTinh(dbTauThu,"Tấu Thư")
  anPhuTinh(dbPhiLiem,"Phi Liêm")
  anPhuTinh(dbHyThan,"Hỷ Thần")
  anPhuTinh(dbBenhPhu,"Bệnh Phù")
  anPhuTinh(dbDaiHao,"Đại Hao")
  anPhuTinh(dbPhucBinh,"Phục Binh")

}

async function anVongTrangSinh (namSinh, gioiTinh){
  const isNghich = gioiTinh=="Dương Nam"|| gioiTinh=="Âm Nữ" ? false: true
  const cuc = await fetch("./src/ban_menh.json")
                    .then(res => res.json())
                    .then(data => data[namSinh]["Cục"])
                    .then(cuc => cuc.split(" ")[0])
  const dataAnTrangSinh = await fetch("./src/an_phu_tinh.json").then(res => res.json()).then(data => data["Tràng Sinh"]);
  const anCungTrangSinh = Object.keys(laSo).find(
    (db) => laSo[db]["Cung"] == dataAnTrangSinh[cuc])
  
  const dbTrangSinh = anCungTrangSinh.slice(2)
  const dbMocDuc = anSaoTheoSau(dbTrangSinh, 1, isNghich)
  const dbQuanDoi = anSaoTheoSau(dbTrangSinh, 2, isNghich)
  const dbLamQuan = anSaoTheoSau(dbTrangSinh, 3, isNghich)
  const dbDeVuong = anSaoTheoSau(dbTrangSinh, 4, isNghich)
  const dbSuy = anSaoTheoSau(dbTrangSinh, 5, isNghich)
  const dbBenh = anSaoTheoSau(dbTrangSinh, 6, isNghich)
  const dbTu = anSaoTheoSau(dbTrangSinh, 7, isNghich)
  const dbMo = anSaoTheoSau(dbTrangSinh, 8, isNghich)
  const dbTuyet = anSaoTheoSau(dbTrangSinh, 9, isNghich)
  const dbThai = anSaoTheoSau(dbTrangSinh, 10, isNghich)
  const dbDuong = anSaoTheoSau(dbTrangSinh, 11, isNghich)
    
  anTrangSinh(dbTrangSinh,"Tràng Sinh")
  anTrangSinh(dbMocDuc,"Mộc Dục")
  anTrangSinh(dbQuanDoi,"Quan Đới")
  anTrangSinh(dbLamQuan,"Lâm Quan")
  anTrangSinh(dbDeVuong,"Đế Vương")
  anTrangSinh(dbSuy,"Suy")
  anTrangSinh(dbBenh,"Bệnh")
  anTrangSinh(dbTu,"Tử")
  anTrangSinh(dbMo,"Mộ")
  anTrangSinh(dbTuyet,"Tuyệt")
  anTrangSinh(dbThai,"Thai")
  anTrangSinh(dbDuong,"Dưỡng")

}

async function anLucSat(namSinh,gioSinh, gioiTinh){
  const isNghich = gioiTinh=="Dương Nam"|| gioiTinh=="Âm Nữ" ? false: true
  const thienCan = namSinh.split(" ")[1]
  const dbLocTon = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Lộc Tồn")).slice(2)
  const dbKinhDuong = anSaoTheoSau(dbLocTon,1)
  const dbDaLa = anSaoTheoSau(dbLocTon,1, true)
  const dbDiaKhong = anSaoTheoSau(12, gioSinh -1)
  const dbDiaKiep = anSaoTheoSau(12, gioSinh -1, true)

  const khoiCungHoaTinh = await fetch("./src/an_phu_tinh.json").then(res => res.json()).then(data => data["Hỏa Tinh"])
  const dbKhoiCungHoaTinh = Object.keys(laSo).find(db => laSo[db]["Cung"]==khoiCungHoaTinh[thienCan])
  const dbHoaTinh = anSaoTheoSau(dbKhoiCungHoaTinh.slice(2),gioSinh-1, isNghich)
  const khoiCungLinhTinh = await fetch("./src/an_phu_tinh.json").then(res => res.json()).then(data => data["Linh Tinh"])
  const dbKhoiCungLinhTinh = Object.keys(laSo).find(db => laSo[db]["Cung"]==khoiCungLinhTinh[thienCan])
  const dbLinhTinh = anSaoTheoSau(dbKhoiCungLinhTinh.slice(2),gioSinh-1, !isNghich)

  anPhuTinh(dbKinhDuong,"Kình Dương")
  anPhuTinh(dbDaLa,"Đà La")
  anPhuTinh(dbDiaKhong,"Địa Không")
  anPhuTinh(dbDiaKiep,"Địa Kiếp")
  anPhuTinh(dbHoaTinh,"Hỏa Tinh")
  anPhuTinh(dbLinhTinh,"Linh Tinh")
}

function anTaHuu(thangSinh){
  const dbTaPhu = anSaoTheoSau(5, thangSinh-1)
  const dbHuuBat = anSaoTheoSau(11, thangSinh-1, true)

  anPhuTinh (dbTaPhu, "Tả Phụ")
  anPhuTinh (dbHuuBat, "Hữu Bật")
}

function anXuongKhuc(gioSinh){
  const dbVanXuong = anSaoTheoSau(11, gioSinh -1, true)
  const dbVanKhuc = anSaoTheoSau(5, gioSinh-1)

  anPhuTinh(dbVanXuong,"Văn Xương")
  anPhuTinh(dbVanKhuc,"Văn Khúc")
}

function anLongPhuong(namSinh){
  const diaChi = namSinh.split(" ")[1]
  const cach = Object.keys(laSo).find(db => laSo[db]["Cung"]==diaChi).slice(2)
  const dbLongTri = anSaoTheoSau(5, cach - 1)
  const dbPhuongCac = anSaoTheoSau(11, cach-1, true)

  anPhuTinh(dbLongTri, "Long Trì")
  anPhuTinh(dbPhuongCac, "Phượng Các")
}

async function anKhoiViet(namSinh) {
  const thienCan = namSinh.split(" ")[0]
  const dataAnKhoiViet = await fetch("./src/an_phu_tinh.json").then(res => res.json())
  const anCungThienKhoi = dataAnKhoiViet["Thiên Khôi"][thienCan]
  const dbThienKhoi = Object.keys(laSo).find(db => laSo[db]["Cung"]==anCungThienKhoi).slice(2)
  const anCungThienViet = dataAnKhoiViet["Thiên Việt"][thienCan]
  const dbThienViet = Object.keys(laSo).find(db => laSo[db]["Cung"]==anCungThienViet).slice(2)

  anPhuTinh(dbThienKhoi, "Thiên Khôi")
  anPhuTinh(dbThienViet, "Thiên Việt")
}

function anKhocHu(namSinh){
  const diaChi = namSinh.split(" ")[1]
  const cach = Object.keys(laSo).find(db => laSo[db]["Cung"]==diaChi).slice(2)
  const dbThienHu = anSaoTheoSau(7, cach - 1)
  const dbThienKhoc = anSaoTheoSau(7, cach-1, true)

  anPhuTinh(dbThienHu, "Thiên Hư")
  anPhuTinh(dbThienKhoc, "Thiên Khốc")
}

function anThaiToa(ngaySinh){
  const cach = ngaySinh%12
  const dbTaPhu = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Tả Phụ")).slice(2)
  const dbHuuBat = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Hữu Bật")).slice(2)

  const dbTamThai = anSaoTheoSau(dbTaPhu, cach-1)
  const dbBatToa = anSaoTheoSau(dbHuuBat,cach-1, true)

  anPhuTinh(dbTamThai,"Tam Thai")
  anPhuTinh(dbBatToa, "Bát Tọa")
}

function anQuangQuy(ngaySinh){
  const cach = ngaySinh%12
  const dbVanXuong = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Văn Xương")).slice(2)
  const dbVanKhuc = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Văn Khúc")).slice(2)

  const dbAnQuang = anSaoTheoSau(dbVanXuong, cach-2)
  const dbThienQuy = anSaoTheoSau(dbVanKhuc,cach-2, true)

  anPhuTinh(dbAnQuang,"Ân Quang")
  anPhuTinh(dbThienQuy, "Thiên Quý")
}

function anThienNguyetDuc (namSinh){

  const diaChi = namSinh.split(" ")[1]
  const cach = Object.keys(laSo).find(db => laSo[db]["Cung"]==diaChi).slice(2)
  const dbThienDuc = anSaoTheoSau(10, cach - 1)
  const dbNguyetDuc = anSaoTheoSau(6, cach-1)

  anPhuTinh(dbThienDuc, "Thiên Đức")
  anPhuTinh(dbNguyetDuc, "Nguyệt Đức")
}

function anHinhRieuY (thangSinh){
  const dbThienHinh = anSaoTheoSau(10, thangSinh -1)
  const dbThienRieu = anSaoTheoSau(2, thangSinh -1)
  const dbThienY = anSaoTheoSau(2,thangSinh-1)

  anPhuTinh (dbThienHinh,"Thiên Hình")
  anPhuTinh (dbThienRieu,"Thiên Riêu")
  anPhuTinh (dbThienY,"Thiên Y")
}

function anHongHy (namSinh){

  const diaChi = namSinh.split(" ")[1]
  const cach = Object.keys(laSo).find(db => laSo[db]["Cung"]==diaChi).slice(2)
  const dbHongLoan = anSaoTheoSau(4, cach - 1, true)
  const dbThienHy = anSaoTheoSau(dbHongLoan, 6)

  anPhuTinh(dbHongLoan, "Hồng Loan")
  anPhuTinh(dbThienHy, "Thiên Hỷ")
}

function anAnPhu (){
  const dbLocTon = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Lộc Tồn")).slice(2)
  const dbQuocAn = anSaoTheoSau(dbLocTon,8)
  const dbDuongPhu = anSaoTheoSau(dbLocTon,7,true)

  anPhuTinh(dbQuocAn, "Quốc Ấn")
  anPhuTinh(dbDuongPhu, "Đường Phù")
}

function anThienDiaGiaiThan (thangSinh){
  const dbThienGiai = anSaoTheoSau(9, thangSinh -1)
  const dbDiaGiai = anSaoTheoSau(8, thangSinh -1)
  const dbGiaiThan = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Phượng Các")).slice(2)

  anPhuTinh(dbThienGiai, "Thiên Giải")
  anPhuTinh(dbDiaGiai, "Địa Giải")
  anPhuTinh(dbGiaiThan, "Giải Thần")
}

function anThaiCao (thangSinh){
  const dbVanKhuc = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Văn Khúc")).slice(2)
  const dbThaiPhu = anSaoTheoSau(dbVanKhuc, 2)
  const dbPhongCao = anSaoTheoSau(dbVanKhuc, 2, true)

  anPhuTinh(dbThaiPhu, "Thai Phụ")
  anPhuTinh(dbPhongCao, "Phong Cáo")
}

function anTaiTho (namSinh){
  const diaChi = namSinh.split(" ")[1]
  const cach = Object.keys(laSo).find(db => laSo[db]["Cung"]==diaChi).slice(2)
  const dbMenh = Object.keys(laSo).find(db => laSo[db]["anCung"].includes("Mệnh")).slice(2)
  const dbThan = Object.keys(laSo).find(db => laSo[db]["anCung"].includes("Thân")).slice(2)
  const dbThienTai = anSaoTheoSau(dbMenh,cach-1)
  const dbThienTho = anSaoTheoSau(dbThan, cach-1)

  anPhuTinh(dbThienTai,"Thiên Tài")
  anPhuTinh(dbThienTho,"Thiên Thọ")
}

function anThuongSu (){
  const dbThienThuong = Object.keys(laSo).find(db => laSo[db]["anCung"].includes("Nô Bộc")).slice(2)
  const dbThienSu = Object.keys(laSo).find(db => laSo[db]["anCung"].includes("Tật Ách")).slice(2)

  anPhuTinh(dbThienThuong, "Thiên Thương")
  anPhuTinh(dbThienSu, "Thiên Sứ")
}

function anLaVong(){
  const dbThienLa = Object.keys(laSo).find(db => laSo[db]["Cung"] =="Thìn").slice(2)
  const dbDiaVong = Object.keys(laSo).find(db => laSo[db]["Cung"] =="Tuất").slice(2)

  anPhuTinh(dbThienLa,"Thiên La")
  anPhuTinh(dbDiaVong,"Địa Võng")
}

async function anTuHoa (namSinh) {
  const thienCan = namSinh.split(" ")[0]
  const dataAnTuHoa = await fetch("./src/an_phu_tinh.json").then(res => res.json())
  const anTinhLoc = dataAnTuHoa["Hóa Lộc"][thienCan]
  const dbHoaLoc = Object.keys(laSo).find(db => laSo[db]["chinhTinh"].includes(anTinhLoc)|| laSo[db]["phuTinh"].includes(anTinhLoc)).slice(2)
  const anTinhQuyen = dataAnTuHoa["Hóa Quyền"][thienCan]
  const dbHoaQuyen = Object.keys(laSo).find(db => laSo[db]["chinhTinh"].includes(anTinhQuyen)|| laSo[db]["phuTinh"].includes(anTinhQuyen)).slice(2)
  const anTinhKhoa = dataAnTuHoa["Hóa Khoa"][thienCan]
  const dbHoaKhoa = Object.keys(laSo).find(db => laSo[db]["chinhTinh"].includes(anTinhKhoa)|| laSo[db]["phuTinh"].includes(anTinhKhoa)).slice(2)
  const anTinhKy = dataAnTuHoa["Hóa Kỵ"][thienCan]
  const dbHoaKy = Object.keys(laSo).find(db => laSo[db]["chinhTinh"].includes(anTinhKy)|| laSo[db]["phuTinh"].includes(anTinhKy)).slice(2)

  anPhuTinh(dbHoaLoc,"Hóa Lộc")
  anPhuTinh(dbHoaQuyen,"Hóa Quyền")
  anPhuTinh(dbHoaKhoa,"Hóa Khoa")
  anPhuTinh(dbHoaKy,"Hóa Kỵ")
}

async function anQuanPhuc (namSinh){
  const thienCan = namSinh.split(" ")[0]
  const data = await fetch("./src/an_phu_tinh.json").then(res => res.json())
  const dbThienQuan = Object.keys(laSo) .find(db => laSo[db]["Cung"]== data["Thiên Quan"][thienCan]).slice(2)
  const dbThienPhuc = Object.keys(laSo) .find(db => laSo[db]["Cung"]== data["Thiên Phúc"][thienCan]).slice(2)

  anPhuTinh(dbThienQuan,"Thiên Quan")
  anPhuTinh(dbThienPhuc,"Thiên Phúc")

}
async function anCoQua (namSinh){
  const diaChi = namSinh.split(" ")[1]
  const data = await fetch("./src/an_phu_tinh.json").then(res => res.json())
  const dbCoThan = Object.keys(laSo).find(db => laSo[db]["Cung"] == data["Cô Thần"][diaChi]).slice(2)
  const dbQuaTu = Object.keys(laSo).find(db => laSo[db]["Cung"] == data["Quả Tú"][diaChi]).slice(2)

  anPhuTinh(dbCoThan,"Cô Thần")
  anPhuTinh(dbQuaTu,"Quả Tú")
}

async function anHoaMaSatToaiCaiHaTru (namSinh){
  const thienCan = namSinh.split(" ")[0]
  const diaChi = namSinh.split(" ")[1]
  const data = await fetch("./src/an_phu_tinh.json").then(res => res.json())
  const dbDaoHoa = Object.keys(laSo) .find(db => laSo[db]["Cung"] == data["Đào Hoa"][diaChi]).slice(2)
  const dbThienMa = Object.keys(laSo) .find(db => laSo[db]["Cung"] == data["Thiên Mã"][diaChi]).slice(2)
  const dbKiepSat = Object.keys(laSo) .find(db => laSo[db]["Cung"] == data["Kiếp Sát"][diaChi]).slice(2)
  const dbPhaToai = Object.keys(laSo) .find(db => laSo[db]["Cung"] == data["Phá Toái"][diaChi]).slice(2)
  const dbHoaCai = Object.keys(laSo) .find(db => laSo[db]["Cung"] == data["Hoa Cái"][diaChi]).slice(2)
  const dbLuuHa = Object.keys(laSo) .find(db => laSo[db]["Cung"] == data["Lưu Hà"][thienCan]).slice(2)
  const dbThienTru = Object.keys(laSo) .find(db => laSo[db]["Cung"] == data["Thiên Trù"][thienCan]).slice(2)

  anPhuTinh(dbDaoHoa, "Đào Hoa")
  anPhuTinh(dbThienMa, "Thiên Mã")
  anPhuTinh(dbKiepSat, "Kiếp Sát")
  anPhuTinh(dbPhaToai, "Phá Toái")
  anPhuTinh(dbHoaCai, "Hoa Cái")
  anPhuTinh(dbLuuHa, "Lưu Hà")
  anPhuTinh(dbThienTru, "Thiên Trù")
}

function anDauQuan (thangSinh, gioSinh){
  const dbThaiTue = Object.keys(laSo).find(db => laSo[db]["phuTinh"].includes("Thái Tuế")).slice(2)
  const cach = gioSinh - thangSinh
  const dbDauQuan = anSaoTheoSau(dbThaiTue, cach)

  anPhuTinh(dbDauQuan, "Đẩu Quân")
}

function anChinhTinh(db, chinhTinh) {
  laSo[`db${db}`]["chinhTinh"] =
    laSo[`db${db}`]["chinhTinh"] == undefined
      ? [chinhTinh]
      : [...laSo[`db${db}`]["chinhTinh"], chinhTinh];
}
function anPhuTinh(db, phuTinh) {
  laSo[`db${db}`]["phuTinh"] =
    laSo[`db${db}`]["phuTinh"] == undefined
      ? [phuTinh]
      : [...laSo[`db${db}`]["phuTinh"], phuTinh];
}
function anTrangSinh(db, trangSinh) {
  laSo[`db${db}`]["trangSinh"] =
    laSo[`db${db}`]["trangSinh"] == undefined
      ? [trangSinh]
      : [...laSo[`db${db}`]["trangSinh"], trangSinh];
}

function anSaoTheoSau (dbSaoGoc, khoangCach, isNghich = false){
  if (isNghich){
    return dbSaoGoc * 1 - khoangCach < 1 ? dbSaoGoc * 1 - khoangCach + 12 : dbSaoGoc * 1 - khoangCach
  }else {
    return dbSaoGoc * 1 + khoangCach > 12 ? dbSaoGoc * 1 + khoangCach - 12 : dbSaoGoc * 1 + khoangCach
  }

}
async function anLaSo() {
  const [gioiTinh, namSinh, thangSinh, ngaySinh, gioSinh] = ["Nam", "Tân Mùi", 5, 18, 1];

  anMenhThan(thangSinh, gioSinh);
  await anTuvi(namSinh, ngaySinh);
  anThienPhu();
  anThaiTue(namSinh);
  await anLocTon(namSinh, gioiTinh)
  await anVongTrangSinh(namSinh)
  await anLucSat(namSinh,gioSinh, gioiTinh)
  anTaHuu(thangSinh)
  anXuongKhuc(gioSinh)
  anLongPhuong(namSinh)
  await anKhoiViet(namSinh)
  anKhocHu(namSinh)
  anThaiToa(ngaySinh)
  anQuangQuy(ngaySinh)
  anThienNguyetDuc(namSinh)
  anHinhRieuY(thangSinh)
  anHongHy(namSinh)
  anAnPhu()
  anThienDiaGiaiThan(thangSinh)
  anThaiCao (thangSinh)
  anTaiTho (namSinh)
  anThuongSu ()
  anLaVong()
  await anTuHoa (namSinh)
  await anQuanPhuc(namSinh)
  await anCoQua(namSinh)
  await anHoaMaSatToaiCaiHaTru(namSinh)
  anDauQuan(thangSinh, gioSinh)
  renderLaSo();
}

function renderLaSo() {
  const laSoEle = document.querySelector(".laso");
  for (const key in laSo) {
    let item = laSoEle.querySelector(`#${key}`);
    for (const property in laSo[key]) {
      item.innerHTML =
        item.innerHTML +
        `<div class = ${property}>${renderItem(laSo[key][property])}</div>`;
    }
  }
}

function renderItem(item){
  if(Array.isArray(item)){
    return item.reduce((prev, i)=> prev + `<p> ${i}</p>`)
  }else{
    return item.toString()
  }
}

anLaSo();
