
const config = require("../config");

module.exports = {
    kick: function kick(msg) {  
      const args= msg.content.slice(config.prefix.length).trim().split(" ");
        
        if (msg.content.startsWith(`${config.prefix}kick`))
        {
            if (msg.author.bot)
            {
                return; //ignores messages written by bots so it doesn't loop
            }
            else
            {
              if (msg.member.roles.cache.has('929890956780658740'))
                {
                    if (!args.length)
                    {
                        msg.channel.send("No user was sepcified to be kicked.");
                    }
                    else
                    {
                        let member= msg.mentions.members.first();
                        let reason= args.slice(1).join(" ");
                        member.kick(reason);
                        msg.channel.send(`${member} was kicked successfully for ${reason}`);  
                    }
                }
                else 
                {
                    msg.channel.send("You don't have the authority to execute that command");
                }
            }
        }
    }
}
