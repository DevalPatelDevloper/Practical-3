let display:any=<HTMLInputElement>document.querySelector("#display")
let clear:any=<HTMLInputElement>document.querySelector("#clear")
let Back:any=<HTMLInputElement>document.querySelector("#back")
let One:any=<HTMLInputElement>document.querySelector("#one")
let Two:any=<HTMLInputElement>document.querySelector("#two")
let Three:any=<HTMLInputElement>document.querySelector("#three")
let Four:any=<HTMLInputElement>document.querySelector("#four")
let Five:any=<HTMLInputElement>document.querySelector("#five")
let Six:any=<HTMLInputElement>document.querySelector("#six")
let Seven:any=<HTMLInputElement>document.querySelector("#seven")
let Eight:any=<HTMLInputElement>document.querySelector("#eight")
let Nine:any=<HTMLInputElement>document.querySelector("#nine")
let Zero:any=<HTMLInputElement>document.querySelector("#zero")
let X:any=<HTMLInputElement>document.querySelector("#x")
let Sqrt:any=<HTMLInputElement>document.querySelector("#sqrt")
let Exp:any=<HTMLInputElement>document.querySelector("#exp")
let Openpa:any=<HTMLInputElement>document.querySelector("#openpa")
let Closepa:any=<HTMLInputElement>document.querySelector("#closepa")
let PI:any=<HTMLInputElement>document.querySelector("#pi")
let E:any=<HTMLInputElement>document.querySelector("#e")
let Pow:any=<HTMLInputElement>document.querySelector("#pow")
let Xt:any=<HTMLInputElement>document.querySelector("#xt")
let X10:any=<HTMLInputElement>document.querySelector("#x10")
let Lg:any=<HTMLInputElement>document.querySelector("#log")
let Inn:any=<HTMLInputElement>document.querySelector("#in")
let Fact:any=<HTMLInputElement>document.querySelector("#fact")
let XY:any=<HTMLInputElement>document.querySelector("#xy")
let Tri:any=<HTMLInputElement>document.querySelector("#Triginometry")
let Fn:any=<HTMLInputElement>document.querySelector("#fn")
Tri.addEventListener("click",()=>{
    if(Tri.value=="sin")
    {
        display.value=Math.sin(display.value)
        console.log(display.value)
    }
    if(Tri.value=="cos")
    {
        display.value=Math.cos(display.value)
        console.log(display.value)
    }
    if(Tri.value=="tan")
    {
        display.value=Math.tan(display.value)
        console.log(display.value)
    }
    if(Tri.value=="sec")
    {
        display.value=1/Math.cos(display.value)
    }
    if(Tri.value=="csc")
    {
        display.value=1/Math.sin(display.value)
    }
    if(Tri.value=="cot")
    {
        display.value=1/Math.tan(display.value)
    }
    Tri.value=""
})

Fn.addEventListener("click",()=>{
    if(Fn.value=="miX")
    {
        display.value=Math.abs(display.value)
    }
    else if(Fn.value=="rand")
    {

    }
    Fn.value=""
})

clear.addEventListener("click",()=>{
    display.value=""
})
Back.addEventListener("click",()=>{
    let no=display.value.slice(0,-1)
    display.value=no
})
One.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="1"
    }
    else{
        display.value=  display.value + "1"
    }
})
Two.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="2"
    }
    else{
        display.value=  display.value + "2"
    }
})
Three.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="3"
    }
    else{
        display.value=  display.value + "3"
    }
})
Four.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="4"
    }
    else{
        display.value=  display.value + "4"
    }
})
Five.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="5"
    }
    else{
        display.value=  display.value + "5"
    }
})
Six.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="6"
    }
    else{
        display.value=  display.value + "6"
    }
})
Seven.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="7"
    }
    else{
        display.value=  display.value + "7"
    }
})
Eight.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="8"
    }
    else{
        display.value=  display.value + "8"
    }
})
Nine.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="9"
    }
    else{
        display.value=  display.value + "9"
    }
})
Zero.addEventListener("click",()=>{
    if(display.value==" ")
    {
        display.value="0"
    }
    else{
        display.value=  display.value + "0"
    }
})
X.addEventListener("click",()=>
{
    display.value=Math.abs(display.value)
})
Sqrt.addEventListener("click",()=>
{
    display.value=Math.sqrt(display.value)
})
Exp.addEventListener("click",()=>
{
    if(display.value==" ")
    {
        display.value="0.e+0"
    }
    else
    {
        display.value=  display.value + "2.718281"
    }
})
Openpa.addEventListener("click",()=>
{
    if(display.value==" ")
    {
        display.value="("
    }
    else{
        display.value=  display.value + "("
    }
})
Closepa.addEventListener("click",()=>
{
    if(display.value==" ")
    {
        display.value=")"
    }
    else{
        display.value=  display.value + ")"
    }
})
PI.addEventListener("click",()=>
{
    if(display.value==" ")
    {
        display.value="3.14"
    }
    else{
        display.value=  display.value + "3.14"
    }
})
E.addEventListener("click",()=>
{
    if(display.value==" ")
    {
        display.value="2.718281"
    }
    else{
        display.value=  display.value + "2.718281"
    }
})
Pow.addEventListener("click",()=>
{
    display.value=Math.pow(display.value,2)
}) 
Lg.addEventListener("click",()=>
{
    display.value=Math.log(display.value)
}) 
Xt.addEventListener("click",()=>
{
    let no,no1
    no=display.value
    no1=display.value
    if(no==no1)
    {
        display.value=1/no
    }
    else{
        display.value=  display.value + "Cannot Divided by 0"
    }
})
X10.addEventListener("click",()=>
{
    let no
    no=display.value
    display.value=Math.pow(10,no)
})  
Inn.addEventListener("click",()=>
{
    if(display.value==" ")
    {
        display.value="Invalid"
    }
    else{
        display.value=  display.value + "Invalid input"
    }
})
Fact.addEventListener("click",()=>
{
    let i,no,f;
    f=1;
    no=display.value
    for(i=1;i<=no;i++)
    {
        f=f*i;
    }
    i=i-1;
    display.value=f
})
XY.addEventListener("click",()=>
{
    let no
    no=display.value
    display.value=no*no
})



