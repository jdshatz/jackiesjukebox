$(document).ready(function(){

playlist = ["audio/letsdance.mp3", "audio/begin.mp3", "audio/penn65000.mp3","audio/atrain.mp3","audio/moonlight.mp3","audio/stardust.mp3","audio/smileagain.mp3","audio/whitechristmas.mp3"]
  
  function Jukebox(){

    this.playlist = 0;//Songs are initialized in arrays.
  }

  Jukebox.prototype.play = function(){ 
    [this.playlist].play();
    console.log([this.playlist])
  }

  Jukebox.prototype.pause = function(){
    [this.playlist].pause(); //Apparently, pause is a built-in function?!
  }

  Jukebox.prototype.stop = function(){
    this.rewind();
    this.pause();
  }

  Jukebox.prototype.restart = function(){
    [this.playlist].currentTime = 0; //sets it at the beginning.
  }

  //automatically plays the song before the one being played
  Jukebox.prototype.last = function(){
    this.stop();
    if(this.playlist == 0) {     
      this.playlist = 4;
    } 
    else {
      this.playlist--;  // "--" subtracts increments, like ++ adds - see below!
      }
    this.play();
  }

  Jukebox.prototype.next = function(){
    this.stop();
    if(this.playlist == 4) {
      this.playlist = 0;
    } else{
      this.playlist++;
    }
    this.play();
  }

  //plays a random song
  Jukebox.prototype.random = function(){
    this.stop();
    this.playlist = Math.floor((Math.random() * 8));
    this.play();
  }

  Jukebox.prototype.play0 = function(){
    this.stop(); //Ensures that the needle doesn't drop on the wrong record.  If that's the case, we change the record (or side!) first.
    this.playlist = 0;
    this.play(); 
  }

  Jukebox.prototype.play1 = function(){
    this.stop();
    this.playlist = 1;
    this.play(); 
  }

  Jukebox.prototype.play2 = function(){
    this.stop();
    this.playlist = 2;
    this.play(); 
  }

  Jukebox.prototype.play3 = function(){
    this.stop();
    this.playlist = 3;
    this.play(); 
  }

  Jukebox.prototype.play4 = function(){
    this.stop();
    this.playlist = 4;
    this.play(); 
  }
 
  var jivin = new Jukebox()

  $("#play").click(toggle(function(){
    jivin.play();
    $("#play").html("Pause");
  });
  (function(){
    jivin.pause();
    $("#play").html("Play");
  });
  );

  $("#stop").click(function(){
    jivin.stop(); 

  $("#rewind").click(function(){
    jivin.rewind();
  });

  $("#last").click(function(){
    jivin.last();
  });

  $("#skip").click(function(){
    jivin.skip();
  });

  $("#random").click(function(){
    jivin.random();
  });

  $("#track1").click(function(){
    jivin.play0();
  });

  $("#track2").click(function(){
    jivin.play1();
  });

  $("#track3").click(function(){
    jivin.play2();
  });

  $("#track4").click(function(){
    jivin.play3();
  });

  $("#track5").click(function(){
    jivin.play4();
  });

  $("#track6").click(function(){
    jivin.play5();
  });

  $("#track7").click(function(){
    jivin.play6();
  });

  $("#track8").click(function(){
    jivin.play7();
  });
});
})