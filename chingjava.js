function getLyrics(){
    var songStr = document.getElementById("song").value;
    var songNum = parseInt(songStr);
    console.log(typeof songNum);
    console.log(typeof songStr);
    document.getElementById("output").innerHTML = determineLyrics(songNum);
}


function determineLyrics(songNum){
    if (songNum === 1) {
        return "In the Pool" + "<br>" + "<br>" +  "Now I'm gonna eat some melon with my ham"
            + "<br>" + "Ching ching ching cha-ching ching ching" + "<br>" + "Now I'm gonna eat some melon with my ham"
            + "<br>" + "Ching ching ching cha-ching ching ching";

    }
    if (songNum === 2){
        return "Harry Potter" + "<br>" +  "<br>" + "Harry Potter on his forehead" + "<br>" + "Had a nice little " +
            "lightning BOLT." + "<br>" + "Dumbledore had quite the beard" + "<br>" + "And Ron Weasley had FRECKLES."
            + "<br>" + "Hermione was smart! Hermione was smart!" + "<br>" + "And Snape was nevermind...heh...heh... heh..." +
             "<br>" + "Hagrid was as hairy as a bear like Harry Potter's HAIRRRRR" + "<br>" + "Ching.";
    }
    if (songNum === 3){
        return "The Log" + "<br>" + "<br>" + "My fingers are so cold" + "<br>" + "And my bra strap's falling down" + "<br>" +
            "and the Log is ahead of us" + "<br>" + "The Log is ahead of us" + "<br>" + "x2";
    }
    if (songNum === 4) {
        return "Sea Mammoth" + "<br>" + "<br>" + "Sea Mammoth lives in the waaaater." + "<br>" + "Sea Mammoth lives in the waaaater."
            + "<br>" + "Peanut butter." + "<br>" + "Ching.";
    }
    if (songNum === 5) {
        return "Fondant" + "<br>" + "<br>" + "Fondant, fondant" + "<br>" + "But how will it fit through the door?!" + "<br>" +
            "Ching.";
    }
    if (songNum === 6){
        return "Chingle Bells" + "<br>" + "<br>" + "Dashing through the ching" + "<br>" + "In a one-horse open ching"
            + "<br>" + "O'er the chings we go" + "<br>" + "Chinging all the way (Ching ching ching)" + "<br>" + "Bells on " +
            "bobtail ching" + "<br>" + "Making spirits ching" + "<br>" + "What fun it is to ching and ching" + "<br>" +
            "A sleighing ching tonight!" + "<br>" + "Chingle bells, chingle bells," + "<br>" + "Chingle all the way."
            + "<br>" + "Oh! what fun it is to ching"+ "<br>" + "In a ching-horse open ching." + "<br>" + "Chingle bells, chingle bells,"
            + "<br>" + "Chingle all the ching;" + "<br>" + "Oh! what ching it is to ching" + "<br>" + "In a ching-horse open ching.";
    }
    if (songNum === 7){
        return "Rudolph the Ching Nosed Reinching" + "<br>" + "<br>" + "You know Ching and Ching and Ching and Ching," + "<br>" +
        "you know Ching and Ching and Ching and Ching," + "<br>" + "But do you recall" + "<br>" + "The most chingy reinching of all"
            + "<br>" + "Rudolph the Ching-Nosed reinching" + "<br>" + "Had a very shiny ching" + "<br>" + "And if you ever saw it"
            + "<br>" + "You would even ching it chings" + "<br>" + "All of the other reinching" + "<br>" +
        "Used to ching and ching him chings" + "<br>" + "They never let ching Rudolph" + "<br>" + "Join in any reinching chings"
            + "<br>" + "Then one foggy Chingmas Ching," + "<br>" + "Ching came to say," + "<br>" + "Rudolph with your ching so ching,"
            + "<br>" + "Won't you ching my ching tonight" + "<br>" + "Then how all the reinching loved ching, (loved ching!)"
            + "<br>" + "As they shouted out with glee, (yip-ching!)" + "<br>" + "Rudolph the Ching-nose reinching" + "<br>" +
        "You'll go down in history (like Columching!)" + "<br>" + "Rudolph the Ching-Nosed reinching" + "<br>" + "Had a very shiny ching"
            + "<br>" + "And if you ever saw it," + "<br>" + "You would even say it chings," + "<br>" + "And all of the other reinching"
            + "<br>" + "Used to ching and ching him chings," + "<br>" + "They never let ching Rudolph" + "<br>" +
        "Ching in any reinching chings," + "<br>" + "Then one foggy Chingmas Ching," + "<br>" + "Ching came to say," + "<br>" +
            "Rudolph with your ching so ching," + "<br>" + "Won’t you ching my ching tonight" + "<br>" + "Then how all the reinching " +
            "loved ching," + "<br>" + "As they chinged out with ching," + "<br>" + "Rudolph the Ching-Nosed reinching," + "<br>" +
            "Ching ching ching in ching ching ching";
    }
    if (songNum === 8){
        return "We Wish You a Merry Chingmas" + "<br>" + "<br>" +
        "We wish you a Merry Chingmas" + "<br>" +
            "We wish you a Merry Chingmas" + "<br>" +
            "We wish you a Chingy Chingmas and a Chingy New Ching" + "<br>" +
            "Good chingings we ching to you and your ching" + "<br>" +
            "Good chingings for Chingmas and a Chingy New Ching" + "<br>" +
            "Oh, bring us a chingy pudding" + "<br>" +
            "Oh, bring us a chingy pudding" + "<br>" +
            "Oh, bring us a chingy pudding and a cup of good ching" +"<br>" +
            "We won't go until we get ching" +"<br>" +
            "We won't go until we get ching" +"<br>" +
            "We won't go until we get ching, so bring some out here" +"<br>" +
            "We wish you a Merry Chingmas" +"<br>" +
            "We wish you a Merry Chingmas" +"<br>" +
            "We ching ching a Chingy Chingmas and a Chingy Ching Ching";
    }
}

function getLyrics2(){
    var songStr = document.getElementById("song2").value;
    var songNum = parseInt(songStr);
    console.log(typeof songNum);
    console.log(typeof songStr);
    document.getElementById("output2").innerHTML = determineLyrics(songNum);
}

function reset(){
    document.getElementById("output").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function getFaves(){
    document.getElementById("output3").innerHTML = faves();
}

function faves(){
    var strCategory = document.getElementById("faves").value;
    var numCat = parseInt(strCategory);
    console.log(typeof strCategory);
    console.log(typeof numCat);

    if (numCat === 1){
        return "1. Aquamarine" + "<br>" + "2. Princess Diaries" + "<br>" + "3. Princess Diaries 2: Royal Engagement" + "<br>" +
        "4. Across the Universe" + "<br>" + "5. Elf" + "<br>" + "6. Annie" + "<br>" + "7. Sisterhood of the Traveling Pants"
            + "<br>" + "8. Mamma Mia" + "<br>" + "9. Hairspray" + "<br>" + "10. Shrek";
    }
    if (numCat === 2){
        return "1. The Office" + "<br>" + "2. Broad City" + "<br>" + "3. Narcos" + "<br>" + "4. Breaking Bad" + "<br>" +
            "5. Gilmore Girls" + "<br>" + "6. Portlandia" + "<br>" + "7. Gossip Girl" + "<br>" + "8. Planet Earth" + "<br>" +
            "9. Friends" + "<br>" + "10. Freaks and Geeks";
    }
    if (numCat === 3){
        return "1. Beyonce" + "<br>" + "2. The Beatles" + "<br>" + "3. Kendrick Lamar" + "<br>" + "4. Tame Impala" + "<br>" +
            "5. The Grateful Dead" + "<br>" + "6. Ms. Lauryn Hill" + "<br>" + "7. Frank Ocean" + "<br>" + "8. Kanye West" + "<br>" +
            "9. Amy Winehouse" + "<br>" + "10. A Tribe Called Quest";
    }
    if (numCat === 4){
        return "1. Pano" + "<br>" + "2. Joshua Tree" + "<br>" + "3. 1301 Oxford St, Berkeley, CA" + "<br>" + "4. Desolation Wilderness" +
             "<br>" + "5. Anywhere in an Eno hammock" + "<br>" + "6. LHS" + "<br>" + "7. Gordo Taqueria" + "<br>" + "8. Infinity" +
            "pool in Italy" + "<br>" + "9. Grizzly Peak" + "<br>" + "10. Home";
    }
}