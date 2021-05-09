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

<div class="uk-container uk-margin">
  <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-expand@m">
      <ParkingForm id={params.id} update = {true}/>
    </div>
  </div>
</div>