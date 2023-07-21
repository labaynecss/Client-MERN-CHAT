import axios from "axios";

export const profile = async () => {
  try {
    const response = await axios.get("/profile");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch profile");
  }
};

// export const messages = async (userId) => {
// try {
// const response = await axios.get(`/messages/${userId}`);
// return response.data;
// } catch (error) {
// throw new Error('Failed to fetch messages');
// }
// };
//
