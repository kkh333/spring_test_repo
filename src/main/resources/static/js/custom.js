$(document).ready(function(){
    
    $("").click(function(){
        $("").addClass("active");
        $("").removeClass("active");
        $("").toggleClass("active");
        $("").siblings().next().nextAll().nextUntil().prev().prevAll().prevUntil();
        $("").parent().parents();
        $("").css("", "");
    });

    // 햄버거 버튼 클릭시
    $(".header-area .ham-btn").click(function(){
        $(".side-menu-area").addClass("active");
        $("body").addClass("active");
    });

    // x 버튼 클릭시
    $(".side-menu-area .x-btn").click(function(){
        $(".side-menu-area").removeClass("active");
        $("body").removeClass("active");
    });

    $("#btn_1").click(function(){
            console.log("안녕하세요.");
        });


});