const scope = ".trip-form";

$(scope).submit(function(e){
  e.preventDefault();
  var stringTracks = $("input[name='stringTracks']", scope).val().split(",");
  var trip = $("input[name='trip']", scope).val().toString();

  var trips = new Trips(stringTracks);
  var tripDistance = trips.distanceOfTheRoute(trip);

  let tripResult = new TripResult(tripDistance);
  tripResult.display(".trip-result");
});


class TripResult {
  constructor(tripDistance, target) {
    this.tripDistance = tripDistance;
  }

  display(target) {
    $(target).show()
             .html(this.tripDistance);
  }
}
