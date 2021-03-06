var renderer;
var camera;
var scene;
var scn_mesh;
var light;
function init() {
camera=new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene=new THREE.Scene();
scene.background=new THREE.Color(0xffffff);
renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
var material = new THREE.MeshStandardMaterial({
opacity: .5,
color: 0xffffff,
transparent: true
});
var material1 = new THREE.MeshStandardMaterial({
opacity: .7,
color: 0xffff00,
transparent: true
});
var material2 = new THREE.MeshStandardMaterial({
opacity: .7,
color: 0x00ffff,
transparent: true
});
var material3 = new THREE.MeshStandardMaterial({
opacity: .7,
color: 0xff00ff,
transparent: true
});
var manager=new THREE.LoadingManager();
manager.onProgress=function(item, loaded, total) {
console.log(item, loaded, total);
};
var loader=new THREE.OBJLoader(manager);
var onProgress = function(xhr) {
if(xhr.lengthComputable) {
var percentComplete = xhr.loaded / xhr.total * 100;
console.log( Math.round(percentComplete, 2) + ' %downloaded' );
}
};
var onError = function ( xhr ) {
console.log("error");
};
loader.load("outline.obj", function ( object ) {
object.traverse( function ( child ) {
if ( child instanceof THREE.Mesh ) {
child.material = material;
}
} );
object.scale.setScalar(.1);
object.updateMatrix();
scene.add(object);
render();
console.log("update");
scn_mesh=object;
}, onProgress, onError);
//add data point
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(28,7,-1.750000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(27,-2,-1.750000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,4,-2.230000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 5,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(21,5,-2.230000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 5,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(21,1,-2.230000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,3,-2.230000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,9,-1.750000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,0,-1.750000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(20,3,-1.750000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(18,-6,-1.750000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,-10,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(31,7,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(31,0,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,-1,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,-9,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(18,10,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,2,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(16,-5,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(16,-13,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(25,12,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,5,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(23,-3,-1.270000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,6,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(9,-2,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(8,-11,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(8,-19,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,9,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(16,0,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(15,-8,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(15,-16,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,12,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,5,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(23,-4,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(22,-12,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(31,8,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(31,-1,-7.900000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(6,5,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(7,-4,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,-12,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(14,-22,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,13,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(14,4,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(16,-5,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(18,-15,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(19,11,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(22,2,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,-8,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(26,9,-3.100000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(8,8,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(9,-1,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,-9,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,-19,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(15,14,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(16,6,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,-3,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,-12,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(18,-21,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(22,13,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(23,4,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,-6,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(29,11,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(30,1,1.700000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,11,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,2,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,-6,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,-14,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,-22,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,15,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,7,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,-2,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,-9,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(17,-17,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,12,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(25,3,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(24,-5,6.500000e+00);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,12,1.130000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(11,2,1.130000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,-7,1.130000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(10,-16,1.130000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(20,8,1.130000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(19,-11,1.130000e+01);
scene.add(mesh);
var geometry = new THREE.SphereGeometry( 0,8,6,0,Math.PI * 2,0,Math.PI);
var material_sphere = new THREE.MeshStandardMaterial( { color:0xFF0000} );
var mesh = new THREE.Mesh( geometry,material_sphere);
mesh.position.set(13,-2,1.610000e+01);
scene.add(mesh);
//add data point end
container = document.getElementById("viewer");
container.appendChild( renderer.domElement );
scene.add( new THREE.AmbientLight( 0x666666 ) );
light = new THREE.DirectionalLight( 0xdfebff, 1 );
light.position.set( 50, 200, 100 );
light.position.multiplyScalar( 1.3 );
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
var d = 300;
light.shadow.camera.left = - d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = - d;
light.shadow.camera.far = 1000;
scene.add( light );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', render, false );
window.addEventListener( 'resize', onWindowResize, false );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
var line = new THREE.Line( geometry, material );
scene.add( line );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
var line = new THREE.Line( geometry, material );
scene.add( line );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 0, 10) );
var line = new THREE.Line( geometry, material );
scene.add( line );
//animation();
}
function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize( window.innerWidth, window.innerHeight );
render();
}
function render() {
console.log("render");
renderer.render( scene, camera );
light.position.copy(camera.position);
}
function animation()
{
scene.rotateX(0.01);
renderer.render(scene, camera);
requestAnimationFrame(animation);
}
