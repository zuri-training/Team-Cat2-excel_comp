const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const playlistSchema = new Schema({
  audioTitle:{
    type: String,
    require: true
  },
  artistName:{
    type: String,
    require: true
  },
  audio:{
    type: String,
    require: true
  },
  image:{
    type: String,
    require: true
  },

},)

const playlist = mongoose.model('firstPlaylists', playlistSchema)

module.exports = playlist