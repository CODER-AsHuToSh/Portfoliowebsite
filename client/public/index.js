$("#counterr").hide();
$('.hiddentext').hide();
$('#count').click(function () {
    // $("counterr").html("New content");
    content = $("#counterr").text();
    console.log($('.counter i').css('color'));
    if ($('.counter i').css('color') == 'rgb(255, 0, 0)') {
        $('.counter i').css('color', 'black');
        console.log("dac");

        $("#counterr").show(1000);



    }
    else if ($('.counter i').css('color') == 'rgb(0, 0, 0)') {
        $('.counter i').css('color', 'red');
        $("#counterr").hide(1000);


    }


    // else
    // {
    //     $('.counter i').css('color','black');
    //     console.log("dac");
    // }
});

$('.morebtn').click(function () {
    $('.hiddentext').toggle(500);
});

// $('.btnpro').click(function () {
//     window.location.href = "https://github.com/";
// });

// $('.btnpro').click(function () {
//     window.location.href = "https://github.com/";
// });


