const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const postRoutes = require('./routes/post.routes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/', postRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

module.exports = app