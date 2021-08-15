

var backgroundColor;


window.addEventListener("DOMContentLoaded",function(){

    // ecran.material.diffuseTexture = new BABYLON.VideoTexture("video", "textures/babylonjs.mp4", scene, true);
    var canvas= document.getElementById("canvas")
    var engine = new BABYLON.Engine(canvas,true);

    var createScene = function(){
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(1,.5,0);
        // var camera = new BABYLON.FreeCamera("camera1", 
        // new BABYLON.Vector3(6,10,-20),scene);
        // camera.setTarget(BABYLON.Vector3.Zero());
        // camera.attachControl(canvas,true);
        // camera.keysUp.push(87);
        // camera.keysDown.push(83);
        // camera.keysLeft.push(65);
        // camera.keysRight.push(68);

        engine.enableOfflineSupport = false;
        
        var imageMaterial =new BABYLON.StandardMaterial("imageMaterial",scene);
        imageMaterial.emissiveColor = new BABYLON.Color3(1,.3,0);
        var sphere = BABYLON.Mesh.CreateSphere("sphere",20,20,scene);
        sphere.position= new BABYLON.Vector3(20, 60, 4);

        var camera = new BABYLON.UniversalCamera("UniversalCamera",
        
        BABYLON.Vector3(0,0,0),scene);
        camera.position = new BABYLON.Vector3(-10, 3, -10);
        // camera.rotation.x -= Math.PI/5;
        camera.rotation.y += Math.PI/5;

        // camera.attachControl(canvas,true);

        var material = new BABYLON.StandardMaterial("material1",scene)
        material.diffuseColor =new BABYLON.Color3(0,1,.2);
        // material.emissiveColor = new BABYLON.Color3(1,.3,0);
        material.specularColor = new BABYLON.Color3(0,0,1);
        material.alpha = .0
        // material.wireframe=true;
        sphere.material=imageMaterial;



        sphere.isPickable=true;

        sphere.actionManager = new BABYLON.ActionManager(scene);
        sphere.actionManager.registerAction(
            new BABYLON.SetValueAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger, 
                    parameter: ""
                }, 
                sphere,
                "scaling",
                new BABYLON.Vector3(2, 4, 1.2)
            )
            
        );
     

    
        var camera2 = new BABYLON.UniversalCamera("castlecamera",
        
        BABYLON.Vector3(0,0,0),scene);

        var camera3 = new BABYLON.UniversalCamera("bungalowcamera",
        
        BABYLON.Vector3(0,0,0),scene);

        var camera4 = new BABYLON.UniversalCamera("mummycamera",
        
        BABYLON.Vector3(0,0,0),scene);

        var camera5 = new BABYLON.UniversalCamera("mummycamera",
        
        BABYLON.Vector3(0,0,0),scene);





  
                   
             
            BABYLON.SceneLoader.ImportMesh("","","eating.gltf",scene,
        
           function(newMeshes){
            scene.stopAllAnimations()
            $(".loading").addClass("invisibleP")
            var foodText = scene.getMeshByName("foodtext");
            var energyball = scene.getMeshByName("energyball");
            console.log(energyball)
            // energyball.material.specularColor=BABYLON.Color3(1,0,1)
            energyball.material.diffuseColor=BABYLON.Color3(1,0,0)


            foodText.isPickable=true;
            // console.log(scene.animationGroups)
            //    scene.animationGroups.forEach(animation=>{
            //             animation.play(true);
            //         })
                    
            foodText.actionManager = new BABYLON.ActionManager(scene);
            foodText.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                    {
                    trigger: BABYLON.ActionManager.OnPickTrigger,
                    parameter:""
                    },
                    function(){
                             scene.animationGroups.forEach(animation=>{
                        animation.play(false);
                    })
                      
                        
                    }

                ))

            // if (scene.animationGroups.length > 0) {
            //     scene.animationGroups.forEach(animation => {
            //         animation.play(true);
                    
            //     })};


           
            })
 
                 
        var light = new BABYLON.PointLight("pointLight",new BABYLON.Vector3(0,10,-10),scene);

        // light.parent = camera2;
        light.intensity=60;
        light.range=50;

        var light2 = new BABYLON.PointLight("pointLight2",new BABYLON.Vector3(-10,0,-10),scene);

        // light.parent = camera2;
        light2.intensity=60;
        light2.range=50;
        light2.diffuse = new BABYLON.Color3(.2, .3, 1);
	    light2.specular = new BABYLON.Color3(.2, .3, 1);
 
    
        return scene;
    }

    var scene= createScene();
    engine.runRenderLoop(function(){
        // var light = scene.getLightByName("pointLight");
        // light.diffuse.b +=0.01;
        // light.diffuse.r +=0.01;
        

        
        scene.render();

    });

})