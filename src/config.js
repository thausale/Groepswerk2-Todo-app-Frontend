const apiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://s6.syntradeveloper.be/todo/api"
    : "http://localhost/api";

export default {
  apiBaseUrl,
};
