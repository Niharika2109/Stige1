const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://Niharika:niha2109@cluster0.ownzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await ListDataBases();
    } finally {
        await client.close();
    }
}

main().catch(console.error);
