/**
 * Created by lenovo on 2017/8/19.
 */
$(function () {
    getIndexMenu();
    getDissale();
    indexMenuToggle();
    B2T();
})
function getIndexMenu( callback ){
    $.ajax({
        url:url+"api/getindexmenu",
        success:function(result){
            console.log(result);
            var indexMenuHtml=template('indexMenuTp1',result);
            $('#menu .row').html(indexMenuHtml);
        },
        complete:callback
    })
}

function indexMenuToggle(){
    $('#menu .row').on('click',$('#menu .row:nth-child(8)'), function (){
        $('#menu .item:nth-last-child(-n+4)').toggle();
        })
}

function getDissale(){
    $.ajax({
        url:url+"api/getmoneyctrl",
        success: function (data) {
            var html=template('indexDissaleTp1',{data:data.result});
            $('#dissale .dissaleList').html(html);
        }
    })
}

function B2T(){
    $('.width40').click(function () {
        $('html body').animate({scrollTop:0},200);
        return false;
    })
}