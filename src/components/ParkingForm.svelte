<script>
  import {onMount, getContext} from "svelte";
  export let id
  let message
  let user = {
    firstName : "",
    lastname : "",
    email : "",
    password : "",
    level:99

  }

  const service = getContext("Service");

  async function save() {
    let success = await service.updateSettings(user)
    if (success) {
      message = "Settings updated";
      
    } else {
      message = "Error Trying to save settings";
    }
  }

  onMount(async () => {
		user = await service.getUser(id)
	});
</script>

<form on:submit|preventDefault={save}>
  <div class="uk-margin uk-text-left">
    <div class="uk-margin">
      <label class="uk-form-label">First name</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: user"></span> 
        <input bind:value={user.firstName} class="uk-input uk-form-large" type="text" name="firstName" required>
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label">Last name</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: user">
        </span> <input bind:value={user.lastName} class="uk-input uk-form-large" type="text" name="lastName" required>
      </div>
    </div>
    <label class="uk-form-label">Email</label>
    <div class="uk-inline uk-width-1-1">
      <span class="uk-form-icon" uk-icon="icon: mail"></span> 
      <input bind:value={user.email} class="uk-input uk-form-large" type="text" name="email" required>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label">Password</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: lock"></span> 
        <input bind:value={user.password} class="uk-input uk-form-large" type="password" name="password" required>
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label">Level</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: bookmark"></span>
        <input bind:value={user.level} class="uk-input uk-form-large" type="number" max=1 min=0 name="level" required>
      </div>
    </div>
  </div>
  <div class="uk-margin">
    <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Save Settings</button>
  </div>
  {#if message}
    <div class="uk-text-left uk-text-small">
      {message}
    </div>
  {/if}
</form>
