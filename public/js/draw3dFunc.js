//
//
function stop3dFunc() {
    document.getElementById("draw3dDiv").style.display = 'none';
}

function init3dFunc() {
    // RENDERER
    RENDERER = new THREE.WebGLRenderer({ antialias: true });
    RENDERER.setSize(500, 500);

    // add RENDERER.domElement to scene3d
    while(SCENE3d.hasChildNodes()){
        SCENE3d.removeChild(SCENE3d.firstChild);
    }
    SCENE3d.appendChild(RENDERER.domElement);
    SCENE3d.style.marginTop="25px";
    SCENE3d.style.marginLeft="50px";

    // make new scene
    SCENE = new THREE.Scene();
    SCENE.background = new THREE.Color("rgb(255,255,255)");

    // make a new CAMERA
    CAMERA = new THREE.PerspectiveCamera(45, 1, 0.01, 10000);
    CAMERA.up = new THREE.Vector3(0, 0, 1);
    CAMERA.position.x = 350;
    CAMERA.position.y= 350;
    CAMERA.position.z=350;

    // add orbit CONTROLS
    CONTROLS = new THREE.OrbitControls(CAMERA, RENDERER.domElement);
    CONTROLS.addEventListener('change', render);
    CONTROLS.enableZoom = true;

    // add axes
    let axes=new THREE.AxesHelper(50);
    SCENE.add(axes);

    addGroundPlane();
    addLights();
}

function addGroundPlane(){
    var geo=new THREE.PlaneGeometry(500,500,100);
    var mat=new THREE.MeshPhongMaterial({
        color: new THREE.Color("rgb(100,100,100)"),
        specular: 0x000000,
        shininess:1,
        flatShading: true,
        wireframe:false
    })
    var mesh=new THREE.Mesh(geo,mat);
    SCENE.add(mesh);
}

function addLights(){
    var light0=new THREE.DirectionalLight(0xffffff);
    light0.position.set(1,10,10);
    SCENE.add(light0);
    var light1=new THREE.DirectionalLight(0xffffff);
    light1.position.set(-1,-10,-10);
    SCENE.add(light1);
    var light2=new THREE.DirectionalLight(0xffffff);
    light2.position.set(-1,10,10);
    SCENE.add(light2);      
    var light3=new THREE.DirectionalLight(0xffffff);
    light3.position.set(1,-10,10);
    SCENE.add(light3); 
  }

function onWindowResize() {
    CAMERA.aspect = window.innerWidth / window.innerHeight;
    CAMERA.updateProjectionsMatrix();
    RENDERER.setSize(window.innerWidth, window.innerHeight);
}

function mainLoop() {
    // generate the cube
    addObjects();
    
    requestAnimationFrame(mainLoop);
    CONTROLS.update();
    render();
}

function render() {
    RENDERER.render(SCENE, CAMERA);
}

function addObjects() {
    for(let i=0; i<MESH.length; i++){
        MESH[i].geometry.dispose();
        MESH[i].material.dispose();
        SCENE.remove(MESH[i]);
    }
    MESH=[];
    for(let i=0; i<OBJECT_ARRAY.length; i++){
        var mesh=OBJECT_ARRAY[i].gen3dMesh();
        MESH.push(mesh);
    }
    for(let i=0; i<MESH.length; i++){
        SCENE.add(MESH[i]);
    }
}