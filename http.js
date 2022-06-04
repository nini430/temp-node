const http=require('http');


const server=http.createServer((req,res)=>{
    console.log(req);
    if(req.url==="/") {
        res.end('Welcome to the home page')
    }
    else if(req.url==="/about") {
        res.end("here is my short history")
    }else {
        res.end(`
    <h1>Ooops!</h1>
    <p>We cant seem to find the url you are rooling for</p>
    <a href="/">Back to home</a>
    `)
    }
    
    
})

server.listen(5000)