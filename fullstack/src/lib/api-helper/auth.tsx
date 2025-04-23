import axios from "axios";

// Login
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axios.post("/api/auth/login", {
    email,
    password,
  });
  return data;
};

// Signup
export const signup = async ({
  email,
  password,
  username
}: {
  email: string;
  password: string;
  username: string;
}) => {
  const {data} = await axios.post("/api/auth/signup", {
    email,
    password,
    username
  })
  return data;
};

// Logout
export const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};
