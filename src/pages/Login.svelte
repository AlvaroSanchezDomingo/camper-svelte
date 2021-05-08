<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import LoginForm from "../components/LoginForm.svelte"
  title.set("CamperPark");
  subTitle.set("Please Log in");

  navBar.set({
    bar: welcomeBar
  });
</script>

<div class="uk-margin-large uk-flex uk-flex-center">
  <div class="uk-width-2-3@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <h3 class="uk-card-title uk-text-center">Login form</h3>
      <LoginForm />
    </div>
  </div>
</div>
