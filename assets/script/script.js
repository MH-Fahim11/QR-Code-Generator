let image = document.getElementById('image');
let content = document.getElementById('content');
let btnCreate = document.getElementById('btnCreate');

btnCreate.onclick = () => {
    if(content.value == '') return image.src= 'assets/images/no-image.png';
    else{
        image.src= 'assets/images/R.gif';
        setTimeout(qrCode, 100);
    }
}

function qrCode(){
    let linkQR = 'https://api.qrserver.com/v1/create-qr-code/';
    let imageLink= linkQR + '?size=500x500&data=' + content.value;
    image.src = imageLink;
    console.log(imageLink)
}
    
