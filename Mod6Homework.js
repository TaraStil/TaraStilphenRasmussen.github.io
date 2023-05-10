
var myDog = {
    "name": "Bodi",
    "breed": "Tibetian Mastiff",
    "tvShow": "Rock Dog",
    "note": "Movie based off a sheep dog who turns to rock music.",
    "mySound": "I am not scary",
    "canTalk": true,
    "myGreeting": function(){

        var talkString = "";

        if(this.canTalk == true)
            talkString = "I can talk.";
        else
            talkString = "I cannot talk.";

        return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br>
        I starred in the TV Show ${this.tvShow}. <br>
        My character is a ${this.breed}. In the show, I am ${this.note}<br>
        ${talkString}</p>`
    }
};
document.getElementById("output1").innerHTML = myDog.myGreeting();

class dog{
    constructor(name = "",
    breed = "", tvShow = "", mySound = "", note = "", canTalk = false)
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
            talkString = "I can talk.";
        else
            talkString = "I cannot talk.";

        // return the paragraph text
        return `<p>Hello, my name is ${this.name}, when I bark ${this.mySound}. <br>
            I starred in the TV Show ${this.tvShow}. <br>
            My character is a ${this.breed}. In the show, I am ${this.note} <br>
            ${talkString}</p>`
    }
}

let bodi = new dog("Bodi", "Tibetian Mastiff", "Rock Dog", "Movie based off a sheep dog who turns to rock music.", "I am not scary", true,);

let charlie = new dog("Charlie", "German Shepard", "All Dogs go to Heaven", "I am not scary", "I cheated death and fall in love with a little girl, while doing this with my best friend.", true);

let balto = new dog("balto", "husky", "balto", "I am not scary", "i transported life saving treatment to kids.", true);

document.getElementById("output2").innerHTML = balto.myGreeting();

let text = "";

for(var item in charlie)
    text += `<b>${item}:</b> ${charlie[item]} <br>`;

document.getElementById("output3").innerHTML = text;

var dogList = [];
dogList.push(bodi);
dogList.push(charlie);
dogList.push(balto);

dogList.forEach(dog => {
    for(var item in dog)
    {
        console.log(`${item}: ${dog[item]}`);
    }
    console.log("-----------------------------");
});


function search()
{
    var searchTerm = document.getElementById("dogName").value;
    var result = dogList.find(dog => dog.name == searchTerm);

    if(result)  
    {

        var text = `<b>${result.name}</b> was found!<br>`;

        for(var item in result)
            text += `<b>${item}: </b>${result[item]} <br>`;

        document.getElementById("output4").innerHTML = text;
        document.getElementById("output5").innerHTML = result.myGreeting();
    }
    else
    {
        document.getElementById("output4").innerHTML = `<b>ERROR: </b> ${searchTerm} was not found. Try again.`;
        document.getElementById("output5").innerHTML = "";  
    }
}