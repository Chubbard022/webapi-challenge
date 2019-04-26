const express = require("express");
const helmet = require("helmet");

const actionRouter = require("./data/actionRouter");
const projectRouter = require("./data/projectRouter");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/actions", actionRouter);
server.use("/api/projects",projectRouter);

module.exports = server;