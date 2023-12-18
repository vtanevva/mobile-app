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

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

// MongoDB Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


//middleware
app.use(cors());
app.use(express.json());
// API routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes); // Use auth routes for authentication


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


 




// Connect to MongoDB
connectDB();

// Routes
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
