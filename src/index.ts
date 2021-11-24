/**
 * Backend Bootstrap
 */
import onebe from "@sparkdev/onebe/dist";

import "onebe/custom";
import DefaultLogger from "onebe/System/Logger";
import jobs from "./jobs";
import observers from "./observers";
import services from "./services";

onebe({
  currentDir: __dirname,
  configDir: "./config",
  controllersDir: "./controllers",
})
  .then((start) => {
    services();
    observers();
    jobs();
    return start();
  })
  .catch((err) => {
    DefaultLogger.error(err.message);
    DefaultLogger.debug(err.stack);
  });

process.on("uncaughtException", (err) => {
  DefaultLogger.error(err.message);
  DefaultLogger.debug(err.stack);
  process.exit(1); //mandatory (as per the Node.js docs)
});
