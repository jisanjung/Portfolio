$(document).ready(function() {

    // function calls
    smoothScroll();
    setMap();
    activeLink();
    modal();

    // smooth scroll
    function smoothScroll() {
        $('a[href*=\\#]').on('click', function(e){     
            e.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top - 100}, 800);
        });
    }

    // contact page, map
    function setMap() {
        var latLong = [39.95, -75.1619];
        var mymap = L.map('mapid').setView(latLong, 13);
            
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/           copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
        var marker = L.marker(latLong).addTo(mymap);
    }

    // activate nav link
    function activeLink() {
        var navLinks = $(".nav-link");

        $(window).on("scroll", function(e) {
            var fromTop = $(window).scrollTop();
            navLinks.each(function() {
                var currentLink = $(this);
                var element = $(currentLink.attr("href"));

                /*
                when the current scroll position is greater than the current element
                and the scroll position goes past the element position
                activate link
                otherwise, remove activation
                */
                if (element.position().top <= fromTop && element.position().top + element.height() > fromTop) {
                    currentLink.addClass("active");
                } else {
                    currentLink.removeClass("active");
                }
            });
        })
    }

    // modal
    function modal() {
        var project = $(".project img");
        var modal = $(".modal");
        var modalImg = $(".modal img");
        var closeBtn = $(".close");

        // when project is clicked, change the img src of the modal
         project.click(function(e) {
            var src = $(this).attr("src");
            var alt = $(this).attr("alt");

            modal.removeClass("none");
            modalImg.attr("src", src);
            modalImg.attr("alt", alt);
         });

         // close modal
         closeBtn.click(function() {
             modal.addClass("none");
         });
    }
});