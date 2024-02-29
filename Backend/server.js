require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

//Express App
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Routes
app.use('/api/user', userRoutes);

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {dbName: 'AgroInsight'})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch(err => {
        console.log(err);
    })