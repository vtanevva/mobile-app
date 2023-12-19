const axios = require('axios');

const registerUser = async (username, password) => {
  try {
    const apiUrl = 'http://localhost:5174/api/register';

    const response = await axios.post(apiUrl, {
      username,
      password,
    });

    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Registration failed:', error.message);
  }
};

// Replace 'testuser' and 'testpassword' with the desired username and password
registerUser('testuser', 'testpassword');
