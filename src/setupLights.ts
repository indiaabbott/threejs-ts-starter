import { AmbientLight, DirectionalLight, Scene } from "three";

export function setupLights(scene: Scene) {
    //lights
    const dirLight1 = new DirectionalLight();
    scene.add(dirLight1);
    const dirLight2 = new DirectionalLight();
    dirLight2.position.set(-5, 2, -2);
    scene.add(dirLight2);
    const light = new AmbientLight(0x404040); // soft white light
    scene.add(light);
}