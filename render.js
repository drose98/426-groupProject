
export const renderPage = function() {
    // TODO: Copy your code from a04 to render the hero card
    return `<section>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <a href="http://nfl.com">
      <img src="logo.png" width="100" height="100">
    </a>
    <div class="navbar-brand">

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" onclick="window.open('index.html','_self')">
        Home
      </a>

      <a class="navbar-item" onclick="window.open('players.html', '_self')">
        Players
      </a>

      <a class="navbar-item" onclick="window.open('teams.html', '_self')">
        Teams
      </a>

      <a class="navbar-item" onclick="window.open('myTeam.html', '_self')">
        My Team
      </a>
      <a class="navbar-item">
        <input class="input" type="text" placeholder="Search">
      </a>
    
      
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<div class="columns">
    <div class="column">
        <div class="tile is-ancestor is-vertical">
            <div class="tile is-primary is-vertical">
            <article class="tile is-child notification is-info">
            <p class="title"> Player of the Week: </p>
            <p class="subtitle">Lamar "Action" Jackson, QB, BAL</p>
            <figure class="image is-4by3">
            <img src="lamar.jpg">
            </figure>
            <p class="subtitle">623 yds passing, 5 TDs, 0 INT</p>
            <p class="subtitle">234 yds rushing, 3 TDS</p>
          </article>
         </div>
        <div class="tile is-primary is-vertical">
            </div>
        </div>
    </div>
  <div class="column">
    <div class="tile is-ancestor is-vertical">
            <div class="tile is-primary is-vertical">
            <article class="tile is-child notification is-primary">
            <p class="title"> Starts: </p>
            <p class="subtitle">Lamar Jackson, QB, BAL</p>
            <p class="subtitle">Cam Newton, QB, CAR</p>
            <p class="subtitle">Chris Carson, RB, SEA</p>
            <p class="subtitle">Marlon Mack, RB, IND</p>
            <p class="subtitle">Mike Evans, WR, TB</p>
            <p class="subtitle">Breshad Perriman, WR, TB</p>
          </article>
            </div>
        <div class="tile is-primary is-vertical">
        <article class="tile is-child notification is-danger">
        <p class="title"> Sits: </p>
        <p class="subtitle">Baker Mayfield, QB, CLE :(</p>
        <p class="subtitle">Matt Ryan, QB, ATL</p>
        <p class="subtitle">Nick Chubb, RB, CLE</p>
        <p class="subtitle">Devonta Freeman, RB, ATL</p>
        <p class="subtitle">Will Fuller V, WR, HOU</p>
        <p class="subtitle">Robby Anderson, WR, NYJ</p>
        <p class="subtitle">George Kittle, TE, SF</p>
        </article>
            </div>
        </div>
  </div>
  <div class="column">
    <a class="twitter-timeline" href="https://twitter.com/NFLFantasy?ref_src=twsrc%5Etfw">Tweets by NFLFantasy</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</div>
    </section>`;

    //
};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadPage = function() {

     // Grab a jQuery reference to the root HTML element
     const $root = $('#root');

     
     $root.append(renderPage());
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadPage();
});
