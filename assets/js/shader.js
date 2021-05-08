const uniforms = {
    iTime:       { value: 0 },
    iResolution: { value: new THREE.Vector3() },
};

function main() {
    console.log('main');
    const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.autoClearColor = false;

    const container = document.getElementById('shader-container');
    const canvas = container.appendChild( renderer.domElement );

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    const scene = new THREE.Scene();
    const plane = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        fragmentShader: document.getElementById( 'fragmentShader' ).text
    });

    scene.add(new THREE.Mesh(plane, material));

    const fitRendererToContainer = function (renderer) {
        const canvas = renderer.domElement;
        const container = canvas.parentElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height);
        }
        return needResize;
    }

    function render(time) {
        time *= 0.001;  // convert to seconds
        fitRendererToContainer(renderer);
        const canvas = renderer.domElement;
        uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
        uniforms.iTime.value = time;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render)
}

main();

console.log('shader.js');
