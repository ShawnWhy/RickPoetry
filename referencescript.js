

var backgroundColor;


window.addEventListener("DOMContentLoaded",function(){

    // ecran.material.diffuseTexture = new BABYLON.VideoTexture("video", "textures/babylonjs.mp4", scene, true);
    var canvas= document.getElementById("canvas")
    var engine = new BABYLON.Engine(canvas,true);

    var createScene = function(){
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0,0,0);
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
        camera.position = new BABYLON.Vector3(2, 45, 45);
        camera.rotation.x += Math.PI/5;
        camera.rotation.y += Math.PI;

        camera.attachControl(canvas,true);

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





  
                   
             
            BABYLON.SceneLoader.ImportMesh("","","leonora.gltf",scene,
        
           function(newMeshes){

            BABYLON.SceneLoader.ImportMesh("","","mummyface.gltf",scene,)


            window.addEventListener("keyup", onKeyUp, false);

            function onKeyUp(event) {
                switch (event.keyCode) {
                    case 16:
                        cameraJump();
                    break;
                }
            }
            
            var cameraJump = function() {
                var cam = camera2
        
                cam.animations = [];
                
                var a = new BABYLON.Animation(
                    "a",
                    "position.y", 20,
                    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                
                // Animation keys
                var keys = [];
                keys.push({ frame: 0, value: cam.position.y });
                keys.push({ frame: 10, value: cam.position.y + 2 });
                keys.push({ frame: 20, value: cam.position.y });
                a.setKeys(keys);
                
                var easingFunction = new BABYLON.CircleEase();
                easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
                a.setEasingFunction(easingFunction);
                
                cam.animations.push(a);
                
                scene.beginAnimation(cam, 0, 20, false);
            }
               
            scene.collisionsEnabled = true;
            scene.gravity = new BABYLON.Vector3(0, -0.15, 0);
            const assumedFramesPerSecond = 60;
            const earthGravity = -9.81;
            scene.gravity = new BABYLON.Vector3(0, earthGravity / assumedFramesPerSecond, 0);
            camera2.ellipsoid = new BABYLON.Vector3(.1, .2, .1);
            camera2.applyGravity = true;        
            scene.collisionsEnabled = true;
            camera2.checkCollisions = true;
            camera2.speed=.1;
            newMeshes.forEach(element => {  
                element.checkCollisions = true;   
            });
            scene.stopAllAnimations()
            $(".loading").addClass("invisibleP")
            // var camerashoelocation = getMeshByName()
            var mummyface = scene.getMeshByName("mummyface");
            console.log(mummyface)
            var mummycameralocation = scene.getMeshByName("mummycameralocation");
            mummycameralocation.checkCollisions=false;
            var mummyVeil = scene.getMeshByName("mummyveil")
            var mummyveilskeleton = scene.getSkeletonByName("mummyarmature");
            var bungalowcameralocation = scene.getMeshByName("bungalowcamerlocation");
            bungalowcameralocation.checkCollisions=false;
            var bungalowVeil = scene.getMeshByName('bungalowveil')
            var castleTarp=scene.getMeshByName("CASTLETARP");
            var tarpskeleton = scene.getSkeletonByName("castletarparmature")
            var shoecameralocation = scene.getMeshByName("shoecameralocation")
            shoecameralocation.checkCollisions=false;
            var castlecameralocation = scene.getMeshByName("castlecameralocation")
            castlecameralocation.checkCollisions=false;
            castlecameralocation.visibility=0;
            bungalowcameralocation.visibility=0;
            mummycameralocation.visibility=0;
            shoecameralocation.visibility=0;
            mummyVeil.isPickable=true;
            console.log(mummyVeil)
            console.log(scene.animationGroups)
            castleTarp.isPickable=true;
            castleTarp.actionManager=new BABYLON.ActionManager(scene);
            castleTarp.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                    {
                    trigger: BABYLON.ActionManager.OnPickTrigger,
                    parameter:""
                    },
                    function(){
                        scene.animationGroups[3].play(false)
                        setTimeout(() => {
                            var light4 = new BABYLON.PointLight("pointLight4",new BABYLON.Vector3(0,0,0),scene);

                        light4.parent = camera2;
                            
                        }, 2000);
                    }

                )
            )


                         
            mummyVeil.actionManager = new BABYLON.ActionManager(scene);
            mummyVeil.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                    {
                    trigger: BABYLON.ActionManager.OnPickTrigger,
                    parameter:""
                    },
                    function(){
                        scene.animationGroups[2].play(false)
                        setTimeout(() => {
                            var light2 = new BABYLON.PointLight("pointLight2",new BABYLON.Vector3(0,0,0),scene);

                        light2.parent = camera4;
                            
                        }, 2000);
                        
                    }

                )
            )
            bungalowVeil.actionManager = new BABYLON.ActionManager(scene);
            bungalowVeil.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                    {
                    trigger: BABYLON.ActionManager.OnPickTrigger,
                    parameter:""
                    },
                    function(){
                        scene.animationGroups[0].play(false)
                        setTimeout(() => {
                            var light3 = new BABYLON.PointLight("pointLight3",new BABYLON.Vector3(0,0,0),scene);

                        light3.parent = camera3;
                            
                        }, 2000);
                    }

                )
            )
            $(".firstButton").on("click",event=>{
                scene.activeCamera=camera;
                camera.attachControl(canvass,true)
                light.intensity=60;
                light.range=40;

                
            })

           
            $(".castlebutton").on("click",evemt=>{
                scene.activeCamera=camera2;
                camera2.attachControl(canvas,true);
                light.intensity=3;
                light.range=1;
            })
            //camera2 set up
            camera2.position=castlecameralocation.position;
            camera2.rotation.y+=Math.PI/2;
            camera2.position.x+=.4;
            camera2.minZ = 0;
            $(".castlebutton").on("click",evemt=>{
            scene.activeCamera=camera2;
            camera2.attachControl(canvas,true);
            light.intensity=3;
            light.range=1;
        })

            //camera3 set up
            const bunglocation= bungalowcameralocation.position;
            camera3.position=bunglocation
            camera3.speed=.1
            camera3.rotation.y+=Math.PI;
            camera3.position.x+=4;
            camera3.minZ = 0;
            $(".bungalowbutton").on("click",evemt=>{
                scene.activeCamera=camera3;
                camera3.attachControl(canvas,true);
                light.intensity=3;
                light.range=1;
            
            })
          

            //camera4 setup
            const mummylocation=mummycameralocation.position;
            camera4.position=mummylocation;
            camera4.speed=.1
            // camera4.rotation.y+=Math.PI;
            camera4.position.x-=7;
            camera4.position.z+=.4;
            

            camera4.rotation.y+=Math.PI+Math.PI/6;

            camera4.rotation.x-=Math.PI/3;
            camera4.minZ = 0;
            $(".mummybutton").on("click",evemt=>{
                scene.activeCamera=camera4;
                camera4.attachControl(canvas,true);
                light.intensity=3;
                light.range=1;
            
            })


        //    scene.animationGroups.forEach(animation=>{
        //                 animation.play(true);
        //             })           

            // if (scene.animationGroups.length > 0) {
            //     scene.animationGroups.forEach(animation => {
            //         animation.play(false);
                    
            //     })};


            })
 
                 
        var light = new BABYLON.PointLight("pointLight",new BABYLON.Vector3(0,20,0),scene);

        // light.parent = camera2;
        light.intensity=60;
        light.range=30;
 
    
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