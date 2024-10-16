export const UnProtectedRoutes = [
    {
      route: "/",
      isProtected: false,
    },
    {
      route: "/login",
      isProtected: false,
    },
    {
      route: "/signup",
      isProtected: false,
    },
    {
      route: "/resetpassword",
      isProtected: false,
    },
    {
      route: "/maintenance",
      isProtected: false,
    },
  ];
  
  export const ProctectedRoutes = [
    {
      routes: "/dashboard",
      isProtected: true,
    },
    {
      routes: "/doctors",
      isProtected: true,
    },
  ]