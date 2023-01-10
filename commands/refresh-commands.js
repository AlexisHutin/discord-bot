// const { SlashCommandBuilder } = require('discord.js');
// const { exec } = require('node:child_process');

// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('refresh-commands')
// 		.setDescription('Refresh and deploy slash commands'),
// 	async execute(interaction) {
//         exec('npm run deploy-commands', async (stdout, stderr) => {
//             if (stderr) {
//                 await interaction.reply('Update KO ...');
//                 return;
//             }
//             await interaction.reply('Update OK');
//             return;
//         });
// 	},
// };