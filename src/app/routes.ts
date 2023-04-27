import { MainPage, GalleryPage, UsersPage, UserPage } from "@pages";

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
    path: "/user/:id",
    component: UserPage
  },
];
