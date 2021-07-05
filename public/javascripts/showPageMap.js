mapboxgl.accessToken = mapToken;
const newcamp = JSON.parse(campground);
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10', // stylesheet location
    center: newcamp.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl())

new mapboxgl.Marker()
    .setLngLat(newcamp.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${newcamp.title}</h3><p>${newcamp.location}</p>`
            )
    )
    .addTo(map)