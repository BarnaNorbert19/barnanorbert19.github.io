function toMain(fromPage = null)
{
  console.log("asd");
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "../Pages/index-text.html", false);
  
  xhr.onload = function()
  {
    if (this.status == 200)
    {
      document.getElementById("desc-container").innerHTML = this.responseText;
      var homePage = document.getElementById("home-page");
      if ( homePage.classList.contains('active') )
      {
        homePage.classList.add("active");
      }

      if (fromPage != null)
      {
        document.getElementById(toPage).classList.remove(fromPage);
      }
    }
  }

  xhr.send();

  var options = {
    strings: ['Barna Norbert', 'Rendszergazda'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  };

new Typed(".auto-input", options);
}

function fromMain(path, toPage)
{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.onload = function()
  {
    if (this.status == 200)
    {
      document.getElementById("desc-container").innerHTML = this.responseText;
      document.getElementById("home-page").classList.remove("active");
      document.getElementById(toPage).classList.add("active");
    }
  }

  xhr.send();
}

window.addEventListener('load', toMain(null));

document.getElementById('pathfinding-visualizer-page').addEventListener('click', () =>{fromMain("/../Pages/Projects/pathfinding-visualizer-overview.html", "projects-page")});
document.getElementById('notes-page').addEventListener('click', () =>{fromMain("/../Pages/Projects/notes-overview.html", "projects-page")});
document.getElementById('home-page').addEventListener('click', toMain);


document.getElementById("copyright-year").innerHTML = new Date().getFullYear();