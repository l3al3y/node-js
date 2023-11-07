const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Irfan:1234@benr2423.dmfybhq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
res.send('undefined')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

app.post('/register', (req, res) => {
    client.db("BENR2423").collection("Users").insertOne(
        {

        "username": req.body.username,
        "password": req.body.password

        }
    );
    

    res.send('defined')
})
    
