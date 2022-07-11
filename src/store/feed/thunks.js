import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setallFeed, newFeedSucess } from "./slice";

// 1. Write a thunk to get all children
export const getallFeed = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/feed`);

    dispatch(setallFeed(response.data));
  } catch (error) {
    console.log("error from getAllSpaces thunk: ", error.message);
  }
};

//2. write a thunk to submit new feed form
export const setNewFeed =
  (feed, imageUrl, childId) => async (dispatch, getState) => {
    try {
      // const token = getState().user.token;
      const response = await axios.post(
        `${apiUrl}/feed`,
        { feed, imageUrl, childId }

        // { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(feed, imageUrl, childId);

      dispatch(newFeedSucess(response.data));
    } catch (error) {
      console.log("Thunk newFeedSucess: ", error.message);
    }
  };
