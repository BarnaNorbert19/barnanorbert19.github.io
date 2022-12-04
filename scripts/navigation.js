function loadHomePage()
{
    var path = '/../Pages/index-text.html';

    $('#desc-container').load(path);
    history.pushState(path, "Home Page", "./Home");
}

function loadAboutMe()
{
    var path = '/../Pages/about-me-text.html';

    $('#desc-container').load(path);
    history.pushState(path, "About me", "./About-me");
}

$(function()
{
    //Initial home page load
    loadHomePage();

    //Navbar about me page onclick
    $('#about-me-page').on('click', function(e)
    {
        e.preventDefault();
        loadAboutMe();
    });

    //Navbar home page onclick
    $('#home-page').on('click', function(e)
    {
        e.preventDefault();
        loadHomePage();
    });

    //Browser history
    $(window).on('popstate', function(e)
    {
        if (e.originalEvent.state != null)
            $('#desc-container').load(e.originalEvent.state);
        
        else
            $('#desc-container').load('/../Pages/index-text.html');
    });

    
});