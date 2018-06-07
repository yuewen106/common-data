var CURRENT_DROP_INDEX = 0
var CURRENT_DROP_EL = null
 #fucktable 
document.querySelectorAll('.layui-table-main tr').forEach(function (e, i) {
    $(e).attr(draggable, true)

    e.ondragstart = function (e) {
        CURRENT_DROP_INDEX = $(this).index()
        CURRENT_DROP_EL = $(this)
    }

    e.ondragover = function (e) {
        event.preventDefault();
        $(this).css(background-color, #ccc)
    }

    e.ondragleave = function (e) {
        $(this).css(background-color, )
    }

    e.ondrop = function (e) {
        event.preventDefault();
        $(this).css(background-color, )
         exchange($(this), CURRENT_DROP_EL)
         console.log($(this).index(), CURRENT_DROP_INDEX, $(this), CURRENT_DROP_EL);
    }
});

 推上去
var exchange = function (a, b) {
    var n = a.next();
    var p = b.prev();
    b.insertBefore(n);
    a.insertAfter(p);
}