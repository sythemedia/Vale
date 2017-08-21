const Discord = require("discord.js");
const clt = new Discord.Client();
clt.removeAllListeners();
clt.on('ready',()=>{
	console.log("Logged in as "+clt.user.tag+"!");
});
clt.on("message",msg=>{
	if (/```/g.test(msg.content)) return;
	if (msg.author.tag==clt.user.tag) {
		if (/^!!kill/i.test(msg.content)) {
            		msg.channel.send("*Bot shutdown...*").then(clt.user.destroy).then(process.exit).catch(process.exit);
		} else if (/^!!sd /gmi.test(msg.content)) {
           		msg.channel.send(msg.content.replace(/^!!sd /gi,"")).then(msg=>setTimeout(msg=>msg.delete(),2500,msg));
        		msg.delete();
			return;
        	} else if (/^!!eval /i.test(msg.content)) {
        		try {
                		msg.channel.send(eval(msg.content.replace(/^eval /i, "")));
           		} catch(e) {
                		msg.channel.send("```js\n" + `${e.name}: ${e.message}` + "\n```");
        		}
		} else if (/^!!rp \d{1,3} /i.test(msg.content)) {
        		var rep = msg.content.match(/\d{1,3}/)[0];
        		var dt = msg.content.replace(/^!!rp .*? /i,"");
        		msg.delete();
        		for (var stp = 0; stp < rep; stp++) {
                		msg.channel.send(dt);
        		}
			return;
		} else if (/^!!rg .+?/i.test(msg.content)) {
        		msg.channel.send(msg.content.replace(/^!!rg /i,"").split("").map(val=>{var vl=val.toLowerCase();if("abcdefghijklmnopqrstuvwxyz".indexOf(vl)>=0){return ":regional_indicator_"+vl+":";}else if(/\d/.test(val)){return ":"+["zero","one","two","three","four","five","six","seven","eight","nine"][Number(val)]+":"}else if(vl={"?":"question","!":"exclamation"}[val]){return ":"+vl+":";}else{return val;}}).join(""));
			msg.delete();
			return;
		}
	}
	if (/(^| |\W)gay($| |\W)/gi.test(msg.content)&&!/((u|o)w(u|o))|New Game/gi.test(msg.guild.name)&&!(/#5509$/.test(msg.author.tag)&&msg.content.includes("```"))) {
        	msg.react("🏳️‍🌈");
	}
	if (/^!!ping$/i.test(msg.content)) {
        	msg.reply("Pong! "+clt.ping);
	} else if (/^!!rg .+?/i.test(msg.content)) {
        	msg.reply(msg.content.replace(/^!!rg /i,"").split("").map(val=>{var vl=val.toLowerCase();if("abcdefghijklmnopqrstuvwxyz".indexOf(vl)>=0){return ":regional_indicator_"+vl+":";}else if(/\d/.test(val)){return ":"+["zero","one","two","three","four","five","six","seven","eight","nine"][Number(val)]+":"}else if(vl={"?":"question","!":"exclamation"}[val]){return ":"+vl+":";}else{return val;}}).join(""));
		msg.delete();
	} else if (/(\W| |^)ountv?v?c?k?($| |\W)/gi.test(msg.content)) {
		msg.delete();
	} else if (/^!!he?lp/i.test(msg.content)) {
		msg.reply("```\n!!ping\n!!rg text --> converts your speech to emojis\n!!hlp\n!!sd text --> sends message and deletes after 0.25 seconds\n!!rp number text --> repeats text 'number' times.\nbot automatically reacts with :gay_pride_flag: when message contains the word 'gay' and upvotes reactions...\nDM @ValentinHacker#5509 for disable...```");
	} else if (/^!!sd /gmi.test(msg.content)) {
           	msg.reply(msg.content.replace(/^!!sd /i,"")).then(msg=>setTimeout(msg=>msg.delete(),2500,msg));
        	msg.delete();
        } else if (/^!!rp \d{1,2} /i.test(msg.content)) {
        	var rep = msg.content.match(/\d{1,3}/g)[0];
        	var dt = msg.content.replace(/^!!rp .*? /i,"");
        	msg.delete();
        	for (var stp = 0; stp < rep; stp++) {
                	msg.reply(dt);
        	}
        }
});
clt.on("messageReactionAdd",(emj,usr)=>{
	if (!emj.message.guild) {
		return;
	}
	if (!/((u|o)w(u|o))|New Game/gi.test(emj.message.guild.name)) {
		emj.message.react(emj.emoji);
	}
});
clt.on("guildMemberAdd",member=>{
	if (member.guild.name=="Heaven") {
		member.guild.defaultChannel.send(`[Bot]: ${member}, Welcome! ^_^`);
	}
});
