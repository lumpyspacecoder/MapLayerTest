// https://github.com/dburles/meteor-google-maps/issues/38 
// look at this for help with autorun

Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();
    console.log(navigator.geolocation);
}

/* 
    Tracker.autorun(function() {
        
            if (!Geolocation.error()) {                
                pos = Geolocation.latLng();
                var geomarker = new google.maps.Marker({
                    gm_bindings_: this.map,
                    position: new google.maps.LatLng(pos.lat, pos.lng),
                    setMap: this.map,
                    content: 'Location found using HTML5.'
                });
                console.log('Your location is ' + pos.lat + ', ' + pos.lng);
            } 
        
    });
*/

    


 
Template.map.destroyed = function() {
    Session.set('map', false);
}



