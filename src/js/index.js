$(document).ready(function() {

    // function calls
    smoothScroll();
    setMap();
    activeLink();
    modal();

    // smooth scroll
    function smoothScroll() {
        $('.smooth-scroll a[href^="#"]').on('click', function(e){     
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
        var closeBtn = $(".close");
        var moreInfo = $(".project .tint .btn");

        // when project is clicked, change the img src of the modal
         project.click(function() {
            modalObj.open($(this));
            modalObj.displayInfo($(this));
         });

         // when "more info" button is clicked, change the img src of the modal
         moreInfo.click(function() {
            modalObj.open($(this));
            modalObj.displayInfo($(this));
         });

         // close modal
         closeBtn.click(function() {
            modalObj.close();
         });
    }

    // modal object
    var modalObj = {
        var: {
            modal: $(".modal"),
            modalImg: $(".modal img"),
            title: $(".modal-title"),
            stack: $(".tech-stack"),
            description: $(".modal-info .description"),
            srcCode: $("#srcCode"),
            link: $("#link")
        },
        open: function(element) {
            var src = element.attr("src");
            var alt = element.attr("alt");

            this.var.modal.removeClass("none");
            this.var.modalImg.attr("src", src);
            this.var.modalImg.attr("alt", alt);
        },
        close: function() {
            this.var.modal.addClass("none");
        },
        displayInfo: function(element) {
            var projNum = element.attr("data-proj");

            switch(projNum) {
                case "1": 
                    this.var.title.text("Glitter and Polish");
                    this.var.stack.text("HTML, CSS, jQuery, PHP, MySQL");
                    this.var.description.text("Promotional website for a client that also serves as the booking system for the business.");
                    this.var.srcCode.attr("href", "https://github.com/jisanjung/Glitter-and-Polish");
                    this.var.link.attr("href", "https://glitterpolishnails.com/");
                    break;
                case "2":
                    this.var.title.text("Joo's Burgers");
                    this.var.stack.text("HTML, SASS, JavaScript (ES6)");
                    this.var.description.text("Restaurant site for a potential client in need of a way to promote their business.");
                    this.var.srcCode.attr("href", "https://github.com/jisanjung/Joos");
                    this.var.link.attr("href", "https://jisanjung.github.io/Joos/");
                    break;
                case "3": 
                    this.var.title.text("COVID-19 Dashboard");
                    this.var.stack.text("ReactJS, ChartJS, SASS");
                    this.var.description.text("A dashboard web application that displays and visualizes live data for COVID-19.");
                    this.var.srcCode.attr("href", "https://github.com/jisanjung/COVID-19-Data-Reports");
                    this.var.link.attr("href", "https://jisanjung.github.io/COVID-19-Data-Reports/");
            }
        }
    }
});