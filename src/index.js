/**
 * @file index.js
 * @fileoverview
 */

import { routes } from "./api/routes.js";

import express from "express";
import path from "path";

/**
 * @private
 * @constant server
 */
const server = express();

/**
 * @private
 * @constant port
 */
const port = Number(process.env.PORT_ENV);

server.set("view engine", "pug");
server.set("views", path.join(process.cwd(), "./src/public/pages/"));
server.use(express.static(path.join(process.cwd(), "./src/public/assets/")));

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/**
 * @async
 * @private
 * @function
 */
(async () => {
    try {
        // ! Inicia as conexões necessárias:

        // ! Seta as rotas após as conexões:
        server.use(routes);
        // ! Sobe o servidor sem erros:
        server.listen(port, () => console.log(`Servidor iniciado na porta:${port}`));

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();