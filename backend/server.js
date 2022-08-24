const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use('/api', require('./routes/imageRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
