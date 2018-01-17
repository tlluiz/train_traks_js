class TracksParser {
  static parse(stringTracks) {
    return stringTracks.map(stringTrack =>
      createTrack(stringTrack)
    );
  }

  static updatePossibleTrips(tracks) {
    let trackFinder = TrackFinder.new(tracks);
    return tracks.map(track =>
      track.possibleTrips = trackFinder.findByPoint(track.endPoint).length;
      track;
    );
  }
  end

  static createTrack(stringTrack) {
    const splitedTrack = stringTrack.split("");
    return Track.new(
      splitedTrack[0],
      splitedTrack[1],
      Number.parseInt(splitedTrack[2]);
    );
  }
}
