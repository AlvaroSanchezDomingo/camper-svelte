<script>
    import {getContext, createEventDispatcher} from "svelte";
    const service = getContext("Service");
    let message
    export let parking;
    const dispatch = createEventDispatcher();

    async function deleteParking() {
		let success = await service.deleteParkingsId(parking._id)
        dispatch('refresh');
        if (!success){
            message = "Error Trying to delete parking";
        }
	}

</script>
<div class="uk-margin-large uk-flex uk-flex-center">
    <div class="uk-card uk-card-default uk-width-1-2@m uk-text-center">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    {#if parking.category == "Nature"}
                        <i class="fas fa-tree fa-2x" style="color:rgb(49,78,0)"></i>
                    {:else if parking.category == "Public"}
                        <i class="fas fa-parking fa-2x" style="color:rgb(21,57,177)"></i>
                    {:else if parking.category == "Private"}
                        <i class="fas fa-parking fa-2x" style="color:rgb(177,21,21)"></i>
                    {:else if parking.category == "Camping"}
                        <i class="fas fa-campground fa-2x" style="color:rgb(217,238,33)"></i>
                    {:else}
                        <p class="uk-text-meta uk-margin-remove-top">No ve el icono</p>
                    {/if}
                    <p class="uk-text-meta uk-margin-remove-top">{parking.category}</p>
                </div>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{parking.name}</h3>
                    <p class="uk-text-meta uk-margin-remove-top">{parking.user.firstName} {parking.user.lastName}</p>
                </div>
                <div class="uk-width-auto">
                    <i class="fas fa-search-location fa-2x" style="color:rgb(44,97,1)"></i>
                    <p class="uk-text-meta uk-margin-remove-top">{parking.lat} , {parking.long}</p>
                </div>
            </div>
        </div>
        <div class="uk-card-body">
            <p class= "uk-text-success">{parking.pros}</p>
            <p class= "uk-text-danger">{parking.cons}</p>
        </div>

        <div class="uk-card-footer">
            <p uk-margin>
                <a href="/#/parking/{parking._id}" class="uk-button uk-button-primary uk-button-small" uk-icon="sign-in"></a>
                <a href="/#/parkingedit/{parking._id}" class="uk-button uk-button-secondary uk-button-small" uk-icon="file-edit"></a>
                <button on:click={deleteParking} class="uk-button uk-button-danger uk-button-small" uk-icon="trash"></button>
                {#if message}
                    <div class="uk-text-left uk-text-small">
                        {message}
                    </div>
                {/if}
            </p>
        </div>
    </div>
</div>