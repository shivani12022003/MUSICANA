window.addEventListener('keydown', function(e){

    // to play the sound
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    //console.log(audio);
    audio.currentTime=0;
    audio.play();

    // for the animation
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //key.addClass('playing');
    key.classList.add('playing');
//console.log(key);
//console.log(e); // the reason we are using numbers as key is because if you out alphabets then uppercase and lowercase are considered different values and user might not notice it
});

const keys=document.querySelectorAll('.key');// as we want to select all the keys seperately ; document.querySelectorAll('.key'); => this will give u nodelist of all keys if u write this in console
function removeTransition(e){
 if(e.propertyName!=='transform') return;// skip it if its not transform

//console.log(e);// will give u all the transition happened to the key  
//console.log(this); // this here is key we are playing   
this.classList.remove('playing'); 
}
// if we use keys.addEventlistener('transitionend'); its bcuz when u hv nodelist we cant listen on all of them and we must explicitly loop over each of them and attach an eventlistener , we will here do so by using key
keys.forEach(key =>key.addEventListener('transitionend',removeTransition) );
