import {writable} from "svelte/store";

export const welcomeBar = [
  {
    title: "Log In",
    icon: "fas fa-user-edit fa-3x",
    colour: "color:green",
    link: "/#/login",
  }
];

export let adminBar = [
  {
    title: "Parkings",
    icon: "fas fa-parking fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/parkings",
  },
  {
    title: "Show users",
    icon: "fas fa-users fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/users",
  },
  {
    title: "Settings",
    icon: "fas fa-id-card fa-3x",
    colour: "color:rgb(14, 168, 160)",
    link: "/#/settings",
  },
  {
    title: "Sign Up",
    icon: "fas fa-user-cog fa-3x",
    colour: "color:rgb(182, 89, 89)",
    link: "/#/signup",
  },
  {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
  }
];


export let userBar = [
  {
    title: "Add parking",
    icon: "fas fa-plus-circle fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/addparkings",
  },
  {
    title: "Parkings",
    icon: "fas fa-parking fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/parkings",
  },
  {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
  }
];
export const navBar = writable({
  bar: [],
});
export const title = writable("");
export const subTitle = writable("");

export const user = writable({
  email: "",
  token: "",
  level: 0
});
