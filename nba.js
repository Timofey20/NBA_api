
var ans = [];
function GetPurums(href='https://ru.global.nba.com/stats2/league/teamstats.json?conference=All&division=All&locale=ru&season=2021&seasonType=2', key="4fe1ab8cdb16439d9c7b80953dbaa71a") {
    // var myHeaders = new Headers();
    // myHeaders.append("Ocp-Apim-Subscription-Key", key);

    var requestOptions = {
        method: 'GET',
        // headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://cors-anywhere.herokuapp.com/"+href, requestOptions)
    .then(response => response.json())
    // .then(res => console.log(res))
    .then(result => result.payload.teams.forEach(function(item, index, array) {
        console.log(item);
        ans.push(item)
      }))
    .catch(error => console.log('error', error));
}

function CreateStats(){
    ans.forEach((item, index)=>{
        let z = document.createElement('p');
        z.innerHTML = item.profile.city;
        document.querySelector('.text').appendChild(z)
        let q = document.createElement('p'); 
        q.innerHTML = (item.statAverage.rebsPg) ;
        document.querySelector('.row').appendChild(q)
    })
}