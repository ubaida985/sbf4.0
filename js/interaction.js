(function () {

    var sideNav = document.getElementById("sideNav");
    var headerNav = document.getElementById("headerNav");
    var navToggle = document.getElementById("navToggle");

    var trainingToggle = document.getElementById("trainingToggle");
    var training = document.getElementById("training");
    var training1Toggle = document.getElementById("training1Toggle");
    var training1 = document.getElementById("training1");
    var training2Toggle = document.getElementById("training2Toggle");
    var training2 = document.getElementById("training2");
    var training3Toggle = document.getElementById("training3Toggle");
    var training3 = document.getElementById("training3");
    var training4Toggle = document.getElementById("training4Toggle");
    var training4 = document.getElementById("training4");
    var training5Toggle = document.getElementById("training5Toggle");
    var training5 = document.getElementById("training5");
    var training6Toggle = document.getElementById("training6Toggle");
    var training6 = document.getElementById("training6");

    var socials = document.getElementById("socials");

    var goUpButton = document.getElementById("goUp");



    navToggle.addEventListener("click", function () {
        toggleClass(sideNav, "navToggler");
        addClass(sideNav, "scrolled");
        addClass(headerNav, "scrolled");
    });

    trainingToggle.addEventListener("click", function () {
        toggleClass(training, "show");
    });
    training1Toggle.addEventListener("click", function () {
        toggleClass(training1, "show");
    });
    training2Toggle.addEventListener("click", function () {
        toggleClass(training2, "show");
    });
    training3Toggle.addEventListener("click", function () {
        toggleClass(training3, "show");
    });
    training4Toggle.addEventListener("click", function () {
        toggleClass(training4, "show");
    });
    training5Toggle.addEventListener("click", function () {
        toggleClass(training5, "show");
    });
    training6Toggle.addEventListener("click", function () {
        toggleClass(training6, "show");
    });

    window.addEventListener("scroll", function (e) {
        var yOfsset = window.pageYOffset;

        if (yOfsset > 70) {
            addClass(headerNav, "scrolled");
            addClass(sideNav, "scrolled");
            addClass(socials, "scrolled");
        } else {
            removeClass(headerNav, "scrolled");
            removeClass(sideNav, "scrolled");
            removeClass(socials, "scrolled");
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