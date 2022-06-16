const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70)
camera.position.z=5
scene.add(camera)

const textureLoader = new THREE.TextureLoader()
const texture =textureLoader.load('https://bruno-simon.com/prismic/matcaps/8.png')

const geometry = new THREE.TorusKnotGeometry(0.8,0.1, 100, 22)
const material = new THREE.MeshMatcapMaterial( {matcap:texture} )
const mesh = new THREE.Mesh(geometry, material)
//mesh.rotation.y=0.5
scene.add(mesh)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerHeight, window.innerHeight)
document.body.append(renderer.domElement)
renderer.render(scene, camera)

window.setTimeout(() =>
{
renderer.render(scene, camera)
}, 3000)
