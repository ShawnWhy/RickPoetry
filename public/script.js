var sentence=[];
var firstfollower = "on";
var secondfollower="on";
var rain = function(){
    length=words.length
    setInterval(() => {
        randnumber = Math.floor(Math.random()*(length-1))
        randleft = Math.random()*40+60
         var raindrop = $("<div>");
         raindrop.addClass("raindrop")
         raindrop.css("left",randleft+"%")
         raindrop.css("background-color",wordswithcolor[randnumber].color);
         raindrop.attr("word",words[randnumber])
         $("body").append(raindrop)
    

        
    }, 500);
}

$(document).on("mouseover",".raindrop",event=>{
    // event.stopPropagation();
    // event.preventDefault();
    $(event.target).remove();
    let color=$(event.target).css("background-color")
    let word = $(event.target).attr("word");
    var follower = $("<div>");
    $(follower).css("background-color",color);
    sentence.push(word);

    if(firstfollower=="on"){
        follower.addClass("follower1");
        console.log("1")
        $("body").append(follower)
        firstfollower="off";
    }
    else if(secondfollower=="on"){
        follower.addClass('follower')
        $(".follower1").append(follower)
        console.log("2")

        secondfollower="off";  }
        else{
            console.log("3")

            var followers=$(".follower")
            follower.addClass('follower')
            var followerlength=followers.length;
            $(followers[followerlength-1]).append(follower)

        }

})

setInterval(() => {
    
    var raindrops=$(".raindrop");
    // console.log(raindrops)
    for(let i=0;i<raindrops.length;i++){
        // console.log($(raindrops[i]).css("height"))
        if($(raindrops[i]).css("height")<"20px"){
            $(raindrops[i]).remove();
        }
        
    };
    
}, 100);
var backgroundColor;

var sentences = "Listen, Morty, I hate to break it to you, but what people call “love” is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science "
sentences+= "Wubba lubba dub dub "
sentences+= "You gotta get Schwifty "
sentences+="We’ve got a lot of friends and family to exterminate "
sentences+="I’ll tell you how I feel about school, Jerry, it’s a waste of time. Bunch of people running around bumping into each other got a guy up front says, ‘2 + 2,’ and the people in the back say, ‘4.’ Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or something. I mean, it’s not a place for smart people, Jerry. I know that’s not a popular opinion, but that’s my two cents on the issue.” – What do they actually teach you in school that you end up using in life? Absolutely nothing "
sentences+="Weddings are basically funerals with cake ";
sentences+="What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time "
sentences+="Don’t get drawn into the culture, Morty. Stealing stuff is about the stuff, not the stealing "
sentences+="He’s not pressing charges… That’s gotta be the “you shot me” equivalent of not being mad "

var words = sentences.split(/[!,?,., ]/);
words=words.filter(word=>word!="");

var wordswithcolor = words.map(function(word) {
    let red = Math.random()*225;
    let green = Math.random()*225;
    let blue = Math.random()*225;
    let color = "rgb("+red+","+green+","+ blue+")"
    return {"word": " "+word+" ", "color":color
}
    });

if(wordswithcolor.length>1){
    rain()
}


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