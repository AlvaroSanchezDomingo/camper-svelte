<script lang="ts">
  import {title, subTitle, navBar, adminBar} from "../stores"
  import SignupForm from "../components/SignupForm.svelte"

  title.set("CamperPark");
  subTitle.set("User Management");

  navBar.set({
    bar: adminBar
  });
</script>

<div class="uk-margin-large uk-flex uk-flex-center">
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
      <h3 class="uk-card-title uk-text-center">Fill in new user or admin details below</h3>
      <SignupForm />
    </div>
  </div>
</div>

