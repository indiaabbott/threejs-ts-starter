import { Scene, TorusGeometry, MeshStandardMaterial, Mesh, BoxBufferGeometry, SphereGeometry } from "three";
import { degToRad, randInt } from "three/src/math/MathUtils";
import { pick } from "./random";

export function setupDonut(scene: Scene) {
    const donutGeometry = new TorusGeometry(2, 1, 14, 15)
    const donutMaterial = new MeshStandardMaterial({
        color: 0x00ff00, flatShading: true, transparent: false, opacity: 0.5
    })
    const myDonutShape: Mesh = new Mesh(donutGeometry, donutMaterial)
    myDonutShape.position.y = 1;
    myDonutShape.position.z = 50;
    myDonutShape.rotation.x = degToRad(90)
    scene.add(myDonutShape)
}

export function setupRectangle(scene: Scene) {
    const geometry = new BoxBufferGeometry(10, 20, 1);
    const material = new MeshStandardMaterial({
        color: 0xffbb00
    });
    const myShape: Mesh = new Mesh(geometry, material);
    myShape.position.y = 0;
    myShape.position.z = -50;
    scene.add(myShape);
    return myShape
}

export function setupSphere(scene: Scene) {
    const colors = [
        "#556270",
        "#4ecdc4",
        "#c7f464",
        "#ff6b6b",
        "#c44d58"
    ]
    const randomRadius = randInt(5, 30)
    const sphereGeometry = new SphereGeometry(randomRadius, 12, 12)
    const sphereMaterial = new MeshStandardMaterial({
        color: pick(colors), flatShading: true
    })
    const mySphereShape: Mesh = new Mesh(sphereGeometry, sphereMaterial)
    mySphereShape.position.x = randInt(-500, 500);
    mySphereShape.position.y = randInt(-500, 500);
    mySphereShape.position.z = randInt(-500, 500);
    scene.add(mySphereShape)
}

export function setupSpheres(scene: Scene) {
    for (let i = 0; i < 100; i++) {
        setupSphere(scene)
    }
}

export function setupShapes(scene: Scene): Mesh {
    const myShape = setupRectangle(scene)
    setupDonut(scene)
    setupSpheres(scene)

    return myShape
}