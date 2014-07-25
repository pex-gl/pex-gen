var geom = require('pex-geom');
var Vec3 = geom.Vec3;
var Geometry = geom.Geometry;

//Regular tetrahedron
//http://mathworld.wolfram.com/RegularTetrahedron.html
function Tetrahedron(a) {
  a = a || 1;

  var s3 = Math.sqrt(3);
  var s6 = Math.sqrt(6);

  var vertices = [
    new Vec3( s3/3*a, -s6/3 * a*0.333 + s6*0.025,    0),   //right
    new Vec3(-s3/6*a, -s6/3 * a*0.333 + s6*0.025,  a/2),   //left front
    new Vec3(-s3/6*a, -s6/3 * a*0.333 + s6*0.025, -a/2),   //left back
    new Vec3(      0,  s6/3 * a*0.666 + s6*0.025,    0)    //top
  ]; + s6*0.125

  var faces = [
    [0, 1, 2],
    [3, 1, 0],
    [3, 0, 2],
    [3, 2, 1]
  ];

  var edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3]
  ];

  Geometry.call(this, { vertices: vertices, faces: faces, edges: edges });
}

Tetrahedron.prototype = Object.create(Geometry.prototype);

module.exports = Tetrahedron;