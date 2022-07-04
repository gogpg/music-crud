class Artist {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.songs = [];
        this.price = 0;
        this.balance = 0;
    }
    intro() {
        return `Hi my name is ${this.name} and I am musician!`
    }

    songPrice(songPrice) {
        this.price = songPrice / 100
        return `${this.name}s price per song is ${this.price} ${this.currency}.`
    }

    addSong(songName) {
        let newSong = {};  //sukuriame dainos objekta
        newSong.name = songName;
        newSong.playCount = 0;
        this.songs.push(newSong);  //idedame objektus i masyva
    }

    playlist() {
        let songslist = `${this.name}s playlist:\n====================\n`
    for (let i = 0; i < this.songs.length; i++) {
            songslist += `${i + 1}. ${this.songs[i].name} (${this.songs[i].playCount}) \n`;
        }
        return songslist;
    }

    playSong(index) {
        this.songs[index].playCount++
        this.balance += this.price;
        return `Playing song: ${this.songs[index].name}.`

    }

    fortune() {
        return `Total lifetime wealth of ${this.name} is ${this.balance.toFixed(2)} ${this.currency} right now!`
    }
}

export { Artist }