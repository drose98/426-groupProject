
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
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Players
      </a>

      <a class="navbar-item">
        Teams
      </a>

      <a class="navbar-item">
        My Team
      </a>
      <a class="navbar-item">
        Search
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
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Copy your code from a04 to render the hero edit form
    return `<form id="${hero.id}">
    Hero Name:
    <input type="text" id="ename" value="${hero.name}">
    <br>
    First Name: 
    <input type="text" id="efirst" value="${hero.first}">
    <br>
    Last Name:
    <input type="text" id="elast" value="${hero.last}">
    <br>
    Description:
    <textarea type="text" id="edescription">${hero.description}</textarea>
    <br>
    First Seen:
    <input type="text" id="efirstseen" value="${hero.firstSeen}">
    <br>
    <button class="submitbutton" type="submit" data=${hero.id} onclick="handleEditFormSubmit(${hero})">Save</button>
    <button class="cancelbutton" type="button" data=${hero.id} onclick="handleCancelButtonPress(${hero})">Cancel</button>
    </form>`;
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead

    event.preventDefault();
    let heroId = $(event.currentTarget).attr("data");

    const $root = $("#root");

    let editHero = heroicData.find((hero) => hero.id == heroId);

    let editHeroForm = renderHeroEditForm(editHero);
    
    $(`#${editHero.id}`).replaceWith(editHeroForm);
    

};




/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead
    event.preventDefault();
    let heroId = $(event.currentTarget).attr("data");

    const $root = $("#root");
   
    let editHero = heroicData.find((hero) => hero.id == heroId);

    let editHeroCard = renderHeroCard(editHero);
    
    $(`#${editHero.id}`).replaceWith(editHeroCard);
};




export const handleEditFormSubmit = function(event) {
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead
    event.preventDefault();
    let heroId = $(event.currentTarget).attr("data");
    //alert(heroId);
    const $root = $("#root");
    let editHero = heroicData.find((hero) => hero.id == heroId);

    editHero.name = $('#ename').val();
    editHero.first = $('#efirst').val();
    editHero.last = $('#elast').val();
    editHero.firstSeen = new Date($('#efirstseen').val());
    editHero.description = $('#edescription').val();
    
    let editHeroCard = renderHeroCard(editHero);
    $(`#${editHero.id}`).replaceWith(editHeroCard);
};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadPage = function(pages) {

     // Grab a jQuery reference to the root HTML element
     const $root = $('#root');

     
     $root.append(renderPage());


    $("#root").on("click", ".editbutton", handleEditButtonPress);

    $("#root").on("click", ".submitbutton", handleEditFormSubmit);

    $("#root").on("click", ".cancelbutton", handleCancelButtonPress);
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadPage();
});
