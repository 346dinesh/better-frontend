// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));


// Handles any requests that don't match the ones above
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
  });

  // Handles any requests that don't match the ones above
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
  });


  // Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
  });
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
