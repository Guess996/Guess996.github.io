let show1=true
function showaside(){
            if(show1){
                // let topx=parseInt(document.documentElement.scrollTop||document.body.scrollTop)
                // // console.log(topx);
                // // document.querySelector(".asides").style.top = topx+"px"
                document.querySelector(".asides").style.width="250px"
                document.body.style.overflow="hidden"
                show1=false
            }else if(show1==false){
                topx=0
                document.querySelector(".asides").style.width="0"
                // document.querySelector(".asides").style.top = "0px"
                document.body.style.overflow=""
                show1=!false
            }
}
window.onload=()=>{
    let lbt_li=document.querySelectorAll('.lbt_ul>li')
    let lbt_but=document.querySelectorAll('.lbt_but>button')
    lbt_but[0].style.backgroundColor="#29B6F6"
    lbt_li[0].style.opacity="1"
    let index=0
    let times=null
    let time1=null
    // for(let i=0;i<lbt_li.length;i++){
    //     console.log(i);
    //     lbt_but[i].onclick=()=>{
    //         index=i
    //         for(let j=0;j<lbt_li.length;j++){
    //             lbt_but[j].style.backgroundColor="rgba(255, 255, 255,.5)"
    //             lbt_li[j].style.opacity="0"
    //         }
    //         lbt_but[i].style.backgroundColor="#29B6F6"
    //         lbt_li[i].style.opacity="1"
    //     }  
    // }
    // times=setInterval(function(){
    //     index++
    //     if(index>3){
    //         index=0
    //     }
    //     for(let j=0;j<lbt_li.length;j++){
    //         lbt_but[j].style.backgroundColor="rgba(255, 255, 255,.5)"
    //         lbt_li[j].style.opacity="0"
    //     }
    //     lbt_but[index].style.backgroundColor="#29B6F6"
    //     lbt_li[index].style.opacity="1"
        
    // },10000)
    // let lbt_but=document.querySelectorAll('.lbt_but>button')
    // console.log(lbt_but);
    // console.log(lbt_li[0]);
    for(let i= 0;i < lbt_li.length;i++){
        lbt_but[i].onclick=()=>{
            index=i
            clickb()
        }      
    }
    function clickb(){
        for(let j =0 ; j < lbt_li.length;j++){
            lbt_but[j].style.backgroundColor="#b71c1c"
            lbt_li[j].style.opacity="0"
        }
        lbt_but[index].style.backgroundColor="#29B6F6"
        lbt_li[index].style.opacity="1"
    }
    times=setInterval(function(){
            index++
            if(index>3){
                index=0
            }
            clickb()
        },10000)

    let timsss=document.querySelector('.hms').children
    time1=setInterval(()=>{
        const days=new Date()
        timsss[0].innerHTML= days.getHours().toString().padStart(2,'0')+":"
        timsss[1].innerHTML= days.getMinutes().toString().padStart(2,'0')+":"
        timsss[2].innerHTML= days.getSeconds().toString().padStart(2,'0')
        document.querySelector('.ymd').innerHTML=days.toLocaleDateString()
        document.querySelector('.xq').innerHTML="星期"+days.getDay()
    },1000)
       const wtf=document.querySelector('input[type="search"]') 
    document.querySelector('.souss').onclick=()=>{
        //window.location.assign("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd="++"&fenlei=256&oq=&rsv_pq=d7bc3b9c000066c5&rsv_t=bbf75sy%2F%2BdaG7oyR9XQSOqb9tenrNZBTUe1FrkfY%2Futf7zWy0xH9eMOa9IE&rqlang=cn&rsv_enter=0&rsv_btype=i&rsv_dl=ib&inputT=2304")
        if(wtf.value==""){
            alert('芜湖')
        }else{
            window.location.assign("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd="+wtf.value+"&fenlei=256&oq=&rsv_pq=d7bc3b9c000066c5&rsv_t=bbf75sy%2F%2BdaG7oyR9XQSOqb9tenrNZBTUe1FrkfY%2Futf7zWy0xH9eMOa9IE&rqlang=cn&rsv_enter=0&rsv_btype=i&rsv_dl=ib&inputT=2304")
        }
        // console.log(wtf.value);
    }
    //++
    // document.querySelector('.hms').innerHTML=days.toLocaleTimeString()
    //     document.querySelector('.ymd').innerHTML=days.toLocaleDateString()
    //     document.querySelector('.xq').innerHTML="星期"+days.getDay()
    // console.log(days.toLocaleDateString(),days.toLocaleTimeString());
// 获取当前日期时间
// var myDate = new Date();
// myDate.toLocaleDateString();                //获取当前日期
// var mytime=myDate.toLocaleTimeString();     //获取当前时间
// myDate.toLocaleString( );                   //获取日期与时间
// myDate.getYear();                //获取当前年份(2位)
// myDate.getFullYear();            //获取完整的年份(4位,1970-????)
// myDate.getMonth();               //获取当前月份(0-11,0代表1月)
// myDate.getDate();                //获取当前日(1-31)
// myDate.getDay();                 //获取当前星期X(0-6,0代表星期天)
// myDate.getTime();                //获取当前时间(从1970.1.1开始的毫秒数)
// myDate.getHours();               //获取当前小时数(0-23)
// myDate.getMinutes();             //获取当前分钟数(0-59)
// myDate.getSeconds();             //获取当前秒数(0-59)
// myDate.getMilliseconds();        //获取当前毫秒数(0-999)

}
