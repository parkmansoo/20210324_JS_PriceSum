$(function(){

    $("#calcBtn").click(function(){


    var salePrice = 16000;  // 판매가격 16000원
    var grinding = 0;       // 분쇄도선택 0원, 2000원, 3000원
    var cnt = 0;            // 수량 1개 ~ 10개

    grinding = parseInt($("#grinding").val());
    /*alert("grinding : "+ typeof grinding);*/
    cnt = parseInt($("#cnt").val());
    /*alert("cnt : "+ typeof cnt);   */

    var priceSum = salePrice *cnt + grinding;
    /*alert("priceSum : " + priceSum);*/
    $("#priceSum").text(priceSum);

    });



});
