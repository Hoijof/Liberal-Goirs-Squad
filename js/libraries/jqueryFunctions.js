/*
 * Refreshes the given selector
*/
jQuery.fn.refresh = function() {
    return $(this.selector);
};

/*
 * Centers the actual element given his parent
*/
jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });

    return this;
};