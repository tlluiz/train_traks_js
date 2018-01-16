class Track {
  constructor(startPoint, endPoint, distance, possibleTrips = 0, trips = 0) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.distance = distance;
    this.possibleTrips = possibleTrips;
    this.trips = trips;
  }

  increase_trip() {
    this.trips++;
  }
}