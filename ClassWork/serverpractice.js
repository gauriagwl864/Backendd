// const user={
//     name:"Gauri",
//     age:19,
//     class:"FD"
// }
// const http =require("http");
// const server =http.createServer((req,res) =>{
//     const url=req.url;
//     const method=req.method;

//     if(url==='/user' && method==='GET'){
//         res.writeHead(200,{"Content-Type":"application/json"});
//         res.end(JSON.stringify(user));
//     } 
// });
// server.listen(3000,()=>{
//     console.log("hello");         //postman pe {
                                        //"name": "Gauri",
                                        //"age": 19,
                                        //"class": "FD"
                                        //}
// }); 

const user={
    name:"Gauri",
    age:19,
    class:"FD"
};
const http =require("http");
const fs=require("fs");

const server =http.createServer((req,res) =>{
    const url=req.url;
    const method=req.method;

    if(url==='/user' && method==='GET'){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(user));
    }

    else if(url==='/data' && method==='POST'){
        let body="";
        req.on("data",(chunk)=>{
        body+=chunk;
    });
        req.on("end",()=>{
        fs.appendFile("./file.txt",body,()=>{
        res.writeHead(201,"data save successfully");
        res.end();
    });
});
}
});
server.listen(3000, () => {
    console.log("hello");
});