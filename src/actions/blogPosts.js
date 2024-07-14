import * as api from "../api/api.js";
import { GET_ALL_BLOGS } from "./actionTypes"; // Assuming you have defined GET_ALL_BLOGS in actionTypes.js

export const fetchAllBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllBlogPosts(); // Assuming api.fetchAllBlogPosts() fetches data from your API

    dispatch({ type: GET_ALL_BLOGS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
