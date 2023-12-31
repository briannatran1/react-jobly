const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = null;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. Returns {company} */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Filter by name for all companies. Returns [{company}, ...] */
  static async filterCompanies(searchTerm) {
    const searchParam = searchTerm === '' ? {} : { nameLike: searchTerm };

    let res = await this.request(`companies`, searchParam);
    return res.companies;
  }

  /** Filter by title for all jobs. Returns [{job}, ...] */
  static async filterJobs(searchTerm) {
    const searchParam = searchTerm === '' ? {} : { title: searchTerm };

    let res = await this.request(`jobs`, searchParam);
    return res.jobs;
  }

  /** Returns token upon logging in */
  static async login(data) {
    let res = await this.request(`auth/token`, data, 'POST');
    return res.token;

  }

  /** Returns token upon signing up  */
  static async register(data) {
    let res = await this.request(`auth/register`, data, 'POST');
    return res.token;
  }

  /** Returns user information */
  static async getUserData(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }

  /** Updates user by sending data as { firstName, lastName, password, email } */
  static async updateUserProfile(data) {
    const username = data.username;
    delete data.username;

    let res = await this.request(`users/${username}`, data, 'PATCH');

    return res;
  }

  /** applies to selected job when clicking apply */
  static async applyToJob( username, jobId) {

    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, 'POST');
    return res;
  }
}

export default JoblyApi;