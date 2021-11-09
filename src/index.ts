/**
 * Backend Bootstrap
 */
import onebe from "@sparkdev/onebe/dist";
import DefaultLogger from "@sparkdev/onebe/dist/System/Logger";

import "@sparkdev/onebe/dist/custom";

onebe({
  currentDir: __dirname,
  configDir: "./config",
  controllersDir: "./controllers",
})
  .then((app) => {
    app.HTTP.start();
  })
  .catch((err) => {
    DefaultLogger.error(err.message);
    DefaultLogger.debug(err.stack);
  });
