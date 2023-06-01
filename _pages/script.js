function rotateImage(val) {
    let image = document.getElementById("image");
      if (image.style.webkitAnimationPlayState == "running") {
          image.style.webkitAnimationPlayState = "paused";
          val.innerHTML="Spin";
      } else {
          image.style.webkitAnimationPlayState = "running";
          val.innerHTML="Stop";
      }
  }