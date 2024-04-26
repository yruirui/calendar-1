function render(time){
    const year=time.getFullYear()
    const month=time.getMonth()+1
    
    //初始化
    initTime()
    //月份信息展示
    generateDay()
    //将时间变成当前修改过的时间
    now=time
    //初始化
function initTime(){
    const time=g('#time')
    time.textContent=`${year}年${month}`
}
 //月份信息展示
function generateDay(){
    const yuechu=new Date(year, month-1, 1)
    const yuechuxingqiji=yuechu.getDay()
    const yuemo=new Date(new Date(year,month+1-1,1)-86400*1000)
    const yuemojihao=yuemo.getDate()
    const yuemoxingqiji=yuemo.getDay()
    const 这个月有几天=yuemojihao
    const lilist=[]
    const days=g('#days')
    days.innerHTML=''
    //这个月往前铺几天
    for(i=1;i<yuechuxingqiji;i++){
        const li=document.createElement('li')
        const d=new Date(yuechu-86400*1000*i)
        li.textContent=d.getDate()
       days.prepend(li)
     }
    //这个月有几天
     for(let i=1;i<这个月有几天;i++){
        const li=document.createElement('li')
        li.textContent=i
       days.append(li)
     }
     //月末铺垫
     for(let i=yuemoxingqiji;i<=7;i++){
        const dalta=i-yuemoxingqiji
        const li=document.createElement('li')
        const d=new Date(yuechu-0+86400*1000*dalta)
        li.textContent=d.getDate()
       days.append(li)
     }
}
}
let now = new Date()
render(now)

g('#prevMonth').onclick=()=>{
    render(new Date(now-86400*1000*30))
}
g('#nextMonth').onclick=()=>{
    render(new Date(now-0+86400*1000*30))
}
//辅助函数
function g(selector){
    return document.querySelector(selector)
}
function gs(selector){
    return document.querySelectorAll(selector)
}
 