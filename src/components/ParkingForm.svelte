<script>
  import {onMount, getContext} from "svelte";
  import { push } from "svelte-spa-router";
  const service = getContext("Service");

  export let id
  export let update = false

  let message

  let parking = {
    name : "",
    category : "",
    description : "",
    lat : "",
    long : "",
    pros : "",
    cons : ""
  }
  async function createParking() {
    let success = await service.createParking(parking)
    if (success) {
      push("/parkings");
    } else {
      message = "Error Trying to create parking";
    }
  }
  async function save() {
    let success = await service.updateParking(id, parking)
    if (success) {
      message = "Parking updated";
    } else {
      message = "Error Trying to save Parking";
    }
  }
  onMount(async () => {
    if(update){
      parking = await service.getParking(id)
    }else{  
      parking.name = "enter new parking"
    }
	});
  
</script>
<div class="uk-margin-large uk-flex uk-flex-center">
  <div class="uk-card uk-card-default uk-width-1-2@m uk-text-center">
      <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-1@m">
          <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                  <label class="uk-form-label" for="form-stacked-text">Parking Name</label>
                  <div class="uk-form-controls">
                      <span class="uk-form-icon" uk-icon="icon: file-edit"></span>
                      <input bind:value={parking.name} class="uk-input uk-form-large" id="form-stacked-text" type="text" name="name" placeholder={parking.name} />
                  </div>
              </div>
          </div>
          <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                  <label class="uk-form-label" for="form-stacked-text">Category</label>
                  <span class="uk-form-icon" uk-icon="icon: bookmark"></span>
                  <select bind:value={parking.category} class="uk-select uk-form-large" name="category">
                        <option value='Nature'>Nature</option>
                        <option value='Public'>Public</option>
                        <option value='Private'>Private</option>
                        <option value='Camping'>Camping</option>
                  </select>
              </div>
          </div>
            <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label" for="form-stacked-text">Pros</label>
                    <div class="uk-form-controls">
                        <span class="uk-form-icon" uk-icon="icon: arrow-up"></span>
                        <input bind:value={parking.pros} class="uk-input uk-form-large uk-form-success" id="form-stacked-text" type="text" name="pros" placeholder={parking.pros} />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label" for="form-stacked-text">Cons</label>
                    <div class="uk-form-controls">
                        <span class="uk-form-icon" uk-icon="icon: arrow-down"></span>
                        <input bind:value={parking.cons} class="uk-input uk-form-large uk-form-danger" id="form-stacked-text" type="text" name="cons" placeholder={parking.pros} />
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-inline uk-width-1-1">
                    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
                        <div>
                            <label class="uk-form-label" for="form-stacked-text">Latitude</label>
                            <div class="uk-form-controls">
                                <input bind:value={parking.lat} class="uk-input uk-form-large" id="form-stacked-text" type="Number" step="0.0001" name="lat" placeholder={parking.lat} />
                            </div>
                        </div>
                        <div>
                            <label class="uk-form-label" for="form-stacked-text">Longitude</label>
                            <div class="uk-form-controls">
                                <input bind:value={parking.long} class="uk-input uk-form-large" id="form-stacked-text" type="Number" step="0.0001" name="long" placeholder={parking.long} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div class="uk-margin">
              <div class="uk-inline uk-width-1-1">
                  <label class="uk-form-label" for="form-stacked-text">Parking Description</label>
                  <div class="uk-form-controls">
                      <span class="uk-form-icon" uk-icon="icon: file-text"></span>
                      <textarea bind:value={parking.description} class="uk-textarea uk-form-large" id="form-stacked-text" type="text" rows="10"name="description" placeholder={parking.description}></textarea>
                  </div>
              </div>
          </div>
            <div class="uk-margin">
              {#if update}
                <button on:click={save} class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Update Parking</button>
              {:else}
                <button on:click={createParking} class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Create Parking</button>
              {/if}
            </div>
        </div>
      </div>
        {#if message}
          <div class="uk-text-left uk-text-small">
            {message}
          </div>
        {/if}
    </div>
  </div>