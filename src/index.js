import "./styles.css";

const moonDate = {
  mH: "",
  mD: "",
  mM: "",
  mY: ""
};
const laSo = {
  db1: {
    cung: "Tý"
  },
  db2: {
    cung: "Sửu"
  },
  db3: {
    cung: "Dần"
  },
  db4: {
    cung: "Mão"
  },
  db5: {
    cung: "Thìn"
  },
  db6: {
    cung: "Tỵ"
  },
  db7: {
    cung: "Ngọ"
  },
  db8: {
    cung: "Mùi"
  },
  db9: {
    cung: "Thân"
  },
  db10: {
    cung: "Dậu"
  },
  db11: {
    cung: "Tuất"
  },
  db12: {
    cung: "Hợi"
  },
  tb: {}
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
  "Huynh Đệ"
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
    console.log(dbAn);
  }
  const dbAnThan = cungThan < 13 ? cungThan : cungThan - 12;
  laSo[`db${dbAnThan}`]["anCung"] += " (Thân)";
}

function anTuvi(namSinh, ngaySinh) {
  const cuc = fetch('./ban_menh.json')
              .then((response)=> response.json())
              .then((json)=> return json[namsinh])  
}

function anLaSo() {
  anMenhThan(5, 8);
  renderLaSo();
}

function renderLaSo() {
  const laSoEle = document.querySelector(".laso");
  for (const key in laSo) {
    let item = laSoEle.querySelector(`#${key}`);
    for (const property in laSo[key]) {
      item.innerHTML =
        item.innerHTML + `<p>${property}: ${laSo[key][property]}</p>`;
    }
  }
}

anLaSo();
