<script>
  import { userBar, navBar, subTitle, title,} from "../stores";
  import ParkingForm from "../components/ParkingForm.svelte"

  title.set("CamperPark");
  subTitle.set("Add parking");

  navBar.set({
    bar: userBar
  });


</script>



<div class="uk-container uk-margin">
  <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-expand@m">
      <ParkingForm/>
    </div>
  </div>
</div>