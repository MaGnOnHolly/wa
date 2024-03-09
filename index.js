const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const {Discord, Client, MessageEmbed, MessageActionRow, MessageButton, Modal, TextInputComponent} = require("discord.js")
const client = new Client({intents: 7753})

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`)
}).login(process.env.token)

const prefix = "!"

const replace = [
  {
    word: "متوفر",
    replace: "مت9فر"
  },
   {
    word: "بيع",
    replace: "بي3"
  },
   {
    word: "شوب",
    replace: "ش9ب"
  },
   {
    word: "ديسكورد",
    replace: "ديس_ورد"
  },
   {
    word: "نيترو",
    replace: "نيتر9"
  },
   {
    word: "حساب",
    replace: "7ساب"
  },
   {
    word: "توكن",
    replace: "ت9كن"
  },
   {
    word: "بوت",
    replace: "ب9ت"
  },
   {
    word: "طرق",
    replace: "tرق"
  },
    {
    word: "روبوكس",
    replace: "روب_كس"
  },
    {
    word: "فيزا",
    replace: "فيzا"
  },
    {
    word: "تفعيل",
    replace: "تف3يل"
  },
    {
    word: "سيرفر",
    replace: "سير_فر"
  },
    {
    word: "اسعار",
    replace: "اس3ار"
  },
    {
    word: "تشتري",
    replace: "تش$ري"
  },
  {
    word: "تشتريهم",
    replace: "تش$ريهم"
  },
  {
    word: "رابط",
    replace: "ر9بط"
  },
  {
    word: "روابط",
    replace: "رو9بط"
  },
  {
    word: "السعر",
    replace: "الس3ر"
  },
  {
        word: "سعر",
        replace: "س3ر"
  },
  {
       word: "بسعر",
       replace: "بس3ر"
  },
]

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "replacer")) {
  if(!message.member.permissions.has("ADMINISTRATOR")) return;
    const embed = new MessageEmbed()
    .setTitle("تشفير")
    .setDescription("**لتشفير منشورك قم بالضغط على الزر و ضع منشورك.**")
    .setThumbnail(message.guild.iconURL())
    
      const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("تشفير")
            .setCustomId('replace')
        )
    message.channel.send({embeds: [embed], components: [row]})
  }
})


client.on("interactionCreate", async i => {
  if (!i.isButton()) return;
  if (i.customId == "replace") {
            const modal = new Modal()
            .setTitle('تشفير')
            .setCustomId('rep')

   const replacer = new TextInputComponent()
            .setCustomId('replacetext')
            .setLabel(`منشورك`)
            .setMaxLength(2000)
            .setRequired(true)
            .setStyle("PARAGRAPH")
    
       const rows = [replacer].map(
                (component) => new MessageActionRow().addComponents(component)
            )
            modal.addComponents(...rows);
            i.showModal(modal);
        
  }
  
})

client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId == "rep") {
let text = i.fields.getTextInputValue('replacetext');
    let replaced = false;

    replace.forEach(t => {
      const regex = new RegExp(t.word, 'g');
      if (regex.test(text)) {
        text = text.replace(regex, t.replace);
        replaced = true;
      }
    });


    if (replaced) {
i.reply({content: `\`المنشور بعد التشفير :\`\n\n ${text}`, ephemeral: true})
    } else {
      i.reply({content: "**منشورك لا يحتاج للتشفير**", ephemeral: true})
    }
  }
  
})
process.on("unhandledRejection", e => {
  console.log(e)
})

// ========================== Const ======================== \\

const TaxChannel = "1213514774495629372" // ايدي الات شانل الاوتو تاكس

// ==================== Auto Tax ====================== \\

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return

if(TaxChannel.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;

if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
     let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    let tax5 = Math.floor(tax2 + tax4 )
    let tax6 = Math.floor(args2 * 2 / 40)
    let tax7 = Math.floor(args2 - tax6 )

    let Taxembed = new MessageEmbed()

.setAuthor(``, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   

.addFields([
  {
    name: ` > السعر بدون ضرايب :`, 
      value: `${args2}`
        },
    {
    name: ` > السعر مع ضرايب :`,
    value: `${tax}`
  },
  {
  name: ` > ضرايب الوسيط بدون نسبة :`, 
    value: `${tax4}`
      },
   {
    name: ` > ضرايب الوسيط مع النسبة :`, 
      value: `${tax5}`
        },
   {
    name: ` > نسبة الوسيط :`, 
      value: `${tax2}`
        },
  {
    name: ` > تحويل بدون ضرايب :`, 
      value: `${tax7}`
        },
  {
    name: ` > ضريبة بروبوت :`, 
      value: `${tax6}`
        },
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
message.reply({embeds: [Taxembed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 

// ================= Cmd Tax ================ \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
    if(!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {
   console.log(err.message)
   });

if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
     let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    let tax5 = Math.floor(tax2 + tax4 )
    let tax6 = Math.floor(args2 * 2 / 40)
    let tax7 = Math.floor(args2 - tax6 )

    let embed = new MessageEmbed()

.setAuthor(``, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   

.addFields([
  {
    name: ` > السعر بدون ضرايب :`, 
      value: `${args2}`
        },
    {
    name: ` > السعر مع ضرايب :`,
    value: `${tax}`
  },
  {
  name: ` > ضرايب الوسيط بدون نسبة :`, 
    value:  `${tax4}`
      },
   {
    name: ` > ضرايب الوسيط مع النسبة :`, 
      value: `${tax5}`
        },
   {
    name: ` > نسبة الوسيط :`, 
      value: `${tax2}`
        },
  {
    name: ` > تحويل بدون ضرايب :`, 
      value: `${tax7}`
        },
    {
      name: ` > ضريبة بروبوت :`, 
        value: `${tax6}`
          },
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()

   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
});