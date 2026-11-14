import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const rings = [
  { color: "#EA2839", rotation: [0.25, 0.15, 0.2] as const, arc: Math.PI * 1.55 },
  { color: "#1A206D", rotation: [1.1, 0.5, 1.2] as const, arc: Math.PI * 1.7 },
  { color: "#FFCE00", rotation: [0.6, 1.25, 2.5] as const, arc: Math.PI * 1.45 },
  { color: "#00843D", rotation: [1.45, 0.25, 3.7] as const, arc: Math.PI * 1.65 },
];

function CheckStroke({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const { position, quaternion, length } = useMemo(() => {
    const from = new THREE.Vector3(...start);
    const to = new THREE.Vector3(...end);
    const direction = to.clone().sub(from);
    return {
      position: from.clone().add(to).multiplyScalar(0.5),
      quaternion: new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.clone().normalize(),
      ),
      length: direction.length(),
    };
  }, [start, end]);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.075, 0.075, length, 20]} />
      <meshStandardMaterial color="#ffffff" roughness={0.25} metalness={0.1} />
    </mesh>
  );
}

function Shield() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.35);
    shape.lineTo(1.02, 0.98);
    shape.lineTo(0.95, 0.05);
    shape.quadraticCurveTo(0.85, -0.92, 0, -1.35);
    shape.quadraticCurveTo(-0.85, -0.92, -0.95, 0.05);
    shape.lineTo(-1.02, 0.98);
    shape.closePath();

    const result = new THREE.ExtrudeGeometry(shape, {
      depth: 0.34,
      bevelEnabled: true,
      bevelSegments: 5,
      bevelSize: 0.09,
      bevelThickness: 0.09,
      curveSegments: 24,
    });
    result.center();
    return result;
  }, []);

  return (
    <group>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#075E35" metalness={0.42} roughness={0.24} />
      </mesh>
      <CheckStroke start={[-0.48, 0.02, 0.3]} end={[-0.12, -0.35, 0.3]} />
      <CheckStroke start={[-0.12, -0.35, 0.3]} end={[0.54, 0.43, 0.3]} />
    </group>
  );
}

function Sculpture() {
  const tilt = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useFrame((state, delta) => {
    if (!tilt.current || !spin.current) return;

    if (!reducedMotion) {
      spin.current.rotation.y += delta * 0.22;
      tilt.current.position.y = Math.sin(state.clock.elapsedTime * 0.85) * 0.11;
    }

    tilt.current.rotation.x = THREE.MathUtils.lerp(
      tilt.current.rotation.x,
      state.pointer.y * -0.12,
      0.05,
    );
    tilt.current.rotation.z = THREE.MathUtils.lerp(
      tilt.current.rotation.z,
      state.pointer.x * 0.08,
      0.05,
    );
  });

  return (
    <group ref={tilt} scale={viewport.width < 4.6 ? 0.76 : 1}>
      <group ref={spin}>
        <Shield />
        {rings.map((ring) => (
          <mesh
            key={ring.color}
            rotation={[ring.rotation[0], ring.rotation[1], ring.rotation[2]]}
          >
            <torusGeometry args={[1.72, 0.085, 24, 128, ring.arc]} />
            <meshStandardMaterial
              color={ring.color}
              metalness={0.5}
              roughness={0.22}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function SafetyScene() {
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const touchDevice = useMemo(
    () => window.matchMedia("(pointer: coarse)").matches,
    [],
  );

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.15, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.85} />
      <hemisphereLight args={["#ffffff", "#265D3D", 1.4]} />
      <directionalLight position={[4, 5, 6]} intensity={2.4} />
      <directionalLight position={[-4, -1, 3]} intensity={0.9} color="#D8F6E5" />
      <pointLight position={[0, 3, -4]} intensity={18} color="#FFFFFF" />

      <Sculpture />
      <ContactShadows
        position={[0, -2.25, 0]}
        opacity={0.28}
        scale={8}
        blur={2.8}
        far={4.5}
        color="#123923"
      />
      <OrbitControls
        makeDefault
        enabled={!touchDevice}
        enablePan={false}
        enableZoom={false}
        enableDamping={!reducedMotion}
        dampingFactor={0.06}
        rotateSpeed={0.65}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </Canvas>
  );
}
