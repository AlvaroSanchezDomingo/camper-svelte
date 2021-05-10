<script>
    import {onMount, getContext} from "svelte";
    const service = getContext("Service");
    export let id;
    let name
    let surname
    let parking = {}
    let temp

    onMount(async () => {
      parking = await service.getParking(id)
      name = parking.user.firstName
      surname = parking.user.lastName
      temp = await service.getTemperatureLocation(parking.lat, parking.long)
	});
</script>


<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-box-shadow-large">
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin uk-text-center" uk-grid>
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-1-5@s">
                        {#if parking.category == 'Nature'}
                            <i class="fas fa-tree fa-2x" style="color:rgb(49,78,0)"></i>
                        {:else if parking.category == 'Public'}
                            <i class="fas fa-parking fa-2x" style="color:rgb(21,57,177)"></i>
                        {:else if parking.category == 'Private'}
                            <i class="fas fa-parking fa-2x" style="color:rgb(177,21,21)"></i>
                        {:else if parking.category == 'Camping'}
                            <i class="fas fa-campground fa-2x" style="color:rgb(217,238,33)"></i>
                        {/if}
                        <p class="uk-text-meta uk-margin-remove-top">{parking.category}</p>
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">{parking.name}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">{name} {surname}</p>
                    </div>
                    <div class="uk-width-1-5">
                        <h3>{temp}C<h3>
                    </div>

                </div>
            </div>
            <div class="uk-card-body">
                <p class= "uk-text-success">{parking.pros}</p>
                <p class= "uk-text-danger">{parking.cons}</p>
            </div>
            <div class="uk-card-footer">
                <div class="uk-width-expand">
                    <p>{parking.description}</p>
                </div>
            </div>
    </div>
</div>
