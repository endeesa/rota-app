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

function queryStringBuilder(params){
    let result = '';

    for(let key in params){
        result += `${key}=${params[key]}&`;
    }

    return result.slice(0,-1);
}


// HTTP Helpers
export function MakeAsyncGetRequest(endpoint, params, key){
    const http = new XMLHttpRequest();
    const queryStringParams = queryStringBuilder(params);
    const url = `${endpoint}?${queryStringParams}`;
    console.log('AWS lambda service caller - Check url: ', url);
    http.open('GET', url);
    // http.setRequestHeader('x-api-key', key);
    // http.setRequestHeader('Access-Control-Allow-Origin', '*');
    // Object.keys(localDB).length != parseInt(params.span)
    http.send();

    return new Promise( (resolve, reject)=> {

        http.onreadystatechange = function() {

            if (this.status == 200) {
                const response = JSON.parse(http.responseText);
                console.log('Remote Api response: ', response);
               
                resolve(response);
            }else{
                reject(`Sever error: Data not available at this moment. ${http.response}`);
            }
        }

    });



}
