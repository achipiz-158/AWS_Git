$(document).ready(function(){

    // fixed searchbar
        var searchbar =  $("#searchBar");
        var viewport = 0;
        var mobile;

        viewport = $(window).width();
        mobile = isMobile();

        function isMobile(){
            return viewport < 768;
        };

        if (searchbar.length) {
            initialpos = parseInt(searchbar.offset().top);
                var initialpos;
                var searchbarwidth = 0;
                var didScroll;
                var windowscroll;
                var headerh;

                searchbarwidth = parseInt(searchbar.outerWidth());
                isMobile();
                hasScrolled();

                $( window ).resize(function() {
                    viewport = $(this).width();
                    searchbarwidth = parseInt(searchbar.outerWidth());
                    hasScrolled();
                });

                $(window).scroll(function(){
                    didScroll = true;
                });

                setInterval(function() {
                    if (didScroll) {
                        hasScrolled();
                        didScroll = false;
                    }
                }, 250);
        };        

        function hasScrolled() {
            windowscroll = $(this).scrollTop();

            if ($(searchbar).length) {
                var searchbar = searchbar.offset();            
                var offset = parseInt(searchbar.top);
            }
            headerh = parseInt($('.header').outerHeight());
            mobile = isMobile();
            

            if (mobile) { mobilefixed(); };
            if (!mobile) { desktopfixed(); };
            
        };

        function desktopfixed(){
            $(searchbar).removeClass('mobile');
            if (windowscroll > initialpos) {
                $(searchbar).addClass('fixed desktop');
                $(searchbar).css('top', headerh * 0.2);
            }else{
                $(searchbar).removeClass('fixed desktop');
                $("#searchBar .input-group").removeAttr('style');
            }

        };
        function mobilefixed(){
            $(searchbar).removeClass('desktop');

            if (windowscroll > (initialpos - headerh - 15)) {
                $(searchbar).addClass('fixed mobile');
                $(searchbar).css('top', headerh);
            }else{
                $(searchbar).removeClass('fixed');
                $("#searchBar .input-group").removeAttr('style');
            }

        };
    
});