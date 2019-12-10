

export const renderHeader = function() {
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

    </section>`;

    
};


export const renderPage = function(player) {
    // TODO: Copy your code from a04 to render the hero card
   return `
   <div class="cardz" style="background: #009CFA" id=${player.PlayerCode}>
<div class="card-content" >
<div class="card-image"  style="background: white">
  <figure class="image is-4by3">
    <img src="${player.Img}" alt="Placeholder image">
  </figure>
</div>
  <div class="media" >
    <div class="media-content" >
      <p class="title is-4" style="color: white">${player.Player}</p>
      <p class="subtitle is-6" style="color: white" >${player.Tm}, ${player.FantPos}</p>
    </div>
  </div>

  <div class="content" style="color: white">
  Total Non-PPR Points: ${player.FantPt}
  <br>
  Total PPR Points: ${player.PPR}
  <br>
  Position Rank: ${player.PosRank}
    <br>
    <button class="add-button">Add to Team</button>  
    <button class="flip-button" data="${player.PlayerCode}">Flip Card</button>  

    
  </div>
  
</div>
</div>
`};



export const renderBackCard = function(player) {
return `
<div class="cardz" style="background: #009CFA" id=${player.PlayerCode}>
<div class="card-content"  >
<div class="content" style="color: white">
Passing Attempts: ${player.PassAtt}
<br>
Passing Yards: ${player.PassYds}
<br>
Passing TDs: ${player.PassTD}
 <br>
Rushing Attempts: ${player.RushAtt}
<br>
Rushing Yards: ${player.RushYds}
<br>
Rushing TDs: ${player.RushTD}
 <br>
 Receptions: ${player.Rec}
<br>
Receiving Yards: ${player.RecYds}
<br>
Receiving TDs: ${player.RecTD}
<br>
 <button class="add-button">Add to Team</button>  
 <button class="flip-back-button" data="${player.PlayerCode}">Flip Card</button>  

<br>
</br>
`
};



export const handleFlipSubmit = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead

    event.preventDefault();
    let PlayerCode = $(event.currentTarget).attr("data");

    let editPlayer = playerData.find((player) => player.PlayerCode == PlayerCode);
    let editPlayerForm = renderBackCard(editPlayer);
    
  $(`#${editPlayer.PlayerCode}`).replaceWith(editPlayerForm);
    

};

export const handleFlipBackSubmit = function(event) {
  // TODO: Render the hero edit form for the clicked hero and replace the
  //       hero's card in the DOM with their edit form instead

  event.preventDefault();
  let PlayerCode = $(event.currentTarget).attr("data");

  let editPlayer = playerData.find((player) => player.PlayerCode == PlayerCode);
  let PlayerForm = renderPage(editPlayer);
  
$(`#${editPlayer.PlayerCode}`).replaceWith(PlayerForm);
  

}; 





/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadPage = function(teamData) {

     // Grab a jQuery reference to the root HTML element
     const $root = $('#root');
      $root.append(renderHeader());
    
      $root.on("click", ".flip-button", handleFlipSubmit);
      $root.on("click", ".flip-back-button", handleFlipBackSubmit);
      
      
      
      
      let teamId = localStorage.getItem("teamId");
    
      
      playerData.forEach(element =>{
          if(element.Tm == teamId){
            $root.append(renderPage(element))
          }
        
      });

    
     
       
      
     
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadPage(teamData);
});