<script>
  import { adminBar, navBar, subTitle, title,} from "../stores";
  import SettingsForm from "../components/SettingsForm.svelte";

  title.set("Donation Services Inc");
  subTitle.set("Edits and then save your settings");

  navBar.set({
    bar: adminBar
  });
  export let params = {}


</script>

<div class="uk-margin-large uk-flex uk-flex-center">
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
      <h3 class="uk-card-title uk-text-center">Edit any entry and press save</h3>
      <SettingsForm id={params.id}/>
    </div>
  </div>
</div>