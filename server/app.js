const express = require("express");
const app = express();
const port = 3000;
const { userName, password } = require("./config");
const { MongoClient } = require("mongodb");

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/stickers", async (req, res) => {
  const uri = `mongodb+srv://${userName}:${password}@cluster0-evao8.mongodb.net/test?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const cursor = client.db("stickershop").collection("stickers").find();
    const results = await cursor.toArray();
    // console.log(results);
    res.json(results);
    }  catch (e) {
    console.errror(e);
  } finally {
    await client.close();
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
