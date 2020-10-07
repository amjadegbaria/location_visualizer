// //server.js
// const express = require('express');
// const favicon = require('express-favicon');
// const path = require('path');
// const port = process.env.PORT || 8080;
// const app = express();
// app.use(favicon(__dirname,'..', '/build/favicon.ico'));
// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname,'..', 'public')));
// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname,'..', 'public', 'index.html'));
// });
// app.listen(port);

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
    console.log('Server is up!');
});