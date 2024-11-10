const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

//get API

app.get('/', async (req, res) => {
    let result = await dbConnect();

    result = await result.find().toArray();
    res.send(result);
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
