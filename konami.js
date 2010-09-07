(function ($) {
    $.konami = function (callback) {
        var code = "38,38,40,40,37,39,37,39,66,65";
        var k = [];
        $(document).keydown(function (e) {
            k.push(e.keyCode);
            if (k.toString().indexOf(code) >= 0) {
                k = [];
                $(this).unbind('keydown', arguments.callee);
                callback(e);
            }
        });
    };
})(jQuery);