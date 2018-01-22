class TracksParser {
  parse(stringTracks) {
    return stringTracks.map(stringTrack =>
      this.createTrack(stringTrack)
    );
  }

  createTrack(stringTrack) {
    const splitedTrack = stringTrack.split("");
    return new Track(
      splitedTrack[0],
      splitedTrack[1],
      Number.parseInt(splitedTrack[2])
    );
  }

  static updatePossibleTrips(tracks) {
    let trackFinder = new TrackFinder(tracks);
    return tracks.map(function(track) {
      track.possibleTrips = trackFinder.findByPoint(track.endPoint).length;
      return track;
    });
  }
}
