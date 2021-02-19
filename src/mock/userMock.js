import mock from "../utils/mock";

// mock.onPost("/api/home/login").reply(200, {
//   id: 1,
//   username: "admin",
//   email: "admin@admin.com",
// });

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "admin@admin.com" || password !== "admin") {
    return [
      400,
      { message: "Oppss, seu email ou sua senha devem estar errados!!" },
    ];
  }

  const user = {
    id: 1,
    nome: "junior",
    username: "admin",
    email: "admin@admin.com",
    avatar: "/images/avatars/avatar_1",
  };

  return [200, { user }];
});
