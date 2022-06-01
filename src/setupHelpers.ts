import { Scene, AxesHelper, GridHelper } from "three";

export function setupHelpers(scene: Scene): void {
    const axesHelper = new AxesHelper(10);
    axesHelper.position.set(-30, 20, 0); //lift up from grid
    scene.add(axesHelper);
    // const gridHelper = new GridHelper(100);
    // scene.add(gridHelper);
}