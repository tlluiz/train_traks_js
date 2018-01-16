function Track(startPoint, endPoint, distance, possibleTrips, trips) {
  this.startPoint = startPoint;
  this.endPoint = endPoint
  this.distance = distance
  this.possibleTrips = possibleTrips;
  this.trips = trips;

  this.increase_trip = function() {
    this.trips ++;
  }
}
