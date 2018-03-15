var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
    var result = "";
    var pList = this.playlists;
    for (p in pList) {
      result = pList[p].id + ": " + pList[p].name + " - " + pList[p].tracks.length + " tracks";
      console.log(result);
    }
  },

  printTracks: function () {
    var result = "";
    var tList = this.tracks;
    for (t in tList) {
      result = tList[t].id + ": " + tList[t].name + " by " + tList[t].artist + " (" + tList[t].album + ")";
      console.log(result);
    }
  },

  printPlaylist: function (playlistId) {
    var result = "";
    var pList = this.playlists[playlistId];
    result = playlistId + ": " + pList.name + " - " + pList.tracks.length + " tracks";
    console.log(result);

    var songs = pList.tracks;
    for (t in songs) {     // [ 't01', 't02']
      var result = "";
      var pTrack = this.tracks[songs[t]];
      result = pTrack.id + ": " + pTrack.name + " by " + pTrack.artist + " (" + pTrack.album + ")";
      console.log(result);
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    var location = this.playlists[playlistId].tracks;
    location.push(trackId);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var trackId = this.uid();

    newTrack = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    }

    this.tracks[trackId] = newTrack;
  },

  addPlaylist: function (name) {
    var pId = this.uid();

    newPlaylist = {
      id: pId,
      name: name,
      tracks: []
    }
    this.playlists[pId] = newPlaylist;
  }
}

library.addPlaylist("BOOM");
console.log(library);


