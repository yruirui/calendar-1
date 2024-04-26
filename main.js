
const now = new Date()
const year=now.getFullYear()
const month=now.getMonth()+1

//初始化
initTime()
//月份信息展示
generateDay()




//辅助函数
function g(selector){
    return document.querySelector(selector)
}
function gs(selector){
    return document.querySelectorAll(selector)
}
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
     for(let i=yuemoxingqiji;i<=7;i++){
        const dalta=i-yuemoxingqiji
        const li=document.createElement('li')
        const d=new Date(yuechu-0+86400*1000*dalta)
        li.textContent=d.getDate()
       days.append(li)
     }
}