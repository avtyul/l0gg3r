let express = require('express');

let app = express();

const PUBLIC_DIR = __dirname + '/public';

let reqCount = 0;

app.get('/', (req, res) => {
    // I l0v3 c0pypast3
    console.log('Request #%d', ++reqCount);
    console.log('Ip:');
    console.log(req.ip);
    console.log('Headers:');
    console.log(req.headers);
    console.log('Body:');
    console.log(req.body);
    console.log('Query:');
    console.log(req.query);
    res.send('fs0ci3ty');
});

app.use('/', express.static(PUBLIC_DIR));

app.listen(process.env.PORT || 5000, () => {
	console.log('Hacking started');
});
