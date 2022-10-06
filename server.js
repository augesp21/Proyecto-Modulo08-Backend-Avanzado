import http from "http";
import api from "./api/api.js";
import config from "./config/index.js";
import init from "./config/database.js";

const server = http.createServer(api);

server.on("listening", () => {
  console.info("Servidor ejecutándose en el puerto", config.server.port);
});

server.on("error", (e) => {
  console.error("Error al ejecutar el servidor");
  if (e.code === "EADDRINUSE") {
    console.error("El puerto", config.server.port, "ya está en uso");
  }
});

server.listen(config.server.port);
init();
