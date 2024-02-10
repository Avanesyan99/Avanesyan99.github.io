let positive = document.getElementById("yes-button");
let negative = document.getElementById("no-button");
let count = 1;

function yesButton() {
    document.getElementById("animation").src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    document.getElementById("text").innerHTML = "UWWW xexe))";
    document.getElementById("ask").style.display = "none";
}


function noButton() {
    let text;
    switch(count) {
        case 1:
            text = "huncta net";
            break;
        case 2:
            text = "ty chooo?";
            break;
        case 3:
            text = "VIKTORIAA";
            break;
        case 4:
            text = "ne shuti taaak";
            break;
        case 5:
            text = "...";
            break;
        case 6:
            text = "ty mne razabyosh serdcee ;(";
            break;
        case 7:
            text = "hmmmmmm";
            break;
        case 8:
            text = "mdddddaaa";
            break;
        default:
            text = "huncta neasdasdt";
            
    }
    document.getElementById("no-button").innerHTML = text;
    count++;
}
