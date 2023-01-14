import axios from "axios";
const url = "http://localhost:5000";
const api = axios.create({ withCredentials: true });
export const addMessages = async (user) => {
return await api.post(`${url}/portfolio/postMessages`, user);
};
export const addMembers = async (member) => {
  return await api.post(`${url}/portfolio/postMembers`, member);
};
export const getMessages = async () => {
  return await api.get(`${url}/portfolio/getMessages`);
};
export const deleteMessages = async (id) => {
  return await api.delete(`${url}/portfolio/deleteMessages/${id}`);
};
export const loginMembers = async (login) => {
  return await api.post(`${url}/portfolio/loginMembers`, login);
};
export const getMembers = async () => {
  return await api.get(`${url}/portfolio/getMembers`)
};

export const Logout=async (req,res)=>{
  return await api.get(`${url}/portfolio/logout`)
}
