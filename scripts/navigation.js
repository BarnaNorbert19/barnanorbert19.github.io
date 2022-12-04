function loadPage(path, loadInto, pushStateTitle, pushStateUrl)
{
    $(loadInto).load(path);
    history.pushState(path, pushStateTitle, pushStateUrl);
}

function loadPageSynchronously(path, loadInto, pushStateTitle, pushStateUrl)
{
    $.ajax({
        type: "GET",
        url: path,
        dataType: "text",
        async: false,
        success : function(data) {
              $(loadInto).html(data);
        }
  });

    history.pushState(path, pushStateTitle, pushStateUrl);
}

function loadPageSynchronously(path, loadInto)
{
    $.ajax({
        type: "GET",
        url: path,
        dataType: "text",
        async: false,
        success : function(data) {
              $(loadInto).html(data);
        }
  });
}

function changeActivePage(objectToSet, objectToRemoveFrom)
{
    if ($(objectToRemoveFrom).hasClass("active"))
        $(objectToRemoveFrom).removeClass("active");

    if (!$(objectToSet).hasClass("active"))
        $(objectToSet).addClass("active");
}

function setTextChangeButton(source1, source2)
{
  $('#short-text-button').on('click', function(e)
    {
      loadPageSynchronously(source1, '#desc-container');

      $('#long-text-button').on('click', function(e)
      {
        loadPageSynchronously(source2, '#desc-container');

        setTextChangeButton(source1, source2);
      });
    });
}

$(function()
{
    //Initial load based on document.referrer (redirect)
    var comingFrom = document.referrer.split("/")[3];
    let activePage = '#home-page';

        switch(comingFrom) {
            case "Home":
              loadPage("/../Pages/index-text.html", '#desc-container', "Home Page", "./Home");
              changeActivePage('#home-page', activePage);
              activePage = '#home-page';
              break;
            case "About-me":
              loadPage("/../Pages/about-me-text.html", "#desc-container", "About me", "./About-me");
              changeActivePage('#about-me-page', activePage);
              activePage = '#about-me-page';
              break;
            case "Pathfinding":
                loadPageSynchronously("/../Pages/Projects/pathfinding-visualizer-overview.html", '#desc-container', "Pathfinding visualizer", "./Pathfinding");
        
                changeActivePage('#projects-page', activePage);
                activePage = '#projects-page';
        
                setTextChangeButton("/../Pages/Projects/ShortTexts/pathfinding-visualizer-overview-short.html", "/../Pages/Projects/pathfinding-visualizer-overview.html");
                break;
            case "Notes":
              loadPage("/../Pages/Projects/notes-overview.html", '#desc-container', "Notes", "./Notes");
              changeActivePage('#projects-page', activePage);
              activePage = '#notes-page';
              break;
            case "Class-register":
              loadPage("/../Pages/Projects/class-register-overview.html", '#desc-container', "Class register", "./Class-register");
              changeActivePage('#projects-page', activePage);
              activePage = '#projects-page';
              break;
              case "Smaller-projects":
              loadPage("/../Pages/Projects/smaller-projects-overview.html", '#desc-container', "Smaller projects", "./Smaller-projects");
              changeActivePage('#projects-page', activePage);
              activePage = '#projects-page';
              break;
            default:
              loadPage("/../Pages/index-text.html", '#desc-container', "Home Page", "./Home");
              changeActivePage('#home-page', activePage);
              activePage = '#home-page';
          }

    //Navbar home page onclick
    $('#home-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/index-text.html", '#desc-container', "Home Page", "./Home");
        changeActivePage('#home-page', activePage);
        activePage = '#home-page';
        
    });

    //Navbar about me page onclick
    $('#about-me-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/about-me-text.html", "#desc-container", "About me", "./About-me");
        changeActivePage('#about-me-page', activePage);
        activePage = '#about-me-page';
    });

    //Navbar pathfinding page onclick
    $('#pathfinding-visualizer-page').on('click', function(e)
    {
        e.preventDefault();
        loadPageSynchronously("/../Pages/Projects/pathfinding-visualizer-overview.html", '#desc-container', "Pathfinding visualizer", "./Pathfinding");
        
        changeActivePage('#projects-page', activePage);
        activePage = '#projects-page';

        setTextChangeButton("/../Pages/Projects/ShortTexts/pathfinding-visualizer-overview-short.html", "/../Pages/Projects/pathfinding-visualizer-overview.html");
        });

    //Navbar Notes page onclick
    $('#notes-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/notes-overview.html", '#desc-container', "Notes", "./Notes");
        changeActivePage('#projects-page', activePage);
        activePage = '#notes-page';
    });

    //Navbar class register page onclick
    $('#class-register-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/class-register-overview.html", '#desc-container', "Class register", "./Class-register");
        changeActivePage('#projects-page', activePage);
        activePage = '#projects-page';
    });

    //Navbar smaller proj. page onclick
    $('#smaller-projects-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/smaller-projects-overview.html", '#desc-container', "Smaller projects", "./Smaller-projects");
        changeActivePage('#projects-page', activePage);
        activePage = '#projects-page';
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