const express = require('express'); // Common JS convention for back end; different from ES6 'require' in front end
const app = express(); // Generates single Express application; most applications will contain 1 application, some can contain more. App listens to incoming requests that are being routed to expres side from node side


const PORT = process.env.PORT || 5000; // Use Heroku assigned port for production and port 5000 for development
app.listen(process.env.PORT || 5000);