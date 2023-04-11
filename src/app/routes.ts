import { MainPage, GalleryPage, UsersPage } from "@pages";

export const routes = [
  {
    exact: true,
    path: "/",
    component: MainPage,
    navTitle: 'Main',
    isHeaderNavItem: true
  },
  {
    path: "/gallery",
    component: GalleryPage,
    navTitle: 'Gallery',
    isHeaderNavItem: true
  },
  {
    path: "/users",
    component: UsersPage,
    navTitle: 'Users',
    isHeaderNavItem: true
  },
  {
    path: "/users/:id",
    component: UsersPage,
    navTitle: 'Users'
  },
];
