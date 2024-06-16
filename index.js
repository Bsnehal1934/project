let express = require ('express')

let app=express()
app.use(express.json())
let prodArr=[]
let id = 0
try{

app.post('/product',(req,res)=>{
    let data = req.body
    data.id = id + 1
    id = id+1
    console.log(data)
    prodArr.push(data)
    res.status(201).send({
        isSuccess:true,
        product:data
    })
    
})
}
catch(err){res.status(500).send("Msg seeeee")}

try{
app.delete('/deletprod',(req,res)=>{
    let id = req.query.id
    let arr = prodArr.filter((fld)=> {
        if(fld.id!=id){
            return true
        }
    })
    prodArr = arr
    console.log(arr)
    res.status(404).send({isSuccess: true, id: req.query.id})
})
}
catch(err){res.status(500).send("Msg seeeee")}

try{
app.put('/updateprod', (req, res) => {
    let id = req.query.id;
    let body = req.body;
    let idx = prodArr.findIndex((item) => item.id === Number(id));
  
    if (idx !== -1) {
      prodArr[idx] = { ...prodArr[idx], ...body };
      console.log(prodArr);
      res.send({ isSuccess: true, id: req.query.id });
    } else {
      res.status(201).send({ isSuccess: false, message: 'Product not found' });
    }

  });   
}
catch(err){res.status(500).send("Msg seeeee")}

try{
app.get('/getAllProducts',(req,res)=>{
    
    let data = prodArr
    res.status(201).send({
        isSuccess : true,
        data : data,
        count : data.length
    })
})

}
catch(err){res.status(500).send("Msg seeeee")}

app.listen(6969,(err)=>{
    if(!err){
        console.log("hello" + 6969)
    }
})

