const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const DISCORD_TOKEN =
    "MTM2NDI1MDA0ODI3OTYwOTQ5NA.GHkbDb.CMkaUSzFKlfBhF6i7jO02qPHCfA8WITvv5KowU";
const N8N_WEBHOOK_URL =
    "https://92e9-180-252-86-46.ngrok-free.app/webhook/from-dc";
console.log("running");
client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.mentions.has(client.user)) {
        try {
            await axios.post(N8N_WEBHOOK_URL, {
                username: message.author.username,
                content: message.content,
                channel: message.channel.name,
            });
            console.log("Message sent to n8n");
        } catch (err) {
            console.error("Failed to send message to n8n:", err.message);
        }
    }
});

client.login(DISCORD_TOKEN);
