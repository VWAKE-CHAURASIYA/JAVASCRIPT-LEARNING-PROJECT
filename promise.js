PROMISE IN JAVASCRIPT (ENROLLMENT BY LAUTRY SYSTEM -------USING PROMISES)


let studentname="Satya"
const enrollment = ((studentname)=>
{
 return new Promise((resolve, reject)=>{
    setTimeout(() => {
        const issuccessful = Math.random()>=0.4;
        if(issuccessful)
        {
            resolve(`Hello ${studentname} " You get enrolled to our college`)
        }
        else{
            reject(`Hello  ${studentname} You are not selected`)
        }

    }, 10000);
    })
})

enrollment(studentname).then((res)=>
{
    console.log(res);
})
.catch((err)=>
{
    console.log(err);
})
.finally(()=>
{
    console.log("Thanks for visiting to us")
})
