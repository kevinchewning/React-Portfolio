var tech = ['JavaScript ES6+', 'CSS3', 'HTML5', 'SQL', 'NoSQL', 'ExpressJS', 'React', 'NodeJS', 'jQuery', 'Bootstrap', 'Bulma', 'GraphQL', 'REST'];

/*global $*/
/*eslint no-undef: "error"*/

$(function() {
    techAnimation();
});

function techAnimation() {
    let randomIndex = Math.round(Math.random() * tech.length);
    if(randomIndex === tech.length) {return;}
    let randomDelay = Math.random()*10;
    let techSpanElement = `<span class='tech'>${tech[randomIndex]}</span>`;
    // get window dimentions
    var ww = $(window).width();
    var wh = $(window).height();
    var posx = Math.round(Math.random() * ww) + 300;
    var posy = Math.round(Math.random() * wh) + 20;
    $(techSpanElement)
        .css("animation-delay", randomDelay + "s")
        .css("top", posy + "px")
        .css("left", posx + "px")
        .appendTo(".computer-bg");
}

setInterval(techAnimation, 500);

setTimeout(function() {
    setInterval(function(){
        $('.tech').first().remove();
    }, 500)
},20000)