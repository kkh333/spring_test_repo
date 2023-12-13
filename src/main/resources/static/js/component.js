$(document).ready(function(){

    // 모달
    function modal(modalName,no) {
        for (let i = 1; i <= no; i++) {
            $("." + modalName + "-btn-" + i).click(function(){
                $(".modal-area").addClass("active");
                $("." + modalName + "-modal-" + i).addClass("active");
            });
            $(".x-btn").click(function(){
                    $(".modal-area").removeClass("active");
                    $("." + modalName + "-modal-" + i).removeClass("active");
            });
        }
    }
    
    modal("a",2);
    modal("b",3);
    modal("c",2);

    //  텝메뉴
    function tabMenu(no) {
        $(".tab-cnt-box-" + no + " > li:not("+$(".tab-menu-box-" + no + " > li > a.active").attr("href")+")").hide();
        $(".tab-menu-box-" + no + " > li > a").click(function(){ 
            $(".tab-menu-box-" + no + " > li > a").removeClass("active"); 			
            $(this).addClass("active");	
            $(".tab-cnt-box-" + no + " > li").hide(); 
            $($(this).attr("href")).show(); 
            return false;       
        }); 
    }
    
    for (let tabMenuNum = 1; tabMenuNum <= 20; tabMenuNum++) {
        tabMenu(tabMenuNum);
    }

    // 아코디언 메뉴
    $(".accordion-menu-box .que").click(function() {
        $(".accordion-menu-box .anw").stop().slideUp(300);
        $(this).next(".anw").stop().slideToggle(300);
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $(".accordion-menu-box .anw li a").click(function(){
        $(".accordion-menu-box .anw li a").removeClass("active");
        $(this).addClass("active");
    });

    // qna 박스
    $(".qna-box .que").click(function(){
        $(this).siblings(".que").removeClass("active");
        $(this).siblings(".ans").removeClass("active").stop().slideUp();
        
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).next(".ans").removeClass("active").stop().slideUp();
        }
        else {
            $(this).addClass("active");
            $(this).next(".ans").addClass("active").stop().slideDown();
        }
    });

    // 페이지 숫자 박스 클릭시
    $(".page-number-box > ul > li").click( function() {
        $(".page-number-box > ul > li").removeClass("active");
        $(this).addClass("active");
    });

});
// 커스텀 셀렉트 박스
const selectBoxElements = document.querySelectorAll(".custom-select");

function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
    const selectBox = optionElement.closest(".custom-select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach(selectBoxElement => {
    selectBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");

    if (isOptionElement) {
        selectOption(targetElement);
    }

    toggleSelectBox(selectBoxElement);
    });
});

document.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isSelect = targetElement.classList.contains(".custom-select") || targetElement.closest(".custom-select");

    if (isSelect) {
        return;
    }

const allSelectBoxElements = document.querySelectorAll(".custom-select");

    allSelectBoxElements.forEach(boxElement => {
    boxElement.classList.remove("active");
    });
});