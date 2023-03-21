const apiBaseUrl =
  // process.env.NODE_ENV === "production"
  "production" === "production"
    ? "https://s6.syntradeveloper.be/app/api.php"
    : "http://localhost/api";

export default {
  apiBaseUrl,
};
