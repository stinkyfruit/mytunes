// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  //this === model
  initialize: function(){
    this.on('add', this.enqueue, this);
  },
  // add song
  // this.models = [song, song, song, song1]
  // when this.models gets an element added to it
  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(chosenSong) {
    this.remove(chosenSong);
  }

});




/*
when a song is added
when it is the only song in the song queue
"before each" hook â€£
TypeError: Attempted to wrap undefined property playFirst as function
*/
