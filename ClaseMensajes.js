const fs = require("fs");
const express = require("express");
const { response } = require("express");
const app = express();
const { options } = require("./options/SQLite3");
const knex = require("knex")(options);
class Mensajes {
  constructor() {}

  async createTabla() {
    knex.schema
      .createTable("messages", (table) => {
        table.increments("id"),
          table.string("socketid"),
          table.string("email"),
          table.string("mensaje"),
          table.string("fecha");
      })
      .then(() => {
        console.log("table messages create");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //knex.destroy();
      });
  }

  async getAllMensajes() {
    const messages = await knex
      .from("messages")
      .select("*")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        //console.log(err);
      })
      .finally(() => {
        //knex.destroy();
      });

    return messages;
  }

  async saveMensajes(data, date) {
    knex("messages")
      .insert({
        socketid: data.socketid,
        email: data.email,
        mensaje: data.mensaje,
        fecha: date,
      })
      .then((res) => {
        console.log(`message save ID: ${res}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //knex.destroy();
      });
  }
}

module.exports = Mensajes;
