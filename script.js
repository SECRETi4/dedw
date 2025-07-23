const input=document.getElementById("url-input")
const btn=document.getElementById("btn")
const qr=document.getElementById("qrcode")
const qrBg=document.getElementById("qr-color")
const qrColor=document.getElementById("qr-bg")
btn.addEventListener("click",()=>{
    qr.innerHTML=""
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: input.value,
        width: 330,
        height: 330,
        colorDark : qrColor.value,
        colorLight : qrBg.value,
        correctLevel : QRCode.CorrectLevel.H
    });
})