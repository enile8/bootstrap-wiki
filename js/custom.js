$( document ).ready(function() {
    //Stack menu when collapsed
    $('#bs-example-navbar-collapse-2').on('show.bs.collapse', function() {
        $('.pl').addClass('nav-stacked');
        $('.pl').removeClass('pull-right');
        console.log('fired addClass');
    });

    //Unstack menu when not collapsed
    $('#bs-example-navbar-collapse-2').on('hide.bs.collapse', function() {
        $('.pl').removeClass('nav-stacked');
        $('.pl').addClass('pull-right');
        console.log('fired removeClass');
    });
});