window.onload = function () {

  const playBtn = document.getElementsByClassName('player__button')[0];
  const video = document.getElementsByClassName('player__video')[0];
  const movePartTime = document.querySelectorAll('[data-skip]');
  const playRate = document.querySelector('[name="playbackRate"]');
  const volume = document.querySelector('[name="volume"]');
  const progress = document.querySelector('.progress__filled');
  const progressBar = document.querySelector('.progress');



    // video playStop
  playBtn.addEventListener('click', playVideo);
  video.addEventListener('click', playVideo);
  let playStop = true;
  // let startPlay;

  function playVideo() {
  // console.dir(video);
    if(playStop) {
      video.play();
      playBtn.textContent = '||';
      playStop = false;
    } else {
      video.pause();
      playBtn.textContent = '►';
      playStop = true;
    }
  }
    // video move forward or backword
  movePartTime.forEach( oneBtn => {
    oneBtn.addEventListener('click', moveTimeTo);
  });

  function moveTimeTo (){
    let moveVideoWith = this.getAttribute('data-skip');
    // console.log(this.getAttribute('data-skip'));
    video.currentTime += parseFloat(moveVideoWith);
  }

    // video frameRate
  playRate.addEventListener('input', moveProgress);
  function moveProgress(){
    const rateValue = this.value;
    // console.log(rateValue)
    video.playbackRate = rateValue;
  }

    // video Volume

  volume.addEventListener('input', volumeControl);
  function volumeControl(){
    video.volume = this.value;
    // console.dir(video)
  }

    // progressBar move on click - target
  progressBar.addEventListener('click', moveVideoTo);
  function moveVideoTo (event){
    const thisPos = (event.offsetX / progressBar.offsetWidth) * video.duration;
    // console.log(progressBar.offsetWidth);
    video.currentTime = thisPos;
  }


    // update the progress bar
  video.addEventListener('timeupdate', goToTime);
  function goToTime() {
    let progressView = (video.currentTime / video.duration) * 100;
    // console.dir('test');
    progress.style.flexBasis = `${progressView}%`;
  }

  // fullScreen button
  const fullScreen = document.querySelector('.fullScreen');
  const fullPlayer = document.querySelector('.player');
  const body = document.getElementsByTagName('body')[0];
  // let full = false;

  fullScreen.addEventListener('click', fullScr);
  function fullScr(){
    // if(!full){
    //   body.style.margin = '0';
    //   fullPlayer.style.border = ' none';
    //   fullPlayer.style.maxWidth = 'none';
    //   fullPlayer.style.width = `${window.innerWidth}px`;
    //   fullPlayer.style.height = `${window.innerHeight}px`;
    //   full = true;
    // } else {
    //   body.style.margin = '8px';
    //   fullPlayer.style.border = '5px solid rgba(0,0,0,0.2)';
    //   fullPlayer.style.maxWidth = '750px';
    //   fullPlayer.style.height = 'auto';
    //   full = false;
    // }
    fullPlayer.classList.toggle('fullScr');
    body.classList.toggle('bodyRemove');
  }

};
