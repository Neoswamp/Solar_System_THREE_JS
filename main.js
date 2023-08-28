const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const pointLight = new THREE.PointLight( 0xffffff, 1, 30 );

const textureLoader = new THREE.TextureLoader();
const starTexture = textureLoader.load('assets/textures/star.jpg');
const sunTexture = textureLoader.load('assets/textures/sun.jpg');
const mercuryTexture = textureLoader.load('assets/textures/mercury.jpg')
const venusTexture = textureLoader.load('assets/textures/venus.jpg')
const earthTexture = textureLoader.load('assets/textures/earth.jpg')
//const earthNormalTexture = textureLoader.load('assets/textures/earthNormal.jpg')
const moonTexture = textureLoader.load('assets/textures/moon.jpg')
const marsTexture = textureLoader.load('assets/textures/mars.jpg')
const jupiterTexture = textureLoader.load('assets/textures/jupiter.jpg')
const saturnTexture = textureLoader.load('assets/textures/saturn.jpg')
//const ringTexture = textureLoader.load('assets/textures/ring.png')
const uranusTexture = textureLoader.load('assets/textures/uranus.jpg')
const neptuneTexture = textureLoader.load('assets/textures/neptune.jpg')



// Fondo
const starCubeGeometry = new THREE.BoxGeometry(40, 40, 40);
const starCubeMaterial = new THREE.MeshBasicMaterial( { map: starTexture, side: THREE.DoubleSide} );
const starCube = new THREE.Mesh(starCubeGeometry, starCubeMaterial)

// Cuerpos celestes
const sunGeometry = new THREE.SphereGeometry( 1, 32, 16 ); 
const sunMaterial = new THREE.MeshBasicMaterial( { map: sunTexture } ); 
const sun = new THREE.Mesh( sunGeometry, sunMaterial );

const mercuryGeometry = new THREE.SphereGeometry( 0.2, 32, 16 ); 
const mercuryMaterial = new THREE.MeshStandardMaterial( { map: mercuryTexture } ); 
const mercury = new THREE.Mesh( mercuryGeometry, mercuryMaterial );

const venusGeometry = new THREE.SphereGeometry( 0.3, 32, 16 ); 
const venusMaterial = new THREE.MeshStandardMaterial( { map: venusTexture } ); 
const venus = new THREE.Mesh( venusGeometry, venusMaterial );

const earthGeometry = new THREE.SphereGeometry( 0.4, 32, 16 ); 
const earthMaterial = new THREE.MeshStandardMaterial( { map: earthTexture} ); 
const earth = new THREE.Mesh( earthGeometry, earthMaterial );

const moonGeometry = new THREE.SphereGeometry( 0.1, 32, 16 ); 
const moonMaterial = new THREE.MeshStandardMaterial( { map: moonTexture} ); 
const moon = new THREE.Mesh( moonGeometry, moonMaterial );

const marsGeometry = new THREE.SphereGeometry( 0.33, 32, 16 ); 
const marsMaterial = new THREE.MeshStandardMaterial( { map: marsTexture} ); 
const mars = new THREE.Mesh( marsGeometry, marsMaterial );

const jupiterGeometry = new THREE.SphereGeometry( 0.8, 32, 16 ); 
const jupiterMaterial = new THREE.MeshStandardMaterial( { map: jupiterTexture} ); 
const jupiter = new THREE.Mesh( jupiterGeometry, jupiterMaterial );

const saturnGeometry = new THREE.SphereGeometry( 0.5, 32, 16 ); 
const saturnMaterial = new THREE.MeshStandardMaterial( { map: saturnTexture} ); 
const saturn = new THREE.Mesh( saturnGeometry, saturnMaterial );

// Anillo
const ringGeometry = new THREE.RingGeometry( 2, 3, 32 ); 
const ringMaterial = new THREE.MeshBasicMaterial( { map: mercuryTexture, side: THREE.DoubleSide } );
const ring = new THREE.Mesh( ringGeometry, ringMaterial );
ring.scale.set(0.3, 0.4, 1);

const uranusGeometry = new THREE.SphereGeometry( 0.45, 32, 16 ); 
const uranusMaterial = new THREE.MeshStandardMaterial( { map: uranusTexture} ); 
const uranus = new THREE.Mesh( uranusGeometry, uranusMaterial );

const neptuneGeometry = new THREE.SphereGeometry( 0.42, 32, 16 ); 
const neptuneMaterial = new THREE.MeshStandardMaterial( { map: neptuneTexture} ); 
const neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );

const planets = [moon, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

const planetSpeeds = {
    moon: 4, 
    mercury: 1.5,
    venus: 1,
    earth: 0.7,
    mars: 0.5,
    jupiter: 0.2,
    saturn: 0.1,
    uranus: 0.05,
    neptune: 0.03
};

let t = 0;

scene.add( pointLight, starCube, sun, mercury, venus, earth, moon, mars, jupiter, saturn, ring, uranus, neptune );

camera.position.z = 13;


function animate() {
    requestAnimationFrame(animate);

    t += 0.01;

    starCube.rotation.y += 0.001;
    sun.rotation.y += 0.01;

    // Actualiza las posiciones de los planetas según sus velocidades angulares
    mercury.position.x = 2 * Math.cos(planetSpeeds.mercury * t);
    mercury.position.y = 2 * Math.sin(planetSpeeds.mercury * t);

    venus.position.x = 3 * Math.cos(planetSpeeds.venus * t);
    venus.position.y = 3 * Math.sin(planetSpeeds.venus * t);

    earth.position.x = 4.7 * Math.cos(planetSpeeds.earth * t);
    earth.position.y = 4.7 * Math.sin(planetSpeeds.earth * t);

    moon.position.x = earth.position.x + 0.9 * Math.cos(planetSpeeds.moon * t);
    moon.position.y = earth.position.y + 0.9 * Math.sin(planetSpeeds.moon * t);

    mars.position.x = 6.5 * Math.cos(planetSpeeds.mars * t);
    mars.position.y = 6.5 * Math.sin(planetSpeeds.mars * t);

    jupiter.position.x = 8.5 * Math.cos(planetSpeeds.jupiter * t);
    jupiter.position.y = 8.5 * Math.sin(planetSpeeds.jupiter * t);

    saturn.position.x = 11.5 * Math.cos(planetSpeeds.saturn * t);
    saturn.position.y = 11.5 * Math.sin(planetSpeeds.saturn * t);

    ring.position.x = saturn.position.x;
    ring.position.y = saturn.position.y;
    ring.rotation.x = 1.5;

    uranus.position.x = 14 * Math.cos(planetSpeeds.uranus * t);
    uranus.position.y = 14 * Math.sin(planetSpeeds.uranus * t);

    neptune.position.x = 16.5 * Math.cos(planetSpeeds.neptune * t);
    neptune.position.y = 16.5 * Math.sin(planetSpeeds.neptune * t);

    planets.forEach(planet => {
        planet.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

animate();

