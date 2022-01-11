module.exports = (client, message) => {
   
    //make sure command starts with the correct prefix
     if (message.content.indexOf(client.config.prefix) !== 0) return;
    
    //ignore bots
    if (message.author.bot) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command);
  
    if (!cmd) return;
  
    cmd.run(client, message, args);
  };