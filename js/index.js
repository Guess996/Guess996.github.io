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
    for(let i=0;i<lbt_li.length;i++){
        console.log(i);
        lbt_but[i].onclick=()=>{
            index=i
            for(let j=0;j<lbt_li.length;j++){
                lbt_but[j].style.backgroundColor="rgba(255, 255, 255,.5)"
                lbt_li[j].style.opacity="0"
            }
            lbt_but[i].style.backgroundColor="#29B6F6"
            lbt_li[i].style.opacity="1"
        }  
    }
    times=setInterval(function(){
        index++
        if(index>3){
            index=0
        }
        for(let j=0;j<lbt_li.length;j++){
            lbt_but[j].style.backgroundColor="rgba(255, 255, 255,.5)"
            lbt_li[j].style.opacity="0"
        }
        lbt_but[index].style.backgroundColor="#29B6F6"
        lbt_li[index].style.opacity="1"
        
    },10000)
    // let lbt_but=document.querySelectorAll('.lbt_but>button')
    // console.log(lbt_but);
    // console.log(lbt_li[0]);
    // document.querySelectorAll('.lbt_but>button').forEach((item,index)=>{
    //     item.onclick=()=>{
    //         // console.log(lbt_li[index]);
    //         item.classList.toggle('togglebut')
    //         lbt_li[index].classList.toggle('toggleli')
    //     }
    // })
}
