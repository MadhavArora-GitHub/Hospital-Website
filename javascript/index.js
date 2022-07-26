$("#about button").click(function (){
    let aboutLess = "#about #about-less";
    let aboutMore = "#about #about-more";
    if ($(this).text() === "Read More >"){
        $(this).text("Read Less <");
        $(aboutLess).removeClass("about-text-show");
        $(aboutMore).removeClass("about-text-hide");
        $(aboutLess).addClass("about-text-hide");
        $(aboutMore).addClass("about-text-show");
    }
    else {
        $(this).text("Read More >");
        $(aboutLess).removeClass("about-text-hide");
        $(aboutMore).removeClass("about-text-show");
        $(aboutLess).addClass("about-text-show");
        $(aboutMore).addClass("about-text-hide");
    }
});