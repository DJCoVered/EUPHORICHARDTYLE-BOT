
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use estos comandos sin el prefijo_

▢ Si tienes más  audios   
envíame por t.me/fgsupp_bot el *audio + comando* con en el que responderá

┌─⊷ *AUDIOS* 

*<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*
° 🔥⿻⃨⃟⃗❤ _Bot_
° 🔥⿻⃨⃟⃗❤ _Buenos días_
° 🔥⿻⃨⃟⃗❤ _Buenas tardes_ 
° 🔥⿻⃨⃟⃗❤ _Buenas noches_
° 🔥⿻⃨⃟⃗❤ _Fino señores_
° 🔥⿻⃨⃟⃗❤ _Sad_
° 🔥⿻⃨⃟⃗❤ _Quien es tu sempai botsito 7w7_
° 🔥⿻⃨⃟⃗❤ _Te diagnostico con gay_
° 🔥⿻⃨⃟⃗❤ _A nadie le importa_
° 🔥⿻⃨⃟⃗❤ _Fiesta del admin_
° 🔥⿻⃨⃟⃗❤ _Fiesta del administrador_ 
° 🔥⿻⃨⃟⃗❤ _Vivan los novios_
° 🔥⿻⃨⃟⃗❤ _Feliz cumpleaños_
° 🔥⿻⃨⃟⃗❤ _Noche de paz_
° 🔥⿻⃨⃟⃗❤ _Buenos dias_
° 🔥⿻⃨⃟⃗❤ _Buenos tardes_
° 🔥⿻⃨⃟⃗❤ _Buenos noches_
° 🔥⿻⃨⃟⃗❤ _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _tio que rico_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Epico_
° ඬ⃟🔊 _Shitpost_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
°🔥⿻⃨⃟⃗❤ _No tio ben_
└──────────────
`

    let pp = './src/fg_logo.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
