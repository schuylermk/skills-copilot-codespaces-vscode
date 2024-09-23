// create web server
const express = require('express');
const app = express();

// create a route that takes a parameter
app.get('/comments/:id', (req, res) => {
  res.send(`You requested comment ${req.params.id}`);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server with `node comments.js` and visit http://localhost:3000/comments/1 in your browser. 
// You should see the message "You requested comment 1" in the browser window.