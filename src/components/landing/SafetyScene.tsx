import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function createCheckStroke(
  start: [number, number, number],
  end: [number, number, number],
) {
  const from = new THREE.Vector3(...start);
  const to = new THREE.Vector3(...end);
  const direction = to.clone().sub(from);
  const geometry = new THREE.CylinderGeometry(0.075, 0.075, direction.length(), 20);
  const material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.25,
    metalness: 0.1,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(from.clone().add(to).multiplyScalar(0.5));
  mesh.quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize(),
  );
  return mesh;
}

function createFlagTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 768;
  const context = canvas.getContext("2d");
  const colors = ["#EA2839", "#1A206D", "#FFCE00", "#00843D"];

  if (context) {
    colors.forEach((color, index) => {
      context.fillStyle = color;
      context.fillRect(0, index * 192, 512, 192);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createFlagIsland() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.2, 1.45);
  shape.quadraticCurveTo(0.2, 1.62, 0.45, 1.25);
  shape.quadraticCurveTo(0.65, 1.05, 0.7, 0.75);
  shape.quadraticCurveTo(1.02, 0.35, 0.82, -0.05);
  shape.quadraticCurveTo(0.9, -0.45, 0.55, -0.75);
  shape.quadraticCurveTo(0.35, -1.3, -0.05, -1.45);
  shape.quadraticCurveTo(-0.35, -1.5, -0.55, -1.15);
  shape.quadraticCurveTo(-0.8, -0.95, -0.75, -0.6);
  shape.quadraticCurveTo(-1.02, -0.25, -0.85, 0.12);
  shape.quadraticCurveTo(-0.9, 0.55, -0.62, 0.75);
  shape.quadraticCurveTo(-0.65, 1.15, -0.2, 1.45);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.3,
    bevelEnabled: true,
    bevelSegments: 5,
    bevelSize: 0.065,
    bevelThickness: 0.065,
    curveSegments: 32,
  });

  const positions = geometry.attributes.position;
  const uvs = geometry.attributes.uv;
  for (let i = 0; i < positions.count; i++) {
    uvs.setXY(
      i,
      (positions.getX(i) + 1.15) / 2.3,
      (positions.getY(i) + 1.65) / 3.3,
    );
  }
  uvs.needsUpdate = true;
  geometry.center();

  const faceMaterial = new THREE.MeshStandardMaterial({
    map: createFlagTexture(),
    metalness: 0.18,
    roughness: 0.34,
  });
  const sideMaterial = new THREE.MeshStandardMaterial({
    color: "#075E35",
    metalness: 0.42,
    roughness: 0.25,
  });

  const island = new THREE.Group();
  island.add(new THREE.Mesh(geometry, [faceMaterial, sideMaterial]));
  island.add(createCheckStroke([-0.4, 0.04, 0.3], [-0.1, -0.27, 0.3]));
  island.add(createCheckStroke([-0.1, -0.27, 0.3], [0.43, 0.38, 0.3]));
  return island;
}

function createContactShadow() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (context) {
    const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, "rgba(18, 57, 35, 0.38)");
    gradient.addColorStop(0.45, "rgba(18, 57, 35, 0.16)");
    gradient.addColorStop(1, "rgba(18, 57, 35, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(5.5, 5.5),
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
    }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -2.05;
  return shadow;
}

export default function SafetyScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setFailed(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.touchAction = "pan-y";
    renderer.domElement.style.cursor = "grab";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.15, 7);

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
    scene.add(tilt);
    spin.add(createFlagIsland());

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(1.35, 1.48, 0.08, 64),
      new THREE.MeshStandardMaterial({
        color: "#D9D1C2",
        metalness: 0.3,
        roughness: 0.45,
      }),
    );
    platform.position.y = -1.79;
    tilt.add(platform);

    scene.add(createContactShadow());

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      tilt.scale.setScalar(width < 420 ? 0.76 : 1);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    let pointerX = 0;
    let pointerY = 0;
    let targetSpinX = 0;
    let targetSpinY = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      renderer.domElement.setPointerCapture(event.pointerId);
      renderer.domElement.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      if (dragging) {
        targetSpinY += (event.clientX - lastX) * 0.008;
        targetSpinX = THREE.MathUtils.clamp(
          targetSpinX + (event.clientY - lastY) * 0.006,
          -0.65,
          0.65,
        );
        lastX = event.clientX;
        lastY = event.clientY;
        return;
      }

      const rect = container.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const endDrag = () => {
      dragging = false;
      renderer.domElement.style.cursor = "grab";
    };

    const onPointerLeave = () => {
      if (!dragging) {
        pointerX = 0;
        pointerY = 0;
      }
    };

    const canvas = renderer.domElement;
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const clock = new THREE.Clock();
    let frame = 0;

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.05);

      if (!dragging && !reducedMotion) targetSpinY += delta * 0.22;
      spin.rotation.x = THREE.MathUtils.lerp(spin.rotation.x, targetSpinX, 0.08);
      spin.rotation.y = THREE.MathUtils.lerp(spin.rotation.y, targetSpinY, 0.08);
      tilt.rotation.x = THREE.MathUtils.lerp(tilt.rotation.x, pointerY * -0.12, 0.05);
      tilt.rotation.z = THREE.MathUtils.lerp(tilt.rotation.z, pointerX * 0.08, 0.05);

      if (!reducedMotion) tilt.position.y = Math.sin(clock.elapsedTime * 0.85) * 0.11;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", endDrag);
      canvas.removeEventListener("pointercancel", endDrag);
      canvas.removeEventListener("pointerleave", onPointerLeave);

      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) {
          (material as THREE.MeshStandardMaterial).map?.dispose();
          material.dispose();
        }
      });
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  if (failed) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="relative h-44 w-44">
          <span className="absolute inset-0 rounded-full border-2 border-[var(--flag-blue)]" />
          <span className="absolute inset-7 rounded-full border-2 border-[var(--flag-red)]" />
          <span className="absolute inset-14 rounded-full bg-primary" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      role="img"
      aria-label="Interactive 3D Mauritian flag island with a safety check"
    />
  );
}
