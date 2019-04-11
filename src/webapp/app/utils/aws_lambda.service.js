// Handles calls to API to fetch and update rooster

// export const GenerateNewRoster = () =>{
//     return null;
// }


// export const GetDailyRoster = (groupId, UID)=> {
//     return null;
// }

// export const GetMothlyRoster = (groupId, UID) => {
//     return null;
// }
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



// HTTP Helpers
export function MakeAsyncGetRequest(endpoint, key, responseContainerId){
    const http = new XMLHttpRequest();
    http.open('GET', endpoint);
    // http.setRequestHeader('x-api-key', key);
    // http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.send();

    // http.addEventListener("readystatechange", processRequest, false);
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // time to partay!!!
            const response = JSON.parse(http.responseText);
            console.log(response);
            
            const el = document.getElementById(responseContainerId);
            el.innerText = JSON.stringify(response, null, 4);
        }
    }
}

// MakeAsyncGetRequest('https://1ci21hwkz6.execute-api.us-west-2.amazonaws.com/default/roster_gen_test', 'wg1D9Q5bnI4c4Nok1LLmH1Xy6WSX01l44k8Bfd7k')