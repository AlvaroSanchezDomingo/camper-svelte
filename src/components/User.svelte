<script>
    export let user;
</script>
<div class="uk-margin-large uk-flex uk-flex-center">
    <div class="uk-card uk-card-default uk-width-1-2@m uk-text-center">
        <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{user.firstName} {user.lastName}</h3>
                    
                </div>
            </div>
        </div>
        <div class="uk-card-body">
            <p class="uk-text-meta uk-margin-remove-top">{user.email}</p>
            <p class="uk-text-meta uk-margin-remove-top">Level: {user.level}</p>
        </div>
        <div class="uk-card-footer">
            <p uk-margin>
            <a class="uk-button uk-button-danger uk-button-small" uk-icon="trash"></a>
            <a class="uk-button uk-button-primary uk-button-small" uk-icon="user"></a>
            </p>
        </div>
    </div>
</div>
