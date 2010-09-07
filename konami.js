/**
 * jQuery Konami Plugin 0.1 (2009-10-20)
 *
 * Written by Adam A. Koch
 * http://adamkoch.com
 *
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/)
 *
 * Requires jQuery http://jquery.com (1.3.2 at time of release)
 */
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
