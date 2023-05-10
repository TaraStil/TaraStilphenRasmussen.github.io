
const myDog = {
    Name: "Bodi",
    Movie: "Rock Dog",
    Breed: "Tibetian Mastiff",
    note: "Rock Dog is a movie about a sheep dog, that loves to make music.",
    mySound: "I love to play rock music!",
};

{
    document.getElementById("Dog").innerHTML =
"Hello everyone! My name is " + myDog.Name + ". I starred in the movie called, " + myDog.Movie + "." +
" You may not know it but I am actually a " + myDog.Breed + ". I'm the farthest thing from a scary dog. " +
myDog.mySound + " " + myDog.note

};

class dog{

    constructor(name = "",
    breed = "", tvShow = "", mySound = "", note = "", canTalk = true)
    {
        this.name = name;
        this.breed = breed;
        this.tvShow = tvShow;
        this.mySound = mySound;
        this.note = note;
        this.canTalk = canTalk;
    }

    myGreeting()
    {
        var talkString = "";
        if(this.canTalk == true)
            talkString = "I can talk!";
        else
            talkString = "I can not talk.";
    }

}
let myDog1 = new dog();
    console.log(myDog1.canTalk)
