<script>
  import {getContext} from "svelte";
  const service = getContext("Service");
  import {navBar, userBar, adminBar, subTitle, title, user} from "../stores"
  import Parking from "../components/Parking.svelte"
  title.set("CamperPark");
  subTitle.set("View parking");

  export let params = {}

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

<Parking id={params.id}/>
