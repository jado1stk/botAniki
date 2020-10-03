const Discord = require("discord.js");

const client = new Discord.Client();

//Clean Code
const arr = ["./token.json", "ready", "message", "+penis", "+help"];


const {
    token 
} = require(arr[0]);


//Display message when bot comes onlinea

client.on(arr[1], () => {
    console.log(`Entrei ${client.user.tag}`);
    client.user.setActivity("Manda um +help!");
});




//Check for new messages
client.on(arr[2], msg => {

    //Lowercase for all commands
    const msgContent = msg.content.toLowerCase;

    //Send back the reply when specific command has been written by a user
    if(msgContent === arr[3]){
        msg.reply("o pinto do Mazzo é pequeno");
    }

    else if(msgContent === arr[4]){
        msg.author.send("> Obrigado por pedir minha ajuda. Sou um pequeno bot criado pelo jado1stk! Meus comandos são:");
        msg.author.send("> +help: Você acabou de usar este comando, idiota. +penis: O que todos nós já sabemos.");
    }
});

//Login into your bot with Token
client.login(token);
