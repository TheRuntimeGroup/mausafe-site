import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ringDefinitions = [
  { color: "#EA2839", rotation: [0.25, 0.15, 0.2], arc: Math.PI * 1.55 },
  { color: "#1A206D", rotation: [1.1, 0.5, 1.2], arc: Math.PI * 1.7 },
  { color: "#FFCE00", rotation: [0.6, 1.25, 2.5], arc: Math.PI * 1.45 },
  { color: "#00843D", rotation: [1.45, 0.25, 3.7], arc: Math.PI * 1.65 },
] as const;

function createCheckStroke(
  start: THREE.Vector3,
  end: THREE.Vector3,
  material: THREE.Material,
) {
  const direction = end.clone().sub(start);
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.075, 0.075, direction.length(), 20),
    material,
  );
  mesh.position.copy(start.clone().add(end).multiplyScalar(0.5));
  mesh.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize(),
  );
  return mesh;
}

function createShield() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 1.35);
  shape.lineTo(1.02, 0.98);
  shape.lineTo(0.95, 0.05);
  shape.quadraticCurveTo(0.85, -0.92, 0, -1.35);
  shape.quadraticCurveTo(-0.85, -0.92, -0.95, 0.05);
  shape.lineTo(-1.02, 0.98);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.34,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: 0.09,
    bevelThickness: 0.09,
    curveSegments: 24,
  });
  geometry.center();

  const group = new THREE.Group();
  group.add(
    new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        color: "#075E35",
        metalness: 0.42,
        roughness: 0.24,
      }),
    ),
  );

  const checkMaterial = new THREE.MeshStandardMaterial({
    color: "#FFFFFF",
    metalness: 0.1,
    roughness: 0.25,
  });
  group.add(
    createCheckStroke(
      new THREE.Vector3(-0.48, 0.02, 0.3),
      new THREE.Vector3(-0.12, -0.35, 0.3),
      checkMaterial,
    ),
    createCheckStroke(
      new THREE.Vector3(-0.12, -0.35, 0.3),
      new THREE.Vector3(0.54, 0.43, 0.3),
      checkMaterial,
    ),
  );
  return group;
}

function createShadowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const gradient = context.createRadialGradient(128, 128, 8, 128, 128, 128);
  gradient.addColorStop(0, "rgba(18, 57, 35, 0.3)");
  gradient.addColorStop(0.45, "rgba(18, 57, 35, 0.12)");
  gradient.addColorStop(1, "rgba(18, 57, 35, 0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(canvas);
}

export default function SafetyScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.15, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.cursor = "grab";
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.85));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x265d3d, 1.4));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd8f6e5, 0.9);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 18);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    const tilt = new THREE.Group();
    const spin = new THREE.Group();
    tilt.add(spin);
    spin.add(createShield());
    scene.add(tilt);

    ringDefinitions.forEach((ring) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(1.72, 0.085, 24, 128, ring.arc),
        new THREE.MeshStandardMaterial({
          color: ring.color,
          metalness: 0.5,
          roughness: 0.22,
        }),
      );
      mesh.rotation.set(ring.rotation[0], ring.rotation[1], ring.rotation[2]);
      spin.add(mesh);
    });

    const shadowTexture = createShadowTexture();
    if (shadowTexture) {
      const shadow = new THREE.Mesh(
        new THREE.PlaneGeometry(5.4, 5.4),
        new THREE.MeshBasicMaterial({
          map: shadowTexture,
          transparent: true,
          depthWrite: false,
        }),
      );
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = -2.25;
      scene.add(shadow);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = !touchDevice;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = !reducedMotion;
    controls.dampingFactor = 0.06;
    controls.rotateSpeed = 0.65;
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = (Math.PI * 2) / 3;
    controls.update();
    renderer.domElement.style.touchAction = touchDevice ? "pan-y" : "none";

    const pointer = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1,
      );
    };
    const onPointerLeave = () => pointer.set(0, 0);
    const onPointerDown = () => {
      renderer.domElement.style.cursor = "grabbing";
    };
    const onPointerUp = () => {
      renderer.domElement.style.cursor = "grab";
    };

    mount.addEventListener("pointermove", onPointerMove);
    mount.addEventListener("pointerleave", onPointerLeave);
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      tilt.scale.setScalar(width < 480 ? 0.76 : 1);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);

      if (!reducedMotion) {
        spin.rotation.y += delta * 0.22;
        tilt.position.y = Math.sin(clock.elapsedTime * 0.85) * 0.11;
      }

      tilt.rotation.x = THREE.MathUtils.lerp(tilt.rotation.x, pointer.y * -0.12, 0.05);
      tilt.rotation.z = THREE.MathUtils.lerp(tilt.rotation.z, pointer.x * 0.08, 0.05);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerleave", onPointerLeave);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      controls.dispose();

      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material];
        materials.forEach((material) => {
          const mappedMaterial = material as THREE.MeshStandardMaterial;
          mappedMaterial.map?.dispose();
          material.dispose();
        });
      });

      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full w-full"
      role="img"
      aria-label="Interactive 3D MauSafe shield surrounded by four Mauritian signal rings"
    />
  );
}
