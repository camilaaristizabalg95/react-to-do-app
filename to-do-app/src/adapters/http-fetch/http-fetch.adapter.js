class HttpFetchAdapter {
  constructor(baseURL){
    this.baseUrl = baseURL;
  }

  get(endpoint, options = {}) {
    return fetch(this.baseUrl + endpoint, {
      ...options,
      method: 'GET'
    }).then(response => response.json())
  }

  post(endpoint, options = {}) {
    return fetch(this.baseUrl + endpoint, {
      ...options,
      method: 'POST'
    }).then(response => response.json())
  }

  put(endpoint, options = {}) {
    return fetch(this.baseUrl + endpoint, {
      ...options,
      method: 'PUT'
    }).then(response => response.json())
  }

  delete(endpoint, options = {}) {
    return fetch(this.baseUrl + endpoint, {
      ...options,
      method: 'DELETE',
    }).then(response => response.json())
  }
}

export default HttpFetchAdapter;