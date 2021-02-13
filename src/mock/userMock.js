import mock from "../utils/mock";

mock.onPost("/api/home/login").reply(200, {
  id: 1,
  username: "admin",
  email: "admin@admin.com",
});
