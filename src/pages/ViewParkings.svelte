<script>
  import {onMount, getContext} from "svelte";
  const service = getContext("Service");
  import {navBar, userBar, adminBar, subTitle, title, user} from "../stores"
  import ParkingCard from "../components/ParkingCard.svelte"
  title.set("CamperPark");
  subTitle.set("Parkings");
  let parkings = [];
  if($user.level == 0){
    navBar.set({
    bar: adminBar
  });
  }else{
    navBar.set({
    bar: userBar
  });
  }

  async function refresh() {
    if($user.level == 0){
      parkings = await service.getParkings()
    }else{
      parkings = await service.getParkingUser()
    }
  }  

  onMount(async () => {
		refresh()
	});
</script>


{#each parkings as parking}
    <ParkingCard parking={parking} on:refresh={refresh}/>
{/each}



