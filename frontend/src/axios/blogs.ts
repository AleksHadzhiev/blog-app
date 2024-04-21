import { CreateBlog, EditBlog } from "@/types/blogObjects";
import ApiService from "./axios";

export async function createBlog(blogData: CreateBlog) {
  const apiService = new ApiService('api');
  const blog = {
    "title":blogData.title,
    "description":blogData.description,
    "userId":Number(localStorage.getItem("userId"))
  }
  const url = `/blogs`;
  // Check for existing authentication token in local storage
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    try{
      apiService.setAuthToken(authToken)
      console.log(blog)
      const response = await apiService.postWithAuthorization(url, blog, authToken)
      return response.data
    }
    catch(error){
      console.error('Error:', error);
      return null
    }
  }
  console.log("Not Authorized")
}

export async function getAllBlogs() {
  const apiService = new ApiService('api');
  const url = `/blogs`;
  // Check for existing authentication token in local storage
  try{
    const response = await apiService.getWithoutAuthorization(url)
    return response.data
  }
  catch(error){
    console.error('Error:', error);
    return null
  }
}

export async function getAllBlogsForUser() {
  const apiService = new ApiService('api');
  const userId = localStorage.getItem('userId')
  const authToken = localStorage.getItem('authToken')
  if (authToken && userId) {
    apiService.setAuthToken(authToken);
    const url = `/blogs/get/by/user/${userId}`;
    // Check for existing authentication token in local storage
    try{
      const response = await apiService.getWithAuthorization(url, authToken)
      return response.data
    }
    catch(error){
      console.error('Error:', error);
      return null
    }
  }
  console.log("Unauthorized")
}