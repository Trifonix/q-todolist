const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/todo.vue") },
      { path: "/help", component: () => import("src/pages/help.vue") },
      { path: "/about", component: () => import("src/pages/about.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/error.vue"),
  },
];

export default routes;
