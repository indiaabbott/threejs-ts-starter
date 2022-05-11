import {
    Scene,
    Mesh,
    MeshStandardMaterial,
    BoxBufferGeometry,
} from 'three';
import { setupCamera } from './setupCamera';
import { setupHelpers } from './setupHelpers';
import { setupLights } from './setupLights';
import { setupOrbitControls } from './setupOrbitControls';
import { setupRenderer } from './setupRenderer';
import { setupTerrain } from './setupTerrain';

export function setupThreeJSScene() {


    let dim: { w: number, h: number } = { w: window.innerWidth, h: window.innerHeight };

    const camera = setupCamera(dim);

    const renderer = setupRenderer(camera, dim);

    const controls = setupOrbitControls(camera, renderer.domElement);

    let scene = new Scene();

    setupLights(scene);

    setupHelpers(scene);

    setupTerrain(scene);

    animate();


    function animate() {

        renderer.render(scene, camera);

        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();

        requestAnimationFrame(animate);
    }
}

setupThreeJSScene();
