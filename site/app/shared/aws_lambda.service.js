// Handles calls to API to fetch and update rooster
// todo: Use modern fetch API
export function MakeAsyncGetRequest(endpoint, params, key) {

  const http = new XMLHttpRequest();
  const queryStringParams = queryStringBuilder(params);
  const url = `${endpoint}?${queryStringParams}`;
  http.open("GET", url);
  http.send();

  return new Promise((resolve, reject) => {
    http.onreadystatechange = function() {
      if (this.status == 200) {
        const response = JSON.parse(http.responseText);
        resolve(response);
      } else {
        reject(`Sever error - Please try again.`);
      }
    };
  });

  function queryStringBuilder(params) {
    let result = "";

    for (let key in params) {
      result += `${key}=${params[key]}&`;
    }
    return result.slice(0, -1);
  }
}
