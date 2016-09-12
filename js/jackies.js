$(document).ready(function(){

  var playtext = $("div#play").text()
  var playing = false

  function Jukebox(){
    this.tune = $("audio")[0];

    Jukebox.prototype.play = function(){ 
      this.tune.play();
      playing = true;
    }

    Jukebox.prototype.pause = function(){
      this.tune.pause(); //Apparently, pause is a built-in function?!
      playing = false;
    }

    Jukebox.prototype.needle = function(){
      if (playing = true) {
        this.tune.pause();
        playing = false; 
      }
      if (playing = false) {
        this.tune.play();
        playing = true; //After it is paused, it cannot play again?!  Why?
      }
    }
    
    Jukebox.prototype.restart = function(){
      this.tune.currentTime = 0; //sets it at the beginning.
      this.tune.play();
    }

    Jukebox.prototype.restart = function(){
      if (this.tune.currentTime >= 5000){
        this.tune.currentTime -= 5000;
      }
      else {
        this.tune.currentTime = 0;
      }
    }

    //automatically plays the song before the one being played
    Jukebox.prototype.last = function(){
      this.tune.pause();
      if(this.tune == $("audio")[0]) {     
        this.tune = $("audio")[7];
      } 
      else if(this.tune == $("audio")[7]) {     
        this.tune = $("audio")[6];
      }
      else if(this.tune == $("audio")[6]) {     
        this.tune = $("audio")[5];
      } 
      else if(this.tune == $("audio")[5]) {     
        this.tune = $("audio")[4];
      } 
      else if(this.tune == $("audio")[4]) {     
        this.tune = $("audio")[3];
      } 
      else if(this.tune == $("audio")[3]) {     
        this.tune = $("audio")[2];
      } 
      else if(this.tune == $("audio")[2]) {     
        this.tune = $("audio")[1];
      } 
      else {     
        this.tune = $("audio")[0];
      } 
      this.tune.currentTime = 0
      this.tune.play();
    }

    //I tried to create a function that decreased the value of the audio "key" by 1, but it did not work on me.
    //I got a strange error - the "play" call was interrupted by a "pause" call?!

    Jukebox.prototype.next = function(){
      this.tune.pause();
      if(this.tune == $("audio")[7]) {     
        this.tune = $("audio")[0];
      } 
      else if(this.tune == $("audio")[0]) {     
        this.tune = $("audio")[1];
      }
      else if(this.tune == $("audio")[1]) {     
        this.tune = $("audio")[2];
      } 
      else if(this.tune == $("audio")[2]) {     
        this.tune = $("audio")[3];
      } 
      else if(this.tune == $("audio")[3]) {     
        this.tune = $("audio")[4];
      } 
      else if(this.tune == $("audio")[4]) {     
        this.tune = $("audio")[5];
      } 
      else if(this.tune == $("audio")[5]) {     
        this.tune = $("audio")[6];
      } 
      else {     
        this.tune = $("audio")[7];
      } 
      this.tune.currentTime = 0
      this.tune.play();
    }

    //plays a random song
    Jukebox.prototype.random = function(){
      this.tune = $("audio")[Math.floor((Math.random() * 8))];
      this.tune.play();
    }

    Jukebox.prototype.play0 = function(){
   //Ensures that the needle doesn't drop on the wrong record.  If that's the case, we change the record (or side!) first.
      this.tune.pause();
      this.tune = $("audio")[0];
      this.tune.play(); 
    }

    Jukebox.prototype.play1 = function(){
      this.tune.pause();
      this.tune = $("audio")[1];
      this.tune.play(); 
    }

    Jukebox.prototype.play2 = function(){
      this.tune.pause();
      this.tune = $("audio")[2];
      this.tune.play(); 
    }

    Jukebox.prototype.play3 = function(){
      this.tune.pause();
      this.tune = $("audio")[3];
      this.tune.play(); 
    }

    Jukebox.prototype.play4 = function(){
      this.tune.pause();
      this.tune = $("audio")[4];
      this.tune.play(); 
    }

     Jukebox.prototype.play5 = function(){
      this.tune.pause();
      this.tune = $("audio")[5];
      this.tune.play(); 
    }

     Jukebox.prototype.play6 = function(){
      this.tune.pause();
      this.tune = $("audio")[6];
      this.tune.play(); 
    }

     Jukebox.prototype.play7 = function(){
      this.tune.pause();
      this.tune = $("audio")[7];
      this.tune.play(); 
    }
  }
 
  var jivin = new Jukebox()

  $("div#needle").click(function(){
    jivin.needle()
  });

  $("#restart").click(function(){
    jivin.restart();
  });

  $("#last").click(function(){
    jivin.last();
  });

  $("#skip").click(function(){
    jivin.pause(); 
    jivin.next();
  });

  $("#random").click(function(){
    jivin.pause(); 
    jivin.random();
  });

  $("#track1").click(function(){
    jivin.pause(); 
    jivin.play0();
  });

  $("#track2").click(function(){
    jivin.pause(); 
    jivin.play1();
  });

  $("#track3").click(function(){
    jivin.pause(); 
    jivin.play2();
  });

  $("#track4").click(function(){
    jivin.pause(); 
    jivin.play3();
  });

  $("#track5").click(function(){
    jivin.pause(); 
    jivin.play4();
  });

  $("#track6").click(function(){
    jivin.pause(); 
    jivin.play5();
  });

  $("#track7").click(function(){
    jivin.pause(); 
    jivin.play6();
  });

  $("#track8").click(function(){
    jivin.pause(); 
    jivin.play7();
  });

  $('body').keyup(function(e){
    if (e.keyCode == 32){
      jivin.needle();
    }
    
    if (e.keyCode == 37){
      jivin.next();
    }
    if (e.keyCode == 36){
      jivin.last();
    }
  });
});