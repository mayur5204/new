const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
app.use(express.json());

//get API

app.get('/getData', async (req, res) => {
    let result = await dbConnect();

    result = await result.find().toArray();
    res.send(result);
});

//post API

app.post('/postData', async (req, res) => {
    let result = await dbConnect();
    result = result.insertOne(req.body);
    res.send("Data inserted successfully");
});

//put API
app.put('/putData/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.updateOne({ name: req.params.name }, { $set: req.body });
    res.send("Data updated successfully");
});

//delete API
app.delete('/deleteData/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.deleteOne({ name: req.params.name });
    res.send("Data deleted successfully");
});

const PORT = 4000;
app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server running at http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
});
