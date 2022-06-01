import {
    Scene,
    Mesh,
    MeshStandardMaterial,
    BoxBufferGeometry,
    TorusGeometry,
    SphereGeometry,
} from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import { setupCamera } from './setupCamera';
import { setupHelpers } from './setupHelpers';
import { setupLights } from './setupLights';
import { setupOrbitControls } from './setupOrbitControls';
import { setupRenderer } from './setupRenderer';

export function setupThreeJSScene(): void {

    const dimensions = { w: window.innerWidth, h: window.innerHeight };

    const camera = setupCamera(dimensions);

    const renderer = setupRenderer(camera, dimensions);

    const controls = setupOrbitControls(camera, renderer.domElement);

    const scene = new Scene();

    setupLights(scene);

    setupHelpers(scene);

    //shape(s)
    // Rectangle
    const geometry = new BoxBufferGeometry(10, 20, 1);
    const material = new MeshStandardMaterial({
        color: 0xffbb00
    });
    const myShape: Mesh = new Mesh(geometry, material);
    myShape.position.y = 0;
    myShape.position.z = -50;
    scene.add(myShape);

    //Donut
    const donutGeometry = new TorusGeometry(2,1,14,15)
    const donutMaterial = new MeshStandardMaterial({
        color: 0x00ff00, flatShading: true, transparent: false, opacity: 0.5
    })
    const myDonutShape: Mesh = new Mesh(donutGeometry, donutMaterial)
    myDonutShape.position.y = 1;
    myDonutShape.position.z = 50;
    myDonutShape.rotation.x = degToRad(90)
    scene.add(myDonutShape)

    //Sphere
    const sphereGeometry = new SphereGeometry(7, 32, 16)
    const sphereMaterial = new MeshStandardMaterial({
        color: 0xff0000, flatShading: false, transparent: true, opacity: 0.5
    })
    const mySphereShape: Mesh = new Mesh(sphereGeometry, sphereMaterial)
    scene.add(mySphereShape)



    animate();


    function animate() {
        myShape.rotation.y += 0.01;
        myShape.rotation.x += 0.02;

        renderer.render(scene, camera);

        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();

        requestAnimationFrame(animate);
    }
}

setupThreeJSScene();
