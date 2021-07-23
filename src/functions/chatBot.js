async function chatBot(channelID, message, input, uuid) {
    if (!message) {
        throw new ReferenceError('[Chatbot] "message" is not defined');
    }
    if (!input) {
        throw new ReferenceError('[Chatbot] "input" is not defined');
    }

    if (channelID && message.channel.id !== channelID) return;

    const fetch = require('node-fetch');
    fetch(
        `https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(
            input
        )}&uid=${uuid || message.author.id}`
    )
        .then((res) => res.json())
        .then(async (json) => {
            if (json.response) {
                return message.channel.send(json.response);
            }
        });
}
module.exports = chatBot;
