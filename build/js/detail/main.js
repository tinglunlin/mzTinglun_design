$(function(){

// Control Set ------------
    // down-payment-percent 頭款% 拉桿
    $("#DPP-slider").slider({ 
        range: "max",
        min: 10, 
        max: 30, 
        step: 10,
        value: 20 /* 設定 初始值 */

    }).slider("pips", {
        rest: "label",
        suffix: "%"
    });


    // terms 分期 拉桿
    $("#terms-slider").slider({ 
        range: "max",
        min: 24, 
        max: 36, 
        step: 12,
        value: 36 /* 設定 初始值 */

    }).slider("pips", {
        rest: "label",
        suffix: "期"
    });


// Circle Set ------------

    // 設定 市場售價 金額
    var total_p = 1530000;

    // 設定 頭款10%
    var ag_dp10 = total_p*0.1; 
    var bs_dp10 = total_p*0.1; 

    var ag_mp10 = 27140;    // 24期
    var bs_mp10 = 59612;    // 24期

    var ag_mp10_t36 = 22307; // 36期
    var bs_mp10_t36 = 40471; // 36期

    // 設定 頭款20%
    var ag_dp20 = total_p*0.2;
    var bs_dp20 = total_p*0.2;

    var ag_mp20 = 20462;    // 24期
    var bs_mp20 = 52989;    // 24期

    var ag_mp20_t36 = 17756; // 36期
    var bs_mp20_t36 = 35974; // 36期

    // 設定 頭款30%
    var ag_dp30 = total_p*0.3;
    var bs_dp30 = total_p*0.3;

    var ag_mp30 = 13784;    // 24期
     var bs_mp30 = 46366;   // 24期

    var ag_mp30_t36 = 13205; // 36期
    var bs_mp30_t36 = 31478; // 36期

 
    // 期數
    var terms = $( "#terms-slider" ).slider( "option", "value" ); 
    var ddpSlider = $( "#DPP-slider" ).slider( "option", "value" ); 
    console.log(terms);
    console.log(ddpSlider);

    // 預設 頭款&期數
    if ( ddpSlider == 30 ){
        var ag_dp = ag_dp30,
            bs_dp = bs_dp30;

        if ( terms == 36 ){
            var ag_mp = ag_mp30_t36,
                bs_mp = bs_mp30_t36;
        } else if ( terms == 24 ){
            var ag_mp = ag_mp30,
                bs_mp = bs_mp30;
        }
        
    }

    if ( ddpSlider == 20 ){
        var ag_dp = ag_dp20,
            bs_dp = bs_dp20;

        if ( terms == 36 ){
            var ag_mp = ag_mp20_t36,
                bs_mp = bs_mp20_t36;
        } else if ( terms == 24 ){
            var ag_mp = ag_mp20,
                bs_mp = bs_mp20;
        }
        
    }

    if ( ddpSlider == 10 ){
        var ag_dp = ag_dp10,
            bs_dp = bs_dp10;

        if ( terms == 36 ){
            var ag_mp = ag_mp10_t36,
                bs_mp = bs_mp10_t36;
        } else if ( terms == 24 ){
            var ag_mp = ag_mp10,
                bs_mp = bs_mp10;
        }
        
    }


    var ag_la = total_p - ag_dp, //ag貸款金額
        bs_la = total_p - bs_dp, //一般貸款金額
        ag_mp_circle = ag_mp * terms, //ag月付total
        bs_mp_circle = bs_mp * terms; //bs月付total
    
    

    // AG 頭款 Circles
    var DPC_myCircle = Circles.create({
        id:                  'down-payment-circle',
        radius:              100,
        value:               ag_dp ,
        maxValue:            total_p ,
        width:               4,
        colors:              ['#1f3139', '#28aae1'],
        duration:            500,
        wrpClass:            'circles-wrp',
        textClass:           'circles-text',
        valueStrokeClass:    'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper:        true,
        styleText:           false,
        text: function(value){
            return '<span class="amount">' + '$' + formatNumber(value) + '</span><span class="btm-txt">頭款</span>' ;
        }
    });  

    // AG 月付款 Circles
    var AGMC_myCircle = Circles.create({
        id:                  'ag-monthly-circle',
        radius:              100,
        value:               ag_mp_circle,
        maxValue:            total_p,
        width:               4,
        colors:              ['#1f3139', '#28aae1'],
        duration:            500,
        wrpClass:            'circles-wrp',
        textClass:           'circles-text',
        valueStrokeClass:    'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper:        true,
        styleText:           false,
        text: function(value){
            return '<span class="head-txt">Agility方案</span><span class="amount">' + '$' + formatNumber(ag_mp) + '</span><span class="btm-txt">月付款</span>' ;
        }
    });  

    // BS 月付款 Circles
    var BSMC_myCircle = Circles.create({
        id:                  'basic-monthly-circle',
        radius:              100,
        value:               bs_mp_circle,
        maxValue:            total_p,
        width:               4,
        colors:              ['#1f1f1f', '#ffffff'],
        duration:            500,
        wrpClass:            'circles-wrp',
        textClass:           'circles-text',
        valueStrokeClass:    'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper:        true,
        styleText:           false,
        text: function(value){
            return '<span class="head-txt">一般分期</span><span class="amount">' + '$' + formatNumber(bs_mp) + '</span><span class="btm-txt">月付款</span>' ;
        }
    });  


// 期數 控制桿 onChange 
    $("#terms-slider").on("slidechange", function(e,ui) { 
        var DDPvalue = $( "#DPP-slider" ).slider( "option", "value" );

        if( ui.value == 24 ){

            if( DDPvalue == 10 ){
                var terms = ui.value //期數
                var ag_dp = ag_dp10;
                var bs_dp = bs_dp10;
                var ag_mp = ag_mp10;
                var bs_mp = bs_mp10;

            } else if( DDPvalue == 20 ){
                var terms = ui.value //期數
                var ag_dp = ag_dp20;
                var bs_dp = bs_dp20;
                var ag_mp = ag_mp20;
                var bs_mp = bs_mp20;

            } else if( DDPvalue == 30 ){
                var terms = ui.value //期數
                var ag_dp = ag_dp30;
                var bs_dp = bs_dp30;
                var ag_mp = ag_mp30;
                var bs_mp = bs_mp30;
            }


        } else if ( ui.value == 36 ){

            if( DDPvalue == 10 ){
                var terms = ui.value //期數
                var ag_dp = ag_dp10;
                var bs_dp = bs_dp10;
                var ag_mp = ag_mp10_t36;
                var bs_mp = bs_mp10_t36;

            } else if( DDPvalue == 20 ){
                var terms = ui.value //期數
                var ag_dp = ag_dp20;
                var bs_dp = bs_dp20;
                var ag_mp = ag_mp20_t36;
                var bs_mp = bs_mp20_t36;

            } else if( DDPvalue == 30 ){
                var terms = ui.value //期數
                var ag_dp = ag_dp30;
                var bs_dp = bs_dp30;
                var ag_mp = ag_mp30_t36;
                var bs_mp = bs_mp30_t36;
            }

        }
        var ag_la = total_p - ag_dp; //ag貸款金額
            var ag_mp_circle = ag_mp * terms; //ag月付total
            var bs_mp_circle = bs_mp * terms; //bs月付total
            dppSet();

            function dppSet(){
                DPC_myCircle.update(DPC_myCircle.value = ag_dp, 200);
                AGMC_myCircle.update(AGMC_myCircle.value = ag_mp_circle, 200);
                BSMC_myCircle.update(BSMC_myCircle.value = bs_mp_circle, 200);
                AGMC_myCircle.getMaxValue(ag_la);
                BSMC_myCircle.getMaxValue(ag_la);
                setTimeout(function(){ 
                    $('.ag-monthly-payment span.amount').text( '$' + formatNumber(ag_mp) );
                    $('#basic-monthly-circle span.amount').text( '$' + formatNumber(bs_mp) );
                }, 250);
            }
    });


// 頭款%數 控制桿 onChange 
    $("#DPP-slider").on("slidechange", function(e,ui) {

        var terms = $( "#terms-slider" ).slider( "option", "value" ); //期數

        if( ui.value == 10 ){

            if( terms == 24 ){
                var ag_dp = ag_dp10;
                var bs_dp = bs_dp10;
                var ag_mp = ag_mp10;
                var bs_mp = bs_mp10;
            } else if( terms == 36 ){
                var ag_dp = ag_dp10;
                var bs_dp = bs_dp10;
                var ag_mp = ag_mp10_t36;
                var bs_mp = bs_mp10_t36;
            }

        } else if( ui.value == 20 ){

            if( terms == 24 ){
                var ag_dp = ag_dp20;
                var bs_dp = bs_dp20;
                var ag_mp = ag_mp20;
                var bs_mp = bs_mp20;
            } else if( terms == 36 ){
                var ag_dp = ag_dp20;
                var bs_dp = bs_dp20;
                var ag_mp = ag_mp20_t36;
                var bs_mp = bs_mp20_t36;
            }

        } else if( ui.value == 30 ){

            if( terms == 24 ){
                var ag_dp = ag_dp30;
                var bs_dp = bs_dp30;
                var ag_mp = ag_mp30;
                var bs_mp = bs_mp30;
            } else if( terms == 36 ){
                var ag_dp = ag_dp30;
                var bs_dp = bs_dp30;
                var ag_mp = ag_mp30_t36;
                var bs_mp = bs_mp30_t36;
            }

        }
        
        var ag_la = total_p - ag_dp; 
        var ag_mp_circle = ag_mp * terms;
        var bs_mp_circle = bs_mp * terms;
        dppSet();


        function dppSet(){

            DPC_myCircle.update(DPC_myCircle.value = ag_dp, 200);
            AGMC_myCircle.update(AGMC_myCircle.value = ag_mp_circle, 200);
            BSMC_myCircle.update(BSMC_myCircle.value = bs_mp_circle, 200);
            AGMC_myCircle.getMaxValue(ag_la);
            BSMC_myCircle.getMaxValue(ag_la);
            setTimeout(function(){ 
                $('.ag-monthly-payment span.amount').text( '$' + formatNumber(ag_mp) );
                $('#basic-monthly-circle span.amount').text( '$' + formatNumber(bs_mp) );
            }, 250);
        }

    });



// Circle RWD SET

var screen_w = $(window).width();

if ( 992 >= screen_w ){
    DPC_myCircle.updateRadius(80);
    AGMC_myCircle.updateRadius(80);
    BSMC_myCircle.updateRadius(80);
}
if ( 768 > screen_w ){
    DPC_myCircle.updateRadius(100);
    AGMC_myCircle.updateRadius(100);
    BSMC_myCircle.updateRadius(100);
}
if ( 374 > screen_w ){
    DPC_myCircle.updateRadius(80);
    AGMC_myCircle.updateRadius(80);
    BSMC_myCircle.updateRadius(80);
}

// resize width
    w = $( window ).width();
    $( window ).resize( function(){
        if ($(window).width()==w) return; 
        w = $(window).width();

        var screen_w = $(window).width();

        if ( 992 <= screen_w ){
            DPC_myCircle.updateRadius(100);
            AGMC_myCircle.updateRadius(100);
            BSMC_myCircle.updateRadius(100);
        }
        if ( 992 >= screen_w ){
            DPC_myCircle.updateRadius(80);
            AGMC_myCircle.updateRadius(80);
            BSMC_myCircle.updateRadius(80);
        }
        if ( 768 > screen_w ){
            DPC_myCircle.updateRadius(100);
            AGMC_myCircle.updateRadius(100);
            BSMC_myCircle.updateRadius(100);
        }
        if ( 374 > screen_w ){
            DPC_myCircle.updateRadius(80);
            AGMC_myCircle.updateRadius(80);
            BSMC_myCircle.updateRadius(80);
        }

    });
// resize width end

});






