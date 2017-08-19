/**
 * Created by lenovo on 2017/8/19.
 */
$(function () {
    getCategoryTitle();
    bindLiClick();
})

function getCategoryTitle(){
    $.ajax({
        url:url+'api/getcategorytitle',
    })
}