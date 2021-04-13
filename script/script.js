$(function(){

    //1. 정방향 슬라이드 적용( 버튼기호 ">", Next )
    $("#btnNext>span").click(function(){
        $("#shuttleFrame").animate({
            "margin-left": "-100px"
            },
            800,
            function(){
                $("#shuttleFrame").css({"margin-left": "0"});
                $(".slideBox:first-child")
                    .insertAfter(".slideBox:last-child");
            });
    });

    //2. 역방향 슬라이드 적용( 버튼기호 "<", Prev)
    $("#btnPrev>span").click(function(){

        $(".slideBox:last-child")
                    .insertBefore(".slideBox:first-child");
        $("#shuttleFrame").css({"margin-left": "-100px"});

        $("#shuttleFrame").animate({
            "margin-left": "0px"
            },
            800);

    });







});
