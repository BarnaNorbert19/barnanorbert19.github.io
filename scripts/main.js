function toMain(fromPage = null)
{
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

}

function fromMain(path, toPage, async = true)
{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, async);
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

function changeText(path, async = true)
{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, async);
  xhr.onload = function()
  {
    if (this.status == 200)
    {
      document.getElementById("desc-container").innerHTML = this.responseText;
    }
  }

  xhr.send();
}

function changeButton(source1, source2)
{
  document.getElementById('short-text-button').addEventListener('click', () => 
    {
      changeText(source1, false);

      document.getElementById('long-text-button').addEventListener('click', () => 
      {
        changeText(source2, false);

        changeButton(source1, source2);
      });
    });
}

window.addEventListener('load', toMain(null));

document.getElementById('pathfinding-visualizer-page').addEventListener('click', () =>
{
  fromMain("/../Pages/Projects/pathfinding-visualizer-overview.html", "projects-page", false);
  
  changeButton("/../Pages/Projects/ShortTexts/pathfinding-visualizer-overview-short.html", "/../Pages/Projects/pathfinding-visualizer-overview.html");
  
});
document.getElementById('notes-page').addEventListener('click', () =>{ 
  fromMain("/../Pages/Projects/notes-overview.html", "projects-page", false);
  
});
document.getElementById('smaller-projects-page').addEventListener('click', () => fromMain("/../Pages/Projects/smaller-projects-overview.html", "projects-page"));
document.getElementById('about-me-page').addEventListener('click', () => fromMain("/../Pages/about-me-text.html", "about-me-page"));

document.getElementById('home-page').addEventListener('click', () => toMain());


$("#copyright-year").innerHTML = new Date().getFullYear();


var options = {
  strings: ['Barna Norbert', 'Rendszergazda'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
};

new Typed(".auto-input", options);