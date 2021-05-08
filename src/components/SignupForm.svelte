<script lang="ts">
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";

  let user = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    level : 99
  }
  let errorMessage = "";

  const service = getContext("Service");

  async function addUser() {
    let success = await service.createUser(user)
    
    if (success) {
      push("/signup");
    } else {
      errorMessage = "Error Trying to sign up";
    }
  }
</script>

<form on:submit|preventDefault={addUser}>
  <div class="uk-margin uk-text-left">
    <div class="uk-margin">
      <label class="uk-form-label" >First name</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input bind:value={user.firstName} class="uk-input uk-form-large" type="text" name="firstName">
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label" >Last name</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input bind:value={user.lastName} class="uk-input uk-form-large" type="text" name="lastName">
      </div>
    </div>
    <label class="uk-form-label">Email</label>
    <div class="uk-inline uk-width-1-1">
      <span class="uk-form-icon" uk-icon="icon: mail"></span>
      <input bind:value={user.email} class="uk-input uk-form-large" type="text" name="email">
    </div>
    <div class="uk-margin">
      <label class="uk-form-label">Password</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: lock"></span>
        <input bind:value={user.password} class="uk-input uk-form-large" type="password" name="password">
      </div>
    </div>
    <div class="uk-margin">
      <label class="uk-form-label">Level</label>
      <div class="uk-inline uk-width-1-1">
        <span class="uk-form-icon" uk-icon="icon: bookmark"></span>
        <input bind:value={user.level} class="uk-input uk-form-large" type="number" max=1 min=0 name="level">
      </div>
    </div>
  </div>
  <div class="uk-margin">
    <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Sign up</button>
  </div>
  {#if errorMessage}
    <div class="uk-text-left uk-text-small">
      {errorMessage}
    </div>
  {/if}
</form>
