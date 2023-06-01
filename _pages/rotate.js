const img = document.querySelector('.rotate-image');
  // console.log(img);

  let rtdeg = 0;

  setInterval(() => {

    rtdeg++;

    //if(rtdeg == 360){
    //    rtdeg = 0;
    // }
    //console.log(rtdeg);
    // img.style.transform = 'rotate('+rtdeg+'deg)';
    img.style.transform = 'rotate(${rtdeg}deg)';


  }, 100);