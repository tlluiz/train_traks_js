class TrackFinder {
  constructor(tracks) {
    this.tracks = tracks;
  }

  findByRoute(route) {
    return this.tracks.filter(track => matchTrack(track, route))[0];
  }

  findByPoint(point, pointType="startPoint") {
    return this.tracks.filter(track => matchPoint(track, point, pointType));
  }

  matchTrack(track, route) {
    return track.startPoint == route.startPoint && track.endPoint == route.endPoint;
  }

  matchPoint(track, point, pointType) {
    return track[pointType] == point;
  }
}
