<script>
  import { userBar, navBar, subTitle, title,} from "../stores";


  title.set("CamperPark");
  subTitle.set("Add parking");

  navBar.set({
    bar: userBar
  });


</script>

<div class="uk-margin-large uk-flex uk-flex-center">
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
      <h3 class="uk-card-title uk-text-center">Parking Add</h3>
    </div>
  </div>
</div>

