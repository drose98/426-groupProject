
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
  <div id="pageheader">
    <nav class ="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li><a href="players.html" >All Players</a></li>
        <li ><a href="qb.html" >Quarterbacks</a></li>
        <li><a href="rb.html">Runningbacks</a></li>
        <li><a href="wr.html" >Wide Receivers</a></li>
        <li class="is-active"><a href="te.html" aria-current="page">Tight Ends</a></li>
      </ul>
    </nav>
  </div>
  </br>
  
  <div id="pageheader">
  </div>
    </section>`;
  
    
  };
  
  export const renderPage = function(player, team) {
      // TODO: Copy your code from a04 to render the hero card
     return `
     <div class="column is-one-quarter" style="background: ${team.Primary}; margin: 1%; width: 31%" id=${player.PlayerCode}>
  <div class="card-content" style="text-align: center" >
  <div class="card-image"  style="background: white">
    <figure class="image">
      <img src="${player.Img}" alt="Placeholder image">
    </figure>
  </div>
    <div class="media" >
      <div class="media-content" >
        <p class="title is-4" style=" text-align: center; color: ${team.Secondary}">${player.Player}</p>
        <p class="subtitle is-6" style="text-align: center; color: ${team.Secondary}" >${player.Tm}, ${player.FantPos}</p>
      </div>
    </div>
  
    <div class="content" style="color: white">
    Total Non-PPR Points: ${player.FantPt}
    <br>
    Total PPR Points: ${player.PPR}
    <br>
    Position Rank: ${player.PosRank}
      <br></br>
      <button id="add-button" class="button is-black">Add to Team</button>  
      <button id="flip-button" class="button is-black" data="${player.PlayerCode}">Flip Card</button>  
  
      
    </div>
    
  </div>
  </div>
  `};
  
  
  
  export const renderBackCard = function(player, team) {
    return `
  <div class="column is-one-quarter " style="background: ${team.Primary}; margin: 1%; width: 31%" id=${player.PlayerCode}>
  <div class="card-content" style="text-align: center" >
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
  <br></br>
   <button id="add-button" class="button is-black">Add to Team</button>  
   <button id="flip-back-button" class="button is-black" data="${player.PlayerCode}">Flip Card</button>  
  
  
  </div>
  </div>
  <img src="${team.Img}" class="image container is-128x128">
  </div>
  `
  };
  
  
  
  
  
  
  /**
   * Handles the JavaScript event representing a user clicking on the "edit"
   *     button for a particular hero.
   * @param event  The JavaScript event that is being handled
   */
  export const handleFlipSubmit = function(event) {
      // TODO: Render the hero edit form for the clicked hero and replace the
      //       hero's card in the DOM with their edit form instead
  
      event.preventDefault();
      let PlayerCode = $(event.currentTarget).attr("data");
  
      let editPlayer = playerData.find((player) => player.PlayerCode == PlayerCode);
      let team = teamData.find((t) => t.Team == editPlayer.Tm);
      let editPlayerForm = renderBackCard(editPlayer, team);
      
    $(`#${editPlayer.PlayerCode}`).replaceWith(editPlayerForm);
      
  
  };
  
  export const handleFlipBackSubmit = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead
  
    event.preventDefault();
    
    let PlayerCode = $(event.currentTarget).attr("data");
  
    let editPlayer = playerData.find((player) => player.PlayerCode == PlayerCode);
    let team = teamData.find((t) => t.Team == editPlayer.Tm);
    let PlayerForm = renderPage(editPlayer, team);
    
  $(`#${editPlayer.PlayerCode}`).replaceWith(PlayerForm);
    
  
  };
  
  export const loadPage = function(players) {
  
     const $root = $('#root');
     $("#root").on("click", "#flip-button", handleFlipSubmit);
     $("#root").on("click", "#flip-back-button", handleFlipBackSubmit);
  
      $root.append(renderHeader);
      $('#pageheader').append('<div class="columns is-multiline" id="addhere" style="margin-left: 0.025%">');
      let team;
      
       players.forEach(element => {
        let team = teamData.find((t) => t.Team == element.Tm);
        if(element.FantPos == "TE"){
            $('#addhere').append(renderPage(element, team));
        }
        
      });
  
      $('#addhere').append('</div>');
  
  };
  
  
  
  /**
   * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
   */
  $(function() {
      loadPage(playerData);
  });
  