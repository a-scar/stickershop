const { userName, password } = require("./config");

async function main() {
  const uri = `mongodb+srv://${userName}:${password}@cluster0-evao8.mongodb.net/test?retryWrites=true&w=majority`;
  const { MongoClient } = require("mongodb");
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    await getStickers(client);
    // Make the appropriate DB calls
    // await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

// async function getStickers(client) {
//   const cursor = client.db("stickershop").collection("stickers").find();
//   const results = await cursor.toArray();
//   console.log(results);
//   return results;
// }

module.exports = {
  getStickers: async function getStickers(client) {
    const cursor = client.db("stickershop").collection("stickers").find();
    const results = await cursor.toArray();
    console.log(results);
    return results;
  },
};