function loadPage(path, loadInto, pushStateTitle, pushStateUrl)
{
    $(loadInto).load(path);
    history.pushState(path, pushStateTitle, pushStateUrl);
}

$(function()
{
    //Initial load based on document.referrer (redirect)
    var comingFrom = document.referrer.split("/")[3];

        switch(comingFrom) {
            case "Home":
              loadPage("/../Pages/index-text.html", '#desc-container', "Home Page", "./Home");
              break;
            case "About-me":
              loadPage("/../Pages/about-me-text.html", "#desc-container", "About me", "./About-me");
              break;
            case "Pathfinding":
              loadPage("/../Pages/Projects/pathfinding-visualizer-overview.html", '#desc-container', "Pathfinding visualizer", "./Pathfinding");
              break;
            case "Notes":
              loadPage("/../Pages/Projects/notes-overview.html", '#desc-container', "Notes", "./Notes");
              break;
            case "Class-register":
              loadPage("/../Pages/Projects/class-register-overview.html", '#desc-container', "Class register", "./Class-register");
              break;
              case "Smaller-projects":
              loadPage("/../Pages/Projects/smaller-projects-overview.html", '#desc-container', "Smaller projects", "./Smaller-projects");
              break;
            default:
              loadPage("/../Pages/index-text.html", '#desc-container', "Home Page", "./Home");
          }

    //Navbar home page onclick
    $('#home-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/index-text.html", '#desc-container', "Home Page", "./Home");
    });

    //Navbar about me page onclick
    $('#about-me-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/about-me-text.html", "#desc-container", "About me", "./About-me");
    });

    //Navbar pathfinding page onclick
    $('#pathfinding-visualizer-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/pathfinding-visualizer-overview.html", '#desc-container', "Pathfinding visualizer", "./Pathfinding");
    });

    //Navbar Notes page onclick
    $('#notes-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/notes-overview.html", '#desc-container', "Notes", "./Notes");
    });

    //Navbar class register page onclick
    $('#class-register-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/class-register-overview.html", '#desc-container', "Class register", "./Class-register");
    });

    //Navbar smaller proj. page onclick
    $('#smaller-projects-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/smaller-projects-overview.html", '#desc-container', "Smaller projects", "./Smaller-projects");
    });

    //Browser history
    $(window).on('popstate', function(e)
    {
        if (e.originalEvent.state != null)
            $('#desc-container').load(e.originalEvent.state);
        
        //if we run out of browser history, e.originalEvent.state will be null so we just redirect to home page
        else
            $('#desc-container').load('/../Pages/index-text.html');
    });
});