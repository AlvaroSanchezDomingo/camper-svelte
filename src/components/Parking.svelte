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

<div class="uk-margin uk-width-2xlarge uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin" uk-grid>
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
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
                        <p class="uk-text-meta uk-margin-remove-top">{parking.user.firstName} {parking.user.lastName}</p>
                    </div>
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <h3>15 C<h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p class= "uk-text-success">{parking.pros}</p>
                <p class= "uk-text-danger">{parking.cons}</p>
            </div>

            <div class="uk-card-footer">
                <p>{parking.description}</p>
            </div>
    </div>
</div>