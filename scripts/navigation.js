let activePage = '#home-page';

function loadPage(path, loadInto, pushStateTitle, pushStateUrl)
{
    $(loadInto).load(path);
    history.pushState(path, pushStateTitle, pushStateUrl);
}

function loadPageSynchronouslyWithPushState(path, loadInto, pushStateTitle, pushStateUrl)
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

function pageAction(comingFrom, push = true)
{
  switch(comingFrom) 
        {
            case "Home":
              var path = "/../Pages/index-text.html";
              var loadInto = '#desc-container';

              if (push)
                loadPage(path, loadInto, "Home Page", "./Home");
              else
                $(loadInto).load(path);

              changeActivePage('#home-page', activePage);
              activePage = '#home-page';
              break;

            case "About-me":
              var path = "/../Pages/about-me-text.html";
              var loadInto = "#desc-container";

              if (push)
                loadPage(path, loadInto, "About me", "./About-me");
              else
                $(loadInto).load(path);

              changeActivePage('#about-me-page', activePage);
              activePage = '#about-me-page';
              break;

            case "Pathfinding-overview":
              var path = "/../Pages/Projects/pathfinding-visualizer-overview.html";
              var loadInto = '#desc-container';

              if (push)
                loadPageSynchronouslyWithPushState(path, loadInto, "Pathfinding visualizer", "./Pathfinding-overview");
              else 
                loadPageSynchronously(path, loadInto);
              setTextChangeButton("/../Pages/Projects/ShortTexts/pathfinding-visualizer-overview-short.html", "/../Pages/Projects/pathfinding-visualizer-overview.html");
        
              changeActivePage('#projects-page', activePage);
              activePage = '#projects-page';
              break;

            case "Notes-overview":
            var path = "/../Pages/Projects/notes-overview.html";
            var loadInto = '#desc-container';

              if (push)
                loadPage(path, loadInto, "Notes", "./Notes-overview");
              else
                $(loadInto).load(path);

            changeActivePage('#projects-page', activePage);
            activePage = '#notes-page';
            break;

            case "Class-register-overview":
              var path = "/../Pages/Projects/class-register-overview.html";
              var loadInto = '#desc-container';

              if (push)
                loadPage(path, loadInto, "Class register", "./Class-register-overview");
              else
                $(loadInto).load(path);

              changeActivePage('#projects-page', activePage);
              activePage = '#projects-page';
              break;
              case "Smaller-projects-overview":
              loadPage("/../Pages/Projects/smaller-projects-overview.html", '#desc-container', "Smaller projects", "./Smaller-projects-overview");
              changeActivePage('#projects-page', activePage);
              activePage = '#projects-page';
              break;
            default:
              var path = "/../Pages/index-text.html";
              var loadInto = '#desc-container';

              if (push)
                loadPage(path, loadInto, "Home Page", "./Home");
              else
                $(loadInto).load(path);
              changeActivePage('#home-page', activePage);
              activePage = '#home-page';
          }

}

$(function()
{
    //Initial load based on document.referrer (redirect)
    var comingFrom = document.referrer.split("/")[3];

    pageAction(comingFrom);

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
        loadPageSynchronouslyWithPushState("/../Pages/Projects/pathfinding-visualizer-overview.html", '#desc-container', "Pathfinding visualizer", "./Pathfinding-overview");

        setTextChangeButton("/../Pages/Projects/ShortTexts/pathfinding-visualizer-overview-short.html", "/../Pages/Projects/pathfinding-visualizer-overview.html");
        
        changeActivePage('#projects-page', activePage);
        activePage = '#projects-page';
    });

    //Navbar Notes page onclick
    $('#notes-page').on('click', function(e)
    {
        e.preventDefault();
        loadPage("/../Pages/Projects/notes-overview.html", '#desc-container', "Notes", "./Notes-overview");
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
        {
            //$('#desc-container').load(e.originalEvent.state);
            pageAction(location.href.split('/')[3], false);
            
        }
        
        //if we run out of browser history, e.originalEvent.state will be null so we just redirect to home page
        else
        {
            $('#desc-container').load('/../Pages/index-text.html');
        }
    });
});