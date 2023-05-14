var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", 'utf-8')
    // res.end(text)
    const filestream = fs.createReadStreamm(("./content/big.txt", 'utf-8'));
    filestream.on('open', () => {
         filestream.pipe();
    })
    filestream.on('error', (err) => {
        res.end(err);
    })
}) 
.listen(5000);