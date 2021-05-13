<script>
  import {setContext} from "svelte";
  import {Service} from "./services/service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Parkings from "./pages/Parkings.svelte";
  import Map from "./pages/Map.svelte";
  import ViewParkings from "./pages/ViewParkings.svelte";
  import AddParking from "./pages/AddParking.svelte";
  import EditParkings from "./pages/EditParkings.svelte";
  import Users from "./pages/Users.svelte";
  import Settings from "./pages/Settings.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("Service", new Service("http://54.74.9.225:80"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/signup" : Signup,
    "/parkings": Parkings,
    "/map": Map,
    "/parkings/:id": ViewParkings,
    "/parkingedit/:id": EditParkings,
    "/parkingsadd": AddParking,
    "/users": Users,
    "/settings/:id" : Settings,
    "/logout" : Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>
