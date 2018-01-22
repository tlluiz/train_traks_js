class PossibleTrips {
  constructor(startPoint, endPoint, minStops = 0, maxStops = 0, trackFinder) {
    this.start_point = startPoint;
    this.end_point = endPoint;
    this.min_stops = minStops;
    this.max_stops = maxStops;
    this.track_finder = trackFinder;
  }

  reducer() {
    (accumulator, currentValue) => accumulator + currentValue;
  }

  countTrips() {
    search();
    correctTrips = trips.filter(trip => trip.endPoint == endPoint);
    return correctTrips.length;
  }

  distanceOfTrips() {
    search();

    return trips.filter(trip => trip.endPoint == endPoint)
                .sort(compare(a,b))[0].map(trip => trip.distance).reduce(reducer);
  }

  compare(a,b) {
    var aDistance = a.map(a => a.distance).reduce(reducer);
    var bDistance = b.map(b => b.distance).reduce(reducer);
    if (aDistance < bDistance) {
      return -1;
    } else if (aDistance > bDistance) {
      return 1;
    } else {
      return 0;
    }
  }

  search() {
    this.tripNumber = 1;
    this.trips = {};

    do {
      if(possibleStartTracks.length == 0) break;
      trackAroundTheWay(possibleStartTracks);
    } while(minStops < maxStops);
  }

  trackAroundTheWay(tracks) {
    traks.forEach(function(track) {
      trips[tripNumber] = [track];
      do {
        currentTrack = trips[tripNumber][trips[tripNumber].length - 1];
        if(!minStop < maxStop) { currentTrack.increaseTrip };
        nextTrack = possibleStartTracks(currentTrack.endPoint)[0];

        if(nextTrack == null) { break };

        trips[tripNumber].push(nextTrack);

        if(minStops < maxStops || minStops == 0 || minStips > maxStops) {
          if(lazyStopCondition(trips[tripNumber])) { break };
        } else {
          if(exactlyMaxStopsCondition(trips[tripNumber])) { break };
        }
      } while(1 == 1);
    });
    this.tripNumber ++;
  }

  exactlyMaxStopsCondition(trip) {
    return (trip.length == maxStops && trip.length >= minStops) && (trip[trip.length - 1].endPoint == endPoint);
  }

  lazyStopCondition(trip) {
    return trip[trip.length - 1].endPoint == endPoint;
  }

  possibleStartTracks(point = null) {
    return this.trackFinder.findByPoint(point || startPoint)
                           .filter(track => track.trips < track.possibleTrips);
  }
}
