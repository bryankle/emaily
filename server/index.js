const express = require('express'); // Common JS convention for back end; different from ES6 'require' in front end
const app = express(); // Generates single Express application; most applications will contain 1 application, some can contain more. App listens to incoming requests that are being routed to expres side from node side

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);