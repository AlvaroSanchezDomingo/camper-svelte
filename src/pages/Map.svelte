<script>
  import {onMount, getContext} from "svelte";
  const service = getContext("Service");
  import 'leaflet/dist/leaflet.css'
  import {LeafletMap} from '../services/leaflet-map';
  import {navBar, userBar, adminBar, subTitle, title, user} from "../stores"
  title.set("CamperPark");
  subTitle.set("View parking");
  let parkings = [];

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
    const mapConfig = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 7,
    };
    map = new LeafletMap("parking-map", mapConfig, 'Terrain');
    if($user.level == 0){
      parkings = await service.getParkings()
    }else{
      parkings = await service.getParkingUser()
    }
    parkings.forEach(parking=>{
      map.addMarker({lat: parking.lat, lng: parking.long}, parking.name);
    });
  });
</script>
<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
    <div id="parking-map" class="ui embed" style="height:800px"></div>
  </div>
</div>