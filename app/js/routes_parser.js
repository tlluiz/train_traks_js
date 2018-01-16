class RoutesParser {
  static parse(string_routes) {
    let points = string_routes.split('-');
    let routes = [];
    let points_amount = points.length;

    for(var index in points) {
      let next_index = Number.parseInt(index) + 1;
      if(points[next_index] == null) { continue; }
      routes.push(new Route(points[index], points[next_index]));
    }

    return routes;
  }
}
