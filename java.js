$(document).ready(function(){
    $("#songInfo").hide();
    $("#classics").hide();
    $("#xmas").hide();
    $("#fav").hide();
    $("#aboutUs").hide();
    $("#slideshow-container").hide();
    $(".mySlides").hide();
    $(".prev").hide();
    $(".next").hide();
    $(".dot").hide();
    $(".instructions").hide();


    $("#musicLib").on("click", function(){
        $("#classics").hide();
        $("#xmas").hide();
        $("#fav").hide();
        $("#aboutUs").hide();
        $("#firstPics").hide();
        $("#slideshow-container").hide();
        $(".mySlides").hide();
        $(".prev").hide();
        $(".next").hide();
        $(".dot").hide();
        $(".instructions").hide();
        $("#songInfo").show();

    });
    $("#pics").on("click", function(){
        $("#songInfo").hide();
        $("#classics").hide();
        $("#xmas").hide();
        $("#fav").hide();
        $("#aboutUs").hide();
        $("#firstPics").hide();
        $("#slideshow-container").show();
        $(".prev").show();
        $(".next").show();
        $(".dot").show();
        $(".instructions").show();

    });
    $("#us").on("click", function(){
        $("#fav").hide();
        $("#firstPics").hide();
        $("#classics").hide();
        $("#xmas").hide();
        $("#songInfo").hide();
        $("#slideshow-container").hide();
        $(".mySlides").hide();
        $(".prev").hide();
        $(".next").hide();
        $(".dot").hide();
        $(".instructions").hide();
        $("#aboutUs").show();
    });
    $("#fun").on("click", function(){
        $("#favoriteResults").hide();
        $("#firstPics").hide();
        $("#songInfo").hide();
        $("#classics").hide();
        $("#xmas").hide();
        $("#aboutUs").hide();
        $("#slideshow-container").hide();
        $(".mySlides").hide();
        $(".prev").hide();
        $(".next").hide();
        $(".dot").hide();
        $(".instructions").hide();
        $("#fav").show();
    });
    $("#ching").on("click", function(){
        $("#output").text("");
        $("#xmas").hide();
        $("#classics").show();
    });

    $("#chingmas").on("click", function(){
        $("#output2").text("");
        $("#classics").hide();
        $("#xmas").show();

    });

    $("#gettingFaves").on("click", function(){
        getFaves();
        $("#favoriteResults").show();
    });

});

function hideInst(){
    $(".instructions").hide();
}

function getLyrics(){
    document.getElementById("output").innerHTML = "";
    var songStr = document.getElementById("song").value;
    var songNum = parseInt(songStr);
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
    document.getElementById("output2").innerHTML = "";
    var songStr = document.getElementById("song2").value;
    var songNum = parseInt(songStr);
    document.getElementById("output2").innerHTML = determineLyrics(songNum);
}

function getFaves(){
    output = "";
    var numCat = parseInt(document.getElementById("faves").value);
    if (numCat === 1){
        output = "<li>Aquamarine</li><li>Princess Diaries</li><li>Princess Diaries 2: Royal Engagement" +
            "</li><li>Across the Universe</li><li>Elf</li><li>Annie</li><li>Sisterhood of the Traveling Pants</li>" +
            "<li>Mamma Mia</li><li>Hairspray</li><li>Shrek</li>";
    }
    if (numCat === 2){
        output = "<li>The Office</li><li>Broad City</li><li>Narcos</li><li>Breaking Bad</li>" +
            "<li>Gilmore Girls</li><li>Portlandia</li><li>Gossip Girl</li><li>Planet Earth</li><li>Friends</li>" +
            "<li>Freaks and Geeks</li>";
    }
    if (numCat === 3){
        output = "<li>Beyoncé</li><li>The Beatles</li><li>Kendrick Lamar</li><li>Tame Impala</li><li>The Grateful Dead</li>" +
            "<li>Ms. Lauryn Hill</li><li>Frank Ocean</li><li>Kanye West</li><li>Amy Winehouse</li><li>The Dixie Chicks</li>";
    }
    if (numCat === 4){
        output = "<li>Pano</li><li>Desolation Wilderness</li><li>Joshua Tree</li><li>1301 Oxford St, Berkeley CA</li>" +
            "<li>Anywhere in an Eno hammock</li><li>LHS</li><li>Gordo Taqueria</li><li>In the pool in Italy</li><li>" +
            "Grizzly Peak</li><li>Home</li>";
    }
    document.getElementById("favoriteResults").innerHTML = output;
}

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    var dots = document.getElementsByClassName("dot");
    if ( n > slides.length) {slideIndex = 1}
    if ( n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    console.log(slides[slideIndex-1]);
    dots[slideIndex-1].className += " active";
}