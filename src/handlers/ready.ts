import { bot } from '../main'

bot.on('ready', () => {
  console.log('[ready] Bot has been successfully launched.')

  console.log('[ready] Update bot activity.')
  bot.user
    .setActivity('general | ::help')
    .catch((error) => console.error(error))
})
