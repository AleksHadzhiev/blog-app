import { SignInUser, SignUpUser } from "@/types/userObjects";
import ApiService from "./axios";

export async function registerUser(signUpUser: SignUpUser): Promise<string | null> {
  const apiService = new ApiService('api');
  try {
    const url = `/users/register`;
    const response = await apiService.postWithoutAuthorization(url, signUpUser);
    return response.data
  } catch (error) {
    console.error('Error:', error);
    return null
  }
}

export async function signin(signINUser: SignInUser): Promise<string | null>{
  const apiService = new ApiService('api');
  try {
    const url = `/users/signin`;
    const response = await apiService.postWithoutAuthorization(url, signINUser);
    if (response.data.access_token){
      const userId = response.data.user_id
      localStorage.setItem('userId', userId)
      const accessToken = response.data.access_token;
      localStorage.setItem('authToken', accessToken)
      apiService.setAuthToken(accessToken)
    }
    return response.data
  } catch (error) {
    console.error('Error:', error);
    return null
  }
}