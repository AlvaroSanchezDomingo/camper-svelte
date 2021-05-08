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
  
  async function refresh() {
    users = await service.getUsers()
  }  

  onMount(async () => {
		refresh()
	});

</script>
{#each users as user}
    <User user={user} on:refresh={refresh}/>
{/each}

