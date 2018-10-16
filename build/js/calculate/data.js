// 試算JS
$(function(){

    var $terms_24 = $('#terms-24m');
    var $terms_36 = $('#terms-36m');

    var $percent_10 = $('#percent-10');
    var $percent_20 = $('#percent-20');
    var $percent_30 = $('#percent-30');

    var $dp_price = $('#dp-price');
    var $mp_price = $('#mp-price');

    var $gotoffers = $('#gotoffers');

    var $terms_val = $('#result .calculate-result .terms .dot-item');

    // formatNumber() 是我這邊寫好的js，套上去會自動讓金額數字每3位數加上','
    // default dp10% & 24terms
    $dp_price.text(formatNumber('153000'));
    $mp_price.text(formatNumber('27140'));
    $gotoffers.attr('href','https://www.mercedes-benz.com.tw/');


    // Click Car List
    $('#A-class .modelLst li:nth-of-type(1)').click(function(){
        var $total = 1530000;
        var $product_name = $(this).children('div.product-name').html();

        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        //24 期
        if ( $terms_24.hasClass('active') ){
            if ( $percent_10.hasClass('active')) {
                $dp_price.text( formatNumber($total*0.1));
                $mp_price.text( formatNumber('27140'));
            } else if ( $percent_20.hasClass('active')) {
                $dp_price.text( formatNumber($total*0.2));
                $mp_price.text( formatNumber('20462'));
            } else if ( $percent_30.hasClass('active')){
                $dp_price.text( formatNumber($total*0.3));
                $mp_price.text( formatNumber('13784'));
            }
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            if ( $percent_10.hasClass('active')) {
                $dp_price.text(formatNumber($total*0.1));
                $mp_price.text(formatNumber('22307'));
            } else if ( $percent_20.hasClass('active')) {
                $dp_price.text(formatNumber($total*0.2));
                $mp_price.text(formatNumber('17756'));
            } else if ( $percent_30.hasClass('active')){
                $dp_price.text(formatNumber($total*0.3));
                $mp_price.text(formatNumber('13205'));
            }
        }

        $gotoffers.attr('href','https://www.mercedes-benz.com.tw/');

    });

    $('#A-class .modelLst li:nth-of-type(2)').click(function(){
        var $total = 1610000;
        var $product_name = $(this).children('div.product-name').html();

        $('#result .product-name .ConTxt').empty();
        $('#result .product-name .ConTxt').append($product_name);

        //24 期
        if ( $terms_24.hasClass('active') ){
            if ( $percent_10.hasClass('active')) {
                $dp_price.text( formatNumber($total*0.1));
                $mp_price.text( formatNumber('27140'));
            } else if ( $percent_20.hasClass('active')) {
                $dp_price.text( formatNumber($total*0.2));
                $mp_price.text( formatNumber('20462'));
            } else if ( $percent_30.hasClass('active')){
                $dp_price.text( formatNumber($total*0.3));
                $mp_price.text( formatNumber('13784'));
            }
        } 
        //36 期
        else if ( $terms_36.hasClass('active') ) {
            if ( $percent_10.hasClass('active')) {
                $dp_price.text(formatNumber($total*0.1));
                $mp_price.text(formatNumber('22307'));
            } else if ( $percent_20.hasClass('active')) {
                $dp_price.text(formatNumber($total*0.2));
                $mp_price.text(formatNumber('17756'));
            } else if ( $percent_30.hasClass('active')){
                $dp_price.text(formatNumber($total*0.3));
                $mp_price.text(formatNumber('13205'));
            }
        }

        $gotoffers.attr('href','https://www.mercedes-benz.com.tw/');

    });


    // Click Terms
    $terms_24.click(function(){
        var $total = 1530000;

        if ( $percent_10.hasClass('active')) {
            $dp_price.text(formatNumber($total*0.1));
            $mp_price.text(formatNumber('27140'));
        } else if ( $percent_20.hasClass('active')) {
            $dp_price.text(formatNumber($total*0.2));
            $mp_price.text(formatNumber('20462'));
        } else if ( $percent_30.hasClass('active')){
            $dp_price.text(formatNumber($total*0.3));
            $mp_price.text(formatNumber('13784'));
        }

    });

    $terms_36.click(function(){
        var $total = 1530000;

        if ( $percent_10.hasClass('active')) {
            $dp_price.text(formatNumber($total*0.1));
            $mp_price.text(formatNumber('22307'));
        } else if ( $percent_20.hasClass('active')) {
            $dp_price.text(formatNumber($total*0.2));
            $mp_price.text(formatNumber('17756'));
        } else if ( $percent_30.hasClass('active')){
            $dp_price.text(formatNumber($total*0.3));
             $mp_price.text(formatNumber('13205'));
        }

    });


    // Click Down-Payment-Percent
    $percent_10.click(function(){
        var $total = 1530000;
        $dp_price.text(formatNumber($total*0.1));

        if ( $terms_24.hasClass('active')) {
            $mp_price.text(formatNumber('27140'));
        } else if ( $terms_36.hasClass('active')) {
            $mp_price.text(formatNumber('22307'));
        } 

    });

    $percent_20.click(function(){
        var $total = 1530000;
        $dp_price.text(formatNumber($total*0.2));

        if ( $terms_24.hasClass('active')) {
            $mp_price.text(formatNumber('20462'));
        } else if ( $terms_36.hasClass('active')) {
            $mp_price.text(formatNumber('17756'));
        } 

    });

    $percent_30.click(function(){
        var $total = 1530000;
        $dp_price.text(formatNumber($total*0.3));

        if ( $terms_24.hasClass('active')) {
            $mp_price.text(formatNumber('13784'));
        } else if ( $terms_36.hasClass('active')) {
            $mp_price.text(formatNumber('13205'));
        } 

    });




});