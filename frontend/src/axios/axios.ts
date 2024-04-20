import axios, { AxiosInstance, AxiosResponse } from 'axios';

class ApiService {
    private instance: AxiosInstance;

    constructor(baseURL: string) {
      this.instance = axios.create({
        baseURL: baseURL,
        withCredentials: true // Enable sending cookies
      });
  
      // Check for existing authentication token in local storage
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        this.setAuthToken(authToken);
      }
    }

    public setAuthToken(authToken: string) {
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
      }
    

  public async postWithoutAuthorization(url: string, data: any): Promise<AxiosResponse<any>> {
    return this.instance.post(url, data);
  }

  
  public async postWithAuthorization(url: string, data: any, authToken: string): Promise<AxiosResponse<any>> {
    return this.instance.post(url, data, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
  }

  public getWithAuthorization(url: string, authToken: string): Promise<AxiosResponse<any>> {
    return this.instance.get(url, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
  }

  public getWithoutAuthorization(url: string): Promise<AxiosResponse<any>> {
    return this.instance.get(url);
  }
}

export default ApiService;
