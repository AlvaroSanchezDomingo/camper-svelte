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
    title: "Add user",
    icon: "fas fa-plus-circle fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/signup",
  },
  {
    title: "Show users",
    icon: "fas fa-users fa-3x",
    colour: "color:rgb(200, 68, 100)",
    link: "/#/users",
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


export let userBar = [
  {
    title: "Add parking",
    icon: "fas fa-plus-circle fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/parkingsadd",
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
