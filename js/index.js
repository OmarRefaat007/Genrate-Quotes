var old = -1;

function generateQuotes() {
    var author = ["Socrates" , "Plato" , "Heraclitus" , "Thales"];
    var quote = [
        "One thing I know is that I know nothing. This is the source of my wisdom",
        "The worst of all deceptions is self-deception",
        "Big results require big ambitions",
        "The happy man is the one who has a healthy body, a wealthy soul and a well-educated nature"
    ]
    

    do {
        var num = Math.floor( Math.random() * author.length );
    }
    while(num==old);

    old=num;

    document.getElementById("name").innerHTML=author[num];
    document.getElementById("quote").innerHTML=quote[num];

    /* if(num==old) {
        num = Math.floor( Math.random() * author.length );
    }
    else {
        document.getElementById("name").innerHTML=author[num];
        document.getElementById("quote").innerHTML=quote[num];
    } */
}

generateQuotes()