//ham tao mang
function tao_mang(){
    // arr = new Array(Math.floor(Math.random()*11)+11)
    // for(let i=0;i<arr.length;i++){
        arr=[]
        for(let i=0;i<Math.floor(Math.random()*11)+11;i++){
        arr[i]=Math.floor(Math.random()*90)+11
    }
    return arr
}
// tao_mang()
function sap_tang(){
    for(let i=0;i<arr.length-1;i++){
        for(j=arr.length-1;j>i;j--){
            if(arr[j]<arr[j-1]){
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}
//dung thu vien bi loi khi them
// function sap_tang(){
//     arr.sort()
//     return arr
// }
// console.log(sap_tang())
// sap_tang()

function sap_giam(){
    for(let i=0;i<arr.length-1;i++){
        for(j=arr.length-1;j>i;j--){
            if(arr[j]>arr[j-1]){
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}
//dung thu vien bi loi khi them
// function sap_giam(){
//     arr.reverse()
//     return arr
// }
// sap_giam()

function them(a,x){
   arr.splice(x,0,a)
   return arr
}
// them(3,5)
// su kien click tao mang
const btnCreat=document.getElementById('btnCreat')
btnCreat.addEventListener('click',function(){
    let showArr=document.querySelector("#showArr")
    showArr.textContent = tao_mang().join(', ')
})
//su kien sap xep tang
const AscSort=document.getElementById('Ascsort')
    AscSort.addEventListener('click',function(){
    let showlastArr=document.querySelector('#showlastArr')
    showlastArr.textContent=sap_tang().join(', ')
})
//su kien sap xep giam
const DscSort=document.getElementById('Dscsort')
    DscSort.addEventListener('click',function(){
    let showlastArr=document.querySelector('#showlastArr')
    showlastArr.textContent=sap_giam().join(', ')
})
//su kien them phan tu
const addItem=document.getElementById('btnAdd')
    addItem.addEventListener('click',function(){
        let value=document.getElementById('inputItem').value
        let index=document.getElementById('inputPos').value
        let showlastArr=document.querySelector('#showlastArr')
        if(showArr.textContent==''){
            alert('Vui lòng tạo mảng trước khi thêm')
        }
        else if(value==''||index=='')
        {
            alert('Vui lòng nhập thông tin phần tử cần thêm')
        }
        else
        showlastArr.textContent=them(value,index).join(', ')
    })