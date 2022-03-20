//xac dinh cac doi tuong bi tac dong
//queryall tra ve mang
    let hours= document.querySelectorAll('.hours')
    let minutes= document.querySelectorAll('.minutes')
    let seconds= document.querySelectorAll('.seconds')
    let message= document.querySelector('.message')
//ham thay doi gio
function clock(){
    //tao va lay gio hien tai
    let date=new Date()
    let h= date.getHours()
    let m= date.getMinutes()
    let s= date.getSeconds()
    console.log(h)
    console.log(m)
    console.log(s)
    //cac truong hop thay doi time
    if(h<10){
        hours[0].src=`icon/00.gif`
        hours[1].src=`icon/0${h}.gif`
    }
    else{
        hours[0].src=`icon/0${Math.floor(h/10)}.gif`
        hours[1].src=`icon/0${h%10}.gif`
    }
    
    if(m<10){
        minutes[0].src=`icon/00.gif`
        minutes[1].src=`icon/0${m}.gif`
    }
    else{
        minutes[0].src=`icon/0${Math.floor(m/10)}.gif`
        minutes[1].src=`icon/0${m%10}.gif`
    }
    if(s<10){
        seconds[0].src=`icon/0${Math.floor(s/10)}.gif`
        seconds[1].src=`icon/0${s%10}.gif`
    }
    else{
        seconds[0].src=`icon/0${Math.floor(s/10)}.gif`
        seconds[1].src=`icon/0${s%10}.gif`
    }
    if(h>=0 && h<12){
        message.innerHTML='<span style="font-size: 30px;">Chào buổi sáng</span>'
    }
    if(h>=12 && h<17){
        message.innerHTML='<span style="font-size: 40px;">Chào buổi chiều</span>'
    }
    if(h>=17 && h<=23){
        message.innerHTML='<span style="font-size: 50px;">Chào buổi tối</span>'
    }
}
//ham doi mau loi chao
function blinkColor(){
    if(message.style.color=='black'){
        message.style.color='red'
    }
    else{
        message.style.color='black'
    }
}
//set su lap lai cua hanh dong doi mau va gio hien tai
setInterval(blinkColor,500)
setInterval(clock,1000)

