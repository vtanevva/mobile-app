// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // API routes
// const apiRoutes = require('./routes/apiRoutes');
// app.use('/api', apiRoutes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const apiRoutes = require('./routes/apiRoutes');

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 5000;
// const mongoURI = process.env.MONGODB_URI;

// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // API routes
// app.use('/api', apiRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 5174;
const mongoURI = process.env.MONGODB_URI;

dotenv.config();
// MongoDB Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

connectDB();

//middleware
app.use(cors());
app.use(express.json());
// API routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes); // use auth routes for authentication


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
