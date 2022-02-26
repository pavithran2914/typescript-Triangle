import { Coordinate } from './coordinate.model';
import { Dot } from './dot.model';

export class Triangle {
  dot: Dot;
  tri: Coordinate;

  constructor(dot: Dot, tri: Coordinate) {
    this.dot = dot;
    this.tri = tri;
  }
}
