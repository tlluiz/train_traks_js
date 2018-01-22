class Trips {
  constructor(stringTracks) {
    let tracksParser = new TracksParser();
    this.tracks = tracksParser.parse(stringTracks);
    this.track = TracksParser.updatePossibleTrips(this.tracks);
    this.trackFinder = new TrackFinder(this.tracks);
    this.reducer = (accumulator, currentValue) => accumulator + currentValue;
  }

  distanceOfTheRoute(stringRoutes) {
    this.routes = RoutesParser.parse(stringRoutes);

    let distances = this.routes.map(route => this.trackFinder.findByRoute(route).distance);

    if (this.wrongNumberOf(distances)) {
      return 'NO SUCH ROUTE';
    } else {
      return distances.filter(distance => distance != null).reduce(this.reducer);
    }
  }

  timeOfTheRoute(stringRoutes) {
    this.routes = RoutesParser.parse(stringRoutes);

    let times = routes.map(route => this.trackFinder.findByRoute(route).distance);

    if (stringRoutes.split('-').length < 3) {
      return times.reduce(this.reducer);
    } else {
      return times.reduce(this.reducer) + (stringRoutes.split('-').length - 1);
    }
  }

  numberOfTrips(startPoint, endPoint, maxStops, minStops = 1) {
    var possibleTrips = new PossibleTrips(startPoint, endPoint, minStops, maxStops, trackFinder);
    return possibleTrips.countTrips;
  }

  distanceOfShortestTrip(startPoint, endPoint) {
    let stop = startPoint == endPoint ? 1 : 0;
    var possibleTrips = new PossibleTrips(startPoint, endPoint, stop, 0, this.trackFinder);
    return possibleTrips.distanceOfTrips;
  }

  wrongNumberOf(distances) {
    return distances.reduce(this.reducer).length < this.routes.length;
  }

  possibleTracks(trips, round, index) {
    let trip = trips[round].pop();
    let tracks = trackFinder.findByPoint(trip.endPoint);
    if (round == 0) {
      return tracks;
    }
    //fix line bellow
    // tracks.delete(trips.select { |_,v| v[index + 1]&.startPoint == trip.startPoint}.first);
    return tracks;
  }

}