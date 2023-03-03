const fs = require('fs')

global.namabot = "Mahiro Bot Store"
global.namaowner = "Deff"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['628811524907','6283825144098']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo 
Dana :083825144098
Gopay:084825144098

Mau ganti payment? ketik .setpay
`
module.exports.helpMenu = (pushname) =>{
  return `Halo Kak ${pushname}

*「 FITUR BOT 」*

\`\`\`• !owner
• !addsewa [Khusus Owner]
• !delsewa [Khusus Owner]
• !ceksewa [Khusus Owner]
• !listsewa[Khusus Owner]
• !pay
• !setpay
• !list
• !addlist
• !updatelist
• !dellist
• !jeda
• !tambah
• !kurang
• !kali
• !bagi
• !setproses 
• !changeproses 
• !delsetproses
• !setdone
• !changedone
• !delsetdone
• !proses
• !done
• !welcome [Fitur grup]
• !goodbye [Fitur grup]
• !setwelcome [Fitur grup]
• !changewelcome [Fitur grup]
• !delsetwelcome [Fitur grup]
• !setleft [Fitur grup]
• !changeleft [Fitur grup]
• !delsetleft [Fitur grup]
• !antiwame [Fitur grup]
• !antiwame2 [Fitur grup]
• !antilink [Fitur grup]
• !antilink2 [Fitur grup]
• !open [Fitur grup]
• !close [Fitur grup]
• !hidetag [Fitur grup]
\`\`\`

📝 *NOTE*: 
*Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)*
`
}
