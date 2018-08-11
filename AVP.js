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
		opacity: .3,
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
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	var onError = function ( xhr ) {
		console.log("error");
	};
	loader.load("AVP.obj", function ( object ) {
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh ) {
				child.material = material;
			}
		} );
		object.scale.setScalar(.1);
		object.translateX(-500);//
		object.updateMatrix();
		scene.add(object);
		render();
		console.log("update");
		scn_mesh=object;
	}, onProgress, onError);

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
	////

	//var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
	var geometry = new THREE.Geometry();

	geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
	geometry.vertices.push(new THREE.Vector3( 0, 0, 0) );
	geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
	geometry.vertices.push(new THREE.Vector3( 0, 10, 10) );

	var line = new THREE.Line( geometry, material );

	scene.add( line );
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

/*

		</script>
			<!--
###############

		<div id="info">Simple Cloth Simulation<br/>
			Verlet integration with relaxed constraints<br/>
			<a onclick="wind = !wind;">Wind</a> |
			<a onclick="sphere.visible = !sphere.visible;">Ball</a> |
			<a onclick="togglePins();">Pins</a>
		</div>


		<script src="js/Detector.js"></script>
		<script src="js/controls/OrbitControls.js"></script>
		<script src="js/libs/stats.min.js"></script>

		<script src="js/Cloth.js"></script>

		<script>
			var pinsFormation = [];
			var pins = [ 6 ];
			pinsFormation.push( pins );
			pins = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
			pinsFormation.push( pins );
			pins = [ 0 ];
			pinsFormation.push( pins );
			pins = []; // cut the rope ;)
			pinsFormation.push( pins );
			pins = [ 0, cloth.w ]; // classic 2 pins
			pinsFormation.push( pins );
			pins = pinsFormation[ 1 ];
			function togglePins() {
				pins = pinsFormation[ ~~ ( Math.random() * pinsFormation.length ) ];
			}
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			init();
			animate();
			function init() {
				// scene
				scene = new THREE.Scene();
				scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
				// camera
				camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 1000, 50, 1500 );
				// lights
				// cloth material
				var loader = new THREE.TextureLoader();
				var clothTexture = loader.load( 'textures/patterns/circuit_pattern.png' );
				clothTexture.anisotropy = 16;
				var clothMaterial = new THREE.MeshLambertMaterial( {
					map: clothTexture,
					side: THREE.DoubleSide,
					alphaTest: 0.5
				} );
				// cloth geometry
				clothGeometry = new THREE.ParametricGeometry( clothFunction, cloth.w, cloth.h );
				// cloth mesh
				object = new THREE.Mesh( clothGeometry, clothMaterial );
				object.position.set( 0, 0, 0 );
				object.castShadow = true;
				scene.add( object );
				object.customDepthMaterial = new THREE.MeshDepthMaterial( {
					depthPacking: THREE.RGBADepthPacking,
					map: clothTexture,
					alphaTest: 0.5
				} );
				// sphere
				var ballGeo = new THREE.SphereBufferGeometry( ballSize, 32, 16 );
				var ballMaterial = new THREE.MeshLambertMaterial();
				sphere = new THREE.Mesh( ballGeo, ballMaterial );
				sphere.castShadow = true;
				sphere.receiveShadow = true;
				scene.add( sphere );
				// ground
				var groundTexture = loader.load( 'textures/terrain/grasslight-big.jpg' );
				groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
				groundTexture.repeat.set( 25, 25 );
				groundTexture.anisotropy = 16;
				var groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );
				var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 20000, 20000 ), groundMaterial );
				mesh.position.y = - 250;
				mesh.rotation.x = - Math.PI / 2;
				mesh.receiveShadow = true;
				scene.add( mesh );
				// poles
				var poleGeo = new THREE.BoxBufferGeometry( 5, 375, 5 );
				var poleMat = new THREE.MeshLambertMaterial();
				var mesh = new THREE.Mesh( poleGeo, poleMat );
				mesh.position.x = - 125;
				mesh.position.y = - 62;
				mesh.receiveShadow = true;
				mesh.castShadow = true;
				scene.add( mesh );
				var mesh = new THREE.Mesh( poleGeo, poleMat );
				mesh.position.x = 125;
				mesh.position.y = - 62;
				mesh.receiveShadow = true;
				mesh.castShadow = true;
				scene.add( mesh );
				var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 255, 5, 5 ), poleMat );
				mesh.position.y = - 250 + ( 750 / 2 );
				mesh.position.x = 0;
				mesh.receiveShadow = true;
				mesh.castShadow = true;
				scene.add( mesh );
				var gg = new THREE.BoxBufferGeometry( 10, 10, 10 );
				var mesh = new THREE.Mesh( gg, poleMat );
				mesh.position.y = - 250;
				mesh.position.x = 125;
				mesh.receiveShadow = true;
				mesh.castShadow = true;
				scene.add( mesh );
				var mesh = new THREE.Mesh( gg, poleMat );
				mesh.position.y = - 250;
				mesh.position.x = - 125;
				mesh.receiveShadow = true;
				mesh.castShadow = true;
				scene.add( mesh );
				// renderer
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.gammaInput = true;
				renderer.gammaOutput = true;
				renderer.shadowMap.enabled = true;
				// controls
				var controls = new THREE.OrbitControls( camera, renderer.domElement );
				controls.maxPolarAngle = Math.PI * 0.5;
				controls.minDistance = 1000;
				controls.maxDistance = 5000;
				// performance monitor
				stats = new Stats();
				container.appendChild( stats.dom );
				//
				sphere.visible = ! true;
			}
//
//
			function animate() {
				requestAnimationFrame( animate );
				var time = Date.now();
				var windStrength = Math.cos( time / 7000 ) * 20 + 40;
				windForce.set( Math.sin( time / 2000 ), Math.cos( time / 3000 ), Math.sin( time / 1000 ) )
				windForce.normalize()
				windForce.multiplyScalar( windStrength );
				simulate( time );
				render();
				stats.update();
			}
			function render() {
				var p = cloth.particles;
				for ( var i = 0, il = p.length; i < il; i ++ ) {
					clothGeometry.vertices[ i ].copy( p[ i ].position );
				}
				clothGeometry.verticesNeedUpdate = true;
				clothGeometry.computeFaceNormals();
				clothGeometry.computeVertexNormals();
				sphere.position.copy( ballPosition );
				renderer.render( scene, camera );
			}
		</script>
-->
*/
