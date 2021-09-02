if (Number(process.version.slice(1).split(".")[0]) < 16)
  throw new Error(
    "Node 16.x or higher is required. Update Node on your system.",
  );

import { Client, Collection } from "discord.js";
import { readdirSync } from "fs";
import Enmap from "enmap";
import config from "./config";

const client: any = new Client({
  intents: config.intents,
  partials: config.partials,
});

client.config = config;
client.logger = require("./modules/Logger");
client.owners = [];

client.commands = new Collection();
client.aliases = new Collection();
client.slashcmds = new Collection();

client.settings = new Enmap({ name: "settings" });

const init = async () => {
  // Here we load **commands** into memory, as a collection, so they're accessible
  // here and everywhere else.
  const commands = readdirSync("./commands/").filter((file) =>
    file.endsWith(".js"),
  );
  for (const file of commands) {
    const response = client.loadCommand(file);
    if (response) console.log(response);
  }

  // Now we load any **slash** commands you may have in the ./slash directory.
  const slashFiles = readdirSync("./slash").filter((file) =>
    file.endsWith(".js"),
  );
  for (const file of slashFiles) {
    const command = require(`./slash/${file}`);
    const commandName = file.split(".")[0];
    client.logger.log(`Loading Slash command: ${commandName}. 👌`, "log");

    // Now set the name of the command with it's properties.
    client.slashcmds.set(command.commandData.name, command);
  }

  // Then we load events, which will include our message and ready event.
  const eventFiles = readdirSync("./events/").filter((file) =>
    file.endsWith(".js"),
  );
  for (const file of eventFiles) {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}. 👌`, "log");
    const event = require(`./events/${file}`);
    // Bind the client to any event, before the existing arguments
    // provided by the discord.js event.
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
  }

  // Generate a cache of client permissions for pretty perm names in commands.
  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

  // Threads are currently in BETA.
  // This event will fire when a thread is created, if you want to expand
  // the logic, throw this in it's own event file like the rest.
  client.on("threadCreate", (thread: any) => thread.join());

  await client.login(client.config.token);
};

init();
