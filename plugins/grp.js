const XTroid = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_xtroid');
const axios = require('axios');
const Menu1 = `
γ *πLink pannelπ* γ


β *YouTube*
     y2u.be/mDnJ7q3S3eY

β *Web site*
     xtroid.ml  

β *Blog* 
     tinyurl.com/Bloglink12

β *Book Web*
     cutt.ly/9Qot6w2

β *Telegaram*
    ββ¦β¦β¦ Main Group     β
       t.me/danuma01

    ββ¦β¦β¦ A/L Channel    β
       t.me/alxams
  
    ββ¦β¦β¦ O/L Channel    β
       t.me/olxams

    ββ¦β¦β¦ Bot Channel    β
       t.me/danumabots

    ββ¦β¦β¦ Mod Apps        β
       t.me/danuma

    ββ¦β¦β¦ Film Channel   β
       t.me/films_SL_x

    ββ¦β¦β¦ Play Games     β
       t.me/SLPlaygames

    ββ¦β¦β¦ NXT binners    β
       t.me/nxtbinners

    ββ¦β¦β¦ Cartoon World β
       t.me/SL_Toons
`

const Menu2 = `
γ *πX-Troid Menuπ* γ


β€ *N.G 01*π
chat.whatsapp.com/Jm6pa5tkyz5HwqoMtWLS8z

β€ *N.G 02*π
chat.whatsapp.com/Gu8CaPSCKqCG1EYiladH92

β€ *N.G 03*π
chat.whatsapp.com/Lc3EUv1Bb0rLq3bRTbJBHu

β€ *N.G 04*π
chat.whatsapp.com/HZYNN499UrcLQVz8fGyYUg

β€ *N.G 05*π
chat.whatsapp.com/Lv9LGDw5zHZ8T3jg9gLynF

β€ *N.G 06*π
chat.whatsapp.com/I8LuuciTGsDIKB7GTchDt6

β€ *N.G 07*π
chat.whatsapp.com/H5mj9Y09y2f0DCeW2YtJTo

_Please join only one group_
`
const Menu3 =`
β§ ππππππ / β§, [03.09.21 12:22]
γ *πͺWhatsApp Menuπͺ* γ


β’βββΒ»Β» *W.G 01*Β«Β«ββββ’
chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM

β’βββΒ»Β» *W.G 02*Β«Β«ββββ’
chat.whatsapp.com/K5niEonkgRiGqnkAxmdlVZ

β’βββΒ»Β» *W.G 03*Β«Β«ββββ’
chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m

β’βββΒ»Β» *W.G 04*Β«Β«ββββ’
chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a

β’βββΒ»Β» *W.G 05*Β«Β«ββββ’
chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K

β’βββΒ»Β» *W.G 06*Β«Β«ββββ’
chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0

β’βββΒ»Β» *W.G 07*Β«Β«ββββ’
chat.whatsapp.com/Fa0huMO87L77YzpHGYer6r

β’βββΒ»Β» *W.G 08*Β«Β«ββββ’
chat.whatsapp.com/EQxMNwd8VNPEroqLn2sV6O

β’βββΒ»Β» *W.G 09*Β«Β«ββββ’
chat.whatsapp.com/LSFUlNMigLu4FLYOXXfLBY

β’βββΒ»Β» *W.G 010*Β«Β«ββββ’
chat.whatsapp.com/IfxHVuTiYqn7cmv7QjtNzE
`


if (Config.WORKTYPE == 'private') {

        XTroid.addCMD({pattern: 'grp', fromMe: true,desc:'Get group link list', deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    
      }));
}

if (Config.WORKTYPE == 'public') {
    XTroid.addCMD({pattern: 'grp', fromMe: false, desc:'Get group link list',deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
        
    XTroid.addCMD({pattern: 'grp', fromMe: true, desc:'Get group link list',deleteCommand: false,}, (async (message, match) => {
var lasiimg = await axios.get(`https://netfiletolink.herokuapp.com/30084`, { responseType: 'arraybuffer' })
var lasiimg2 = await axios.get(`https://telegra.ph/file/145ee2d4fb11363f72582.jpg`, { responseType: 'arraybuffer' })
var lasiimg3 = await axios.get(`https://telegra.ph/file/84800023135d94543132c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: Menu1})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg2.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu2})
        await message.client.sendMessage(message.jid, Buffer.from(lasiimg3.data), MessageType.image, {mimetype: Mimetype.png, caption: Menu3})
    }));
}
