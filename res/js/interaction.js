(function () {

    var header = document.getElementById("header");
    var headerNav = document.getElementById("sideNav");
    var navToggle = document.getElementById("navToggle");
    var goUpButton = document.getElementById("goUp");



    navToggle.addEventListener("click", function () {
        toggleClass(headerNav, "navToggler");
    })


    window.addEventListener("scroll", function (e) {
        var yOfsset = window.pageYOffset;

        if (yOfsset > 150) {
            addClass(header, "scrolled");
            addClass(headerNav, "scrolled");
        } else {
            removeClass(header, "scrolled");
            removeClass(headerNav, "scrolled");
        }
    })
    function toggleClass(element, className) {
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }
    function addClass(element, className) {
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1) {
            classList.push(className);
            classList = classList.join(" ");
            element.className = classList;
        }
    }
    function removeClass(element, className) {
        var classList = element.className.split(" ");
        if (classList.indexOf(className) !== -1) {
            classList = classList.filter(function (e) {
                return e !== className
            })
            element.className = classList;
        }
    }
})();