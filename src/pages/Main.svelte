<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import camper from "/src/assets/camper.png";
  import {getContext} from "svelte";
  const service = getContext("Service");

  title.set("CamperPark");
  subTitle.set("Sign up or Log in");

  navBar.set({
    bar: welcomeBar
  });
  service.logout();
</script>

<div class="uk-container uk-margin">
  <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-auto@m">
      <img width="200" src="{camper}" alt="camper">
    </div>
    <div class="uk-width-expand@m">
      <h1 class="uk-heading-small">CamperPark</h1>
      <p>Find the best places to park your Camper and stay overnight</p>
    </div>
  </div>
</div>
