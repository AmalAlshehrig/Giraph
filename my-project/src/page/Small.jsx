import React from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';
import Spline from '@splinetool/react-spline';


function Small() {
  // camera
  const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -50000, 10000);
  camera.position.set(0, 0, 0);
  camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
  
  // scene
  const scene = new THREE.Scene();
  
  // spline scene
  const loader = new SplineLoader();
 /* loader.load(
    'https://prod.spline.design/0u1nRIwM69Rdu4Ci/scene.splinecode',
    (splineScene) => {
      scene.add(splineScene);
    }
  );*/
  
  // renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);
  
  // scene settings
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  
  scene.background = new THREE.Color('#d5d5d5');
  renderer.setClearAlpha(1);
  
  // orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.125;
  
  window.addEventListener('resize', onWindowResize);
  function onWindowResize() {
    camera.left = window.innerWidth / - 2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / - 2;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  function animate(time) {
    controls.update();
    renderer.render(scene, camera);
  }
  

  return (
    <div>
          <Spline scene="https://prod.spline.design/0u1nRIwM69Rdu4Ci/scene.splinecode" />
    </div>
  )
}

export default Small