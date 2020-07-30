import * as discord from 'discord.js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

dotenv.config()
export const bot = new discord.Client()

fs.readdirSync(path.join(__dirname, './handlers/')).forEach((file) => {
  import(path.join(__dirname, './handlers/', file))
})

bot.login(process.env.BOT_TOKEN)
