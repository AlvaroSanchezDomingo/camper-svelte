<script>
  import { userBar, navBar, subTitle, title,} from "../stores";
  import ParkingForm from "../components/ParkingForm.svelte";

  title.set("Donation Services Inc");
  subTitle.set("Edit parking");

  navBar.set({
    bar: userBar
  });
  export let params = {}


</script>

<div class="uk-margin-large uk-flex uk-flex-center">
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
      <h3 class="uk-card-title uk-text-center">Edit any entry and press save</h3>
      <ParkingForm id={params.id}/>
    </div>
  </div>
</div>

