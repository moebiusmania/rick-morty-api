
const http = (url = '', params = {}) => 
  fetch(url, params).then(r => r.json()); 

export {
  http
}