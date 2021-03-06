const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://domain.com";
console.log(process.env);
export const api = {
  auth: {
    login: `${baseURL}/dj-rest-auth/login/`,
    register:`${baseURL}/dj-rest-auth/registration/`,
    logout: `${baseURL}/dj-rest-auth/logout/`
  },

  posts: {
    list: `${baseURL}/api/blog/posts/`,
    create: `${baseURL}/api/blog/posts/create/`,
  },
};
