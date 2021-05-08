<script>
  import {onMount, getContext} from "svelte";
  const service = getContext("Service");
  
  import {navBar, adminBar, subTitle, title, user} from "../stores"
  import User from "../components/User.svelte"
  title.set("CamperPark");
  subTitle.set("Parkings");
  let users = [];
 
  navBar.set({
    bar: adminBar
  });
  onMount(async () => {
		users = await service.getUsers()
	});

</script>


{#each users as user}
    <User user={user}/>
{/each}

