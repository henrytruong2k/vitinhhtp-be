const dotenv = require("dotenv");
const express = require("express");
const { routes } = require("./routes");
const cors = require('cors')
const morgan = require('morgan')

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use('/api', routes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});