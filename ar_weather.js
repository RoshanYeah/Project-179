var coordinates = {}

$(document).ready(function(){
    getCoordinates();
})

function getCoordinates(){
    var searchParameters = new URLSearchParams(window.location.search)

    if(searchParameters.has('source') && searchParameters.has('destination')){
        var source = searchParameters.get("source")
        var destination = searchParameters.get("destination")
        
        console.log(source)
        console.log(destination)

        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lng = source.split(";")[1]

        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lng = destination.split(";")[1]
    }else{
        alert("Opps! Coordinates are not selected!");
        window.history.back()
    }
}