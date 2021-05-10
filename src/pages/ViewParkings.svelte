<script>
  import {onMount, getContext} from "svelte";
  const service = getContext("Service");
  import 'leaflet/dist/leaflet.css'
  import {LeafletMap} from '../services/leaflet-map';
  import {navBar, userBar, adminBar, subTitle, title, user} from "../stores"
  import Parking from "../components/Parking.svelte"
  title.set("CamperPark");
  subTitle.set("View parking");

  export let params = {}

  if($user.level == 0){
    navBar.set({
    bar: adminBar
  });
  }else{
    navBar.set({
    bar: userBar
  });
  }

  let map;
  onMount(async () => {
      const parking = await service.getParking(params.id)
      const mapConfig = {
        location: {lat: parking.lat, lng: parking.long},
        zoom: 8,
        minZoom: 7,
      };
      map = new LeafletMap("parking-map", mapConfig, 'Terrain');
      map.addMarker({lat: parking.lat, lng: parking.long}, parking.name);
    });

</script>

<Parking id={params.id}/>
<div class="uk-flex-middle uk-text-center uk-flex-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <div id="parking-map" class="ui embed" style="height:600px"></div>
    </div>
  </div>
</div>