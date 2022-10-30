function addCuc() {
    const fs = require('fs');
    const fileName = './src/ban_menh.json'
    const banMenh = require(fileName);
    const anCuc = require('./src/an_cuc.json')

    for(const key in banMenh) {
        
        const [diaChi, thienCan] = key.split(" ")
        const cuc = anCuc[thienCan][diaChi]
        banMenh[key]["Cục"] = cuc

    }

    fs.writeFileSync('./src/ban_menh.json', JSON.stringify(banMenh,null,4))
    // console.log(anCuc)
    // console.log(banMenh)
    // console.log (file["Tân Mùi"])

}

addCuc()