jQuery.noConflict();
(function ($) {
    'use strict';
    $('.oxi-image-hover').on('touchstart', function (e) {
        "use strict";
        var link = jQuery(this);
        if (link.hasClass("oxi-touch")) {
            return true;
        } else {
            link.addClass("oxi-touch");
            $(".oxi-image-hover").not(this).removeClass("oxi-touch");
            e.preventDefault();
            return false;
        }
    });
})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */