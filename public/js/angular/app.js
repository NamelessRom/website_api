/**
 * Created by alex on 13.10.14.
 */
(function () {
    var app = angular.module('interface', ['device']);

    app.directive('navigationBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'snippets/directives/navigation_bar.html'
        };
    });

    app.directive('awesomeFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'snippets/directives/awesome_footer.html'
        }
    });

    app.directive('supportedDevices', function () {
        return {
            restrict: 'E',
            templateUrl: 'snippets/directives/supported_devices.html'
        }
    });

})();

$(document).ready(function () {
    var backToTop = $('#back-to-top');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });
    backToTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );

    $.material.init();
});
