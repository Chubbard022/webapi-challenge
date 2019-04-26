const express = require("express");
const helmet = require("helmet");

const actionRouter = require("./data/helpers/actionModel");
const projectRouter = require("./data/helpers/projectModel");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/actions", actionRouter);
server.use("/api/projects",projectRouter);

module.exports = server;