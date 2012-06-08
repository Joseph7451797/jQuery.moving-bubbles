(function ($) {
    $.fn.startMoving = function (options) {

        var opts = $.extend({}, $.fn.startMoving.defaults, options);

        return this.each(function () {
            //Add display:block;position:absolute; to attribute style. if addCss = true (default)
            if (opts.addCss)
                $(this).attr('style', 'display:block;position:absolute;');

            moveObject(this);
        });

        function moveObject(i) {

            //Random new x,y inside bounds
            var x = Math.floor(Math.random() * opts.maxWidth);
            var y = Math.floor(Math.random() * opts.maxHeight);

            //Compute animation time
            var s = opts.minDuration + (Math.random() * opts.deltaDuration);

            //When animation finishes, start the function again.
            $(i).animate({ "left": x + "px", "top": y + "px" }, s, function () { moveObject(i) });
        }
    }

    //Default options
    $.fn.startMoving.defaults = { addCss: true, //if set to false you have to add 'display:block;position:absolute;' to the css of the moving object
        maxHeight: (window.innerHeight - 50), //height bound for moving
        maxWidth: (window.innerWidth - 50), //width bound for moving
        minDuration: 4000, //minimun length of animation
        deltaDuration: 5000 //maximum random number to be added to the minDuration
    };

})(jQuery);