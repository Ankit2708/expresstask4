const http=require('http');
const server=http.createServer((req,res)=>{//headers are meta data
    console.log(req.method,req.headers);//requesting methods use ,url,headers
    //process.exit();//it exits the event loop
    const url=req.url;
    if(url==='/home'){
        res.setHeader('Content-Type','text/html');//default header
        res.write('<html>');
        res.write('<head><title>My first page</title><head>');
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==='/about'){
        res.setHeader('Content-Type','text/html');//default header
        res.write('<html>');
        res.write('<head><title>My first page</title><head>');
        res.write('<body><h1>Welcome to About us page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==='/node'){
        
        res.setHeader('Content-Type','text/html');//default header
        res.write('<html>');
        res.write('<head><title>My first page</title><head>');
        res.write('<body><h1>My first node js project</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
});
server.listen(3000);
