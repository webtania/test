$(function () {
    $(window).on("load", function () {
        $("#cover").fadeOut(1750);
    });

    $(".counter").counterUp({
        delay: 10,
        time: 1500,
    });

    $(".testing").progressBar({
        value: "70", // 70%
    });
});
