$(document).ready(function(){
  
  function Jukebox(){

    this.tune = $("audio")[0];//Songs are initialized in arrays.
  

  Jukebox.prototype.play = function(){ 
    this.tune.play();
    console.log(this.tune)
  }

  Jukebox.prototype.pause = function(){
    this.tune.pause(); //Apparently, pause is a built-in function?!
  }

  Jukebox.prototype.stop = function(){
    this.tune.rewind();
    this.tune.pause();
  }

  Jukebox.prototype.restart = function(){
    this.tune.currentTime = 0; //sets it at the beginning.
  }

  //automatically plays the song before the one being played
  Jukebox.prototype.last = function(){
    this.stop();
    if(this.tune == 0) {     
      this.tune = 4;
    } 
    else {
      this.tune--;  // "--" subtracts increments, like ++ adds - see below!
      }
    this.play();
  }

  Jukebox.prototype.next = function(){
    this.stop();
    if(this.tune == 4) {
      this.tune = 0;
    } else{
      this.tune++;
    }
    this.tune.play();
  }

  //plays a random song
  Jukebox.prototype.random = function(){
    this.tune.stop();
    this.tune = Math.floor((Math.random() * 8));
    this.tune.play();
  }

  Jukebox.prototype.play0 = function(){
    this.tune.stop(); //Ensures that the needle doesn't drop on the wrong record.  If that's the case, we change the record (or side!) first.
    this.tune = $("audio")[0];
    this.tune.play(); 
  }

  Jukebox.prototype.play1 = function(){
    this.tune.stop();
    this.tune = $("audio")[1];
    this.tune.play(); 
  }

  Jukebox.prototype.play2 = function(){
    this.tune.stop();
    this.tune = $("audio")[2];
    this.tune.play(); 
  }

  Jukebox.prototype.play3 = function(){
    this.tune.stop();
    this.tune = $("audio")[3];
    this.tune.play(); 
  }

  Jukebox.prototype.play4 = function(){
    this.tune.stop();
    this.tune = $("audio")[4];
    this.tune.play(); 
  }

   Jukebox.prototype.play5 = function(){
    this.tune.stop();
    this.tune = $("audio")[5];
    this.tune.play(); 
  }

   Jukebox.prototype.play6 = function(){
    this.tune.stop();
    this.tune = $("audio")[6];
    this.tune.play(); 
  }

   Jukebox.prototype.play7 = function(){
    this.tune.stop();
    this.tune = $("audio")[7];
    this.tune.play(); 
  }
 
  var jivin = new Jukebox()

  $("#play").click(function(){
    var playtext = $("#play").text();
    if (playtext == ("Pause")){
    jivin.play();
    $("#play").html("Pause");
  }
    else{  
    jivin.pause();
    $("#play").html("Play");
  };
  });

  $("#stop").click(function(){
    console.log("stop");
    jivin.stop(); 

  $("#rewind").click(function(){
    console.log("stop");
    jivin.rewind();
  });

  $("#last").click(function(){
    console.log("stop");
    jivin.last();
  });

  $("#skip").click(function(){
    console.log("stop");
    jivin.skip();
  });

  $("#random").click(function(){
    console.log("stop");
    jivin.random();
  });

  $("#track1").click(function(){
    console.log("stop");
    jivin.play0();
  });

  $("#track2").click(function(){console.log("stop");
    jivin.play1();
  });

  $("#track3").click(function(){
    console.log("stop");
    jivin.play2();
  });

  $("#track4").click(function(){
    console.log("stop");
    jivin.play3();
  });

  $("#track5").click(function(){
    console.log("stop");
    jivin.play4();
  });

  $("#track6").click(function(){console.log("stop");
    jivin.play5();
  });

  $("#track7").click(function(){console.log("stop");
    jivin.play6();
  });

  $("#track8").click(function(){console.log("stop");
    jivin.play7();
  });
});
};
})
