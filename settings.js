const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://platform.openai.com/account/api-keys', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://platform.openai.com/account/api-keys': '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', // 👉 login https://platform.openai.com/account/api-keys to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6396755848:AAGWTGu10rAAq1ghPkHfEDJoQmSGK97wMzs" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "@AnnTelegram_Bot" //your bot name
global.OWNER_NAME = "ᴹᴿ᭄ann" //your name
global.OWNER_NUMBER = "6289604188189" //your telegram number
global.OWNER = ["https://t.me/annLycan", "https://t.me/annLycan"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
