class PossibleTrips {
  constructor(startPoint, endPoint, minStops = 0, maxStops = 0, trackFinder) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.minStops = minStops;
    this.maxStops = maxStops;
    this.trackFinder = trackFinder;
  }

  reducer() {
    (accumulator, currentValue) => accumulator + currentValue;
  }

  countTrips() {
    this.search();
    var correctTrips = this.trips.filter(trip => trip.endPoint == this.endPoint);
    return correctTrips.length;
  }

  distanceOfTrips() {
    search();

    return this.trips.filter(trip => trip.endPoint == this.endPoint).sort(compare(a, b))[0].map(trip => trip.distance).reduce(this.reducer);
  }

  compare(a, b) {
    var aDistance = a.map(a => a.distance).reduce(this.reducer);
    var bDistance = b.map(b => b.distance).reduce(this.reducer);
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
      if (this.possibleStartTracks.length == 0) break;
      this.trackAroundTheWay(this.possibleStartTracks);
    } while (minStops < maxStops);
  }

  trackAroundTheWay(tracks) {
    tracks.forEach(function (track) {
      this.trips[tripNumber] = [track];
      do {
        var currentTrack = this.trips[tripNumber][this.trips[tripNumber].length - 1];
        if (!minStop < maxStop) {
          currentTrack.increaseTrip;
        };
        var nextTrack = possibleStartTracks(currentTrack.endPoint)[0];

        if (nextTrack == null) {
          break;
        };

        this.trips[tripNumber].push(nextTrack);

        if (minStops < maxStops || minStops == 0 || minStips > maxStops) {
          if (this.lazyStopCondition(this.trips[tripNumber])) {
            break;
          };
        } else {
          if (this.exactlyMaxStopsCondition(this.trips[tripNumber])) {
            break;
          };
        }
      } while (1 == 1);
    });
    this.tripNumber++;
  }

  exactlyMaxStopsCondition(trip) {
    return trip.length == maxStops && trip.length >= minStops && trip[trip.length - 1].endPoint == endPoint;
  }

  lazyStopCondition(trip) {
    return trip[trip.length - 1].endPoint == this.endPoint;
  }

  possibleStartTracks(point = null) {
    return this.trackFinder.findByPoint(point || this.startPoint).filter(track => track.trips < track.possibleTrips);
  }
}