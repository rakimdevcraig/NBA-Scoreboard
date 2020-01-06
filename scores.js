//don't forget I can look at the api in the network tab of developer tools just by refreshing 
//the page and clicking scoreboard json right after it loads and look at the data 
//under the preview tab so the json will be organized

const axios = require('axios');

let url = 'https://data.nba.net/prod/v1/multi/scoreboard.json'
axios.get(url)
  .then(function (response) {
    const html = response.data;
    let array = []
    let games = html.dates[0].games
    for(let i = 0; i < games.length; i++){
        let visitor = (games[i].vTeam.triCode)
        let home = (games[i].hTeam.triCode)
        let visitorScore = (games[i].vTeam.score)
        let homeScore = (games[i].hTeam.score)

        if(process.argv[2] === visitor || home === process.argv[2]){
          
          console.log(`Yes ${process.argv[2]} played tonight the score is:  ${home}   ${homeScore}  ${visitor} ${visitorScore}`)

        }if(!process.argv[2]){
          console.log(` ${home}  ${homeScore}  ${visitor} ${visitorScore}`)
        }

    }

    let vTeam = html.dates[1].games[0].vTeam.triCode
    let vScore = html.dates[1].games[0].vTeam.score
    let hTeam = html.dates[1].games[0].hTeam.triCode
    let hScore = html.dates[1].games[0].hTeam.score

    // console.log(html.dates[1])
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })