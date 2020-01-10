//under the preview tab so the json will be organized

const axios = require('axios');

let url = 'https://data.nba.net/prod/v1/multi/scoreboard.json'
axios.get(url)
  .then(function (response) {
    const html = response.data;
    let games = html.dates[1].games
    for (let i = 0; i < games.length; i++) {
      let visitor = (games[i].vTeam.triCode)
      let home = (games[i].hTeam.triCode)
      let visitorScore = (games[i].vTeam.score)
      let homeScore = (games[i].hTeam.score)

      if (process.argv[2] === visitor || home === process.argv[2]) {

        console.log(`Yes ${process.argv[2]} played tonight the score is:  ${home}   ${homeScore}  ${visitor} ${visitorScore}`)

      } if (!process.argv[2]) {
        console.log(` ${home}  ${homeScore}  ${visitor} ${visitorScore}`)
      }

    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })