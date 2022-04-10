const http=require('http')
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers);
    //process.exit()
    //Get request is used to retrieve information requested by url
    const url=req.url;//parsing the url
    const method=req.method;
    
    
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');

        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        //sending post request
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{//to save data entered, data is fired when new chunk is reaady to read
            console.log(chunk);//data is sent as a chunks of data
            body.push(chunk);
        })
        return req.on('end',()=>{//fired when sending of chunk is done
            // return req so that it execute first
            const parsebody=Buffer.concat(body).toString();//create new buffer and add all body to it and convert it to string
            const message=parsebody.split('=')[1];//typed message is saved as key value pair separated by =
            fs.writeFile('message.txt',message,()=>{
                res.statusCode=302//it will redirect
                res.setHeader('Location','/'); //redirect location
                return res.end();
            });
        });
        
        
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title><head>');

    res.write('<body><h1>Backend Engineer</h1></body>');
    res.write('</html>');
    res.end();

});
server.listen(4000);