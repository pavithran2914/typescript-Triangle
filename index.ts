// Import stylesheets
import './style.css';
import { Dot } from './dot.model';
import { Line } from './line.model';
import { Triangle } from './triangle.model';
import { Coordinate } from './coordinate.model';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let point = new Dot(10, 10);

let tri = new Coordinate(7, 60);

let triangleobj = new Triangle(point, tri);

console.log(triangleobj);