const { SlashCommandBuilder } = require('discord.js');
const { triggerHook } = require('@services/hassio');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hassio-test')
		.setDescription('Trigger test hook from Hassio'),
	async execute(interaction) {
        try {
            await triggerHook();
        } catch (err) {
            console.error(err);
        }
		await interaction.reply('Hook Triggered');
	},
};
