# Holobot
A simple discord bot that sends a random post from a subreddit.

# Setup

1. You're going to need to make a discord bot with the discord application page.
1. Copy the bot token (dont share this with anybody).
1. make a ".env" file in the "holobot" folder and type 
"HOLO_BOT_TOKEN=your token" with your token (Remember to save).
1. boot it up with node (node ./src/bot.js/)
1. Now just invite your bot to your server and you're done!

# Commands
The only command right now is "r/" followed by the desired subreddit name.

> if you have any command requests feel free to tell me.

# Updates
> 9/14/21

* Made a readme
* Made a .env template
* General improvements
* Switched from using the reddit api to the "bee-api" https://www.npmjs.com/package/bee-api/v/1.0.9

> 9/15/21

* Removed the .env file due to users not being able to see it
* Changed the instructions to require users to make their own .env file
