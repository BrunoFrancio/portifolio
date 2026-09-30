import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const group = new THREE.Group();
    scene.add(group);

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.25, 0.32, 120, 14),
      new THREE.MeshStandardMaterial({ color: 0xff7047, wireframe: true, roughness: 0.42, metalness: 0.7 }),
    );
    knot.position.set(3.25, 0.65, -1.4);
    knot.rotation.set(0.4, 0.2, -0.2);
    group.add(knot);

    const polyhedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 1),
      new THREE.MeshStandardMaterial({ color: 0xf1eddf, wireframe: true, transparent: true, opacity: 0.38 }),
    );
    polyhedron.position.set(-3.45, 1.7, -1.8);
    group.add(polyhedron);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.48, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x37273a, roughness: 0.2, metalness: 0.9 }),
    );
    sphere.position.set(-3.15, -1.75, -0.8);
    group.add(sphere);

    scene.add(new THREE.AmbientLight(0xf7f4ec, 1.1));
    const light = new THREE.DirectionalLight(0xff8b68, 4.2);
    light.position.set(4, 3, 5);
    scene.add(light);

    const pointer = new THREE.Vector2();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
    };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.35;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.25;
    };
    const onVisibility = () => { visible = !document.hidden; };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    resize();

    const render = (time = 0) => {
      if (visible) {
        if (!reducedMotion) {
          const seconds = time * 0.001;
          knot.rotation.x = seconds * 0.16;
          knot.rotation.y = seconds * 0.22;
          polyhedron.rotation.x = -seconds * 0.12;
          polyhedron.rotation.y = seconds * 0.18;
          sphere.position.y = -1.75 + Math.sin(seconds * 0.8) * 0.16;
          group.rotation.y += (pointer.x - group.rotation.y) * 0.035;
          group.rotation.x += (-pointer.y - group.rotation.x) * 0.035;
        }
        renderer.render(scene, camera);
      }
      if (!reducedMotion) frame = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="three-scene" aria-hidden="true" />;
}
