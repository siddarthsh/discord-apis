import { Client, Message } from 'discord.js';

/**
 * @description Turn your bot into a chatbot
 * @param client DiscordJS Client (discord.js)
 * @param channelID Channel where chat bot would be active, default null
 * @param message Message Class (discord.js)
 * @param input The message you want to send to the chat bot
 * @param uuid A special id, default the author's id
 */
export function chatBot(
    message: Message,
    input: string,
    userID?: string,
    channelID?: string
): JSON;
