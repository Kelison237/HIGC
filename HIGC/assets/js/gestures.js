let menu = document.querySelector('.menu');
menu.addEventListener('click', ()=> {
    // document.querySelector('ul').style.marginTop = "0px"
    if(document.querySelector('ul').style.marginTop == '0px'){
        document.querySelector('ul').style.transition = '1s';
        document.querySelector('ul').style.marginTop = '-434px';
        console.log("works");
        document.querySelector('.menu').innerHTML = `<h2>Menu</h2>`
        // document.querySelector('.purpleBg').style.height = `129vh`
      
    }else  if(document.querySelector('ul').style.marginTop = '-434px') {
        // document.querySelector('ul').style.marginTop = "-434px"
        document.querySelector('.menu').innerHTML = `<h2>Close</h2>`
        document.querySelector('.purpleBg').style.height = `92vh`
        document.querySelector('ul').style.marginTop = '0px';
        document.querySelector('ul').style.transition = '1s';
    
        console.log("evenebtter");
    }
})
