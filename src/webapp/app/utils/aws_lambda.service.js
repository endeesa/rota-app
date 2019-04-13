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
    if( !localStorage.getItem('fullSchedule')){
        http.send();
    }else{
        const el = document.getElementById(responseContainerId);
        el.innerText = localStorage.getItem('fullSchedule');
        return localStorage.getItem('fullSchedule');
    }
    

    // http.addEventListener("readystatechange", processRequest, false);
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // time to partay!!!
            const response = JSON.parse(http.responseText);
            console.log(response);
            localStorage.setItem('fullSchedule', JSON.stringify(response));
            
            const el = document.getElementById(responseContainerId);
            el.innerText = JSON.stringify(response, null, 4);
            return JSON.stringify(response)
        }
    }
}
