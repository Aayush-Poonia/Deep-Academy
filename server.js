const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON data (if needed)
app.use(bodyParser.json());

// Serve static files like CSS, JS, images, etc.
app.use(express.static('public'));

// Route to handle the form submission
app.post('/api/submit_form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // You can perform additional actions with the form data here
    // e.g., save to a database, send an email, etc.

    res.send('Form submission received!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


import { Analytics } from "@vercel/analytics/react"