<script>
  import {navBar, userBar, adminBar, subTitle, title, user} from "../stores"

  title.set("CamperPark");
  subTitle.set("Parkings");

  if($user.level == 0){
    navBar.set({
    bar: adminBar
  });
  }else{
    navBar.set({
    bar: userBar
  });
  }
</script>

<div class="uk-margin-large uk-flex uk-flex-center">
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
      <h3 class="uk-card-title uk-text-center">Parkings</h3>
      {#if $user.level == 0}
        All parkings
      {:else}
        Usuer parkings
      {/if}
    </div>
  </div>
</div>
