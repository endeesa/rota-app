// Handles calls to API to fetch and update rooster

export const GenerateNewRoster = () =>{
    return null;
}


export const GetDailyRoster = (groupId, UID)=> {
    return null;
}

export const GetMothlyRoster = (groupId, UID) => {
    return null;
}



// HTTP Helpers
function MakeAsyncGetRequest(endpoint){
    const http = new XMLHttpRequest();
    http.open('GET', endpoint);
    httpRequest.setRequestHeader('x-api-key', 'api-key*****');
    http.send();

    // http.addEventListener("readystatechange", processRequest, false);
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // time to partay!!!
            const response = JSON.parse(http.responseText);
            console.log(response);
        }
    }
}

