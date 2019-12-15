const app = require('./app.jsx');

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.info(`Express listening on port ${port}`);
});