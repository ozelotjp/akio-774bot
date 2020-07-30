import { bot } from '../main'

bot.on('guildMemberAdd', (member) => {
  const roleId = '668401657884835841'

  console.log(`[guildMemberAdd] Grant role #${roleId} to user #${member.id}`)
  member.roles.add(roleId).catch((error) => console.error(error))
})
