const apiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://s6.syntradeveloper.be/todo"
    : "http://localhost/api";

export default {
  apiBaseUrl,
};
