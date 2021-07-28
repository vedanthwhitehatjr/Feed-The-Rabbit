        var garden,rabbit;
        var gardenImg,rabbitImg;
        var apple,appleImg;
       var leaf,leafImg;
        var orangeLeaf,orangeLeafImg;
        var redLeaf,redLeafImg;
        var grass,grassImg;

        function preload(){
          gardenImg = loadImage("garden.png");
          rabbitImg = loadImage("rabbit.png");
          appleImg = loadImage("apple.png");
          grassImg = loadImage("grass.png");
          leafImg = loadImage("leaf.png");
          orangeLeafImg = loadImage("orangeLeaf.png");
          redLeafImg = loadImage("redImage.png");
        }

        function setup(){
          
          createCanvas(400,400);
          
        // Moving background
        garden=createSprite(200,200);
        garden.addImage(gardenImg);

        //creating boy running
        rabbit = createSprite(180,340,30,30);
        rabbit.scale =0.09;
        rabbit.addImage(rabbitImg);

        
        }


        function draw() {
          background(0);
        
          var select_sprites = Math.round(random(1,4));
            
          if(frameCount%80 == 0){
            if(select_sprites == 1){
              createApple();
            }
            else if(select_sprites ==2){
              createLeaf();
            }
            else if(select_sprites == 3){
              createOrangeLeaf();
            }
            else{
              createRedLeaf();
            }
          }

          edges= createEdgeSprites();
          rabbit.collide(edges);

          rabbit.x = World.mouseX;

          drawSprites();
        }
        function createApple(){
          apple = createSprite(random(50,350),40,10,10);
          apple.addImage(appleImg);
          apple.scale = 0.07;
          apple.velocityY = 3;
          apple.lifeTime = 150;
          }

          function createOrangeLeaf(){
            orangeLeaf = createSprite(random(50,350),40,10,10);
            orangeLeaf.addImage(orangeLeafImg);
            orangeLeaf.scale = 0.07;
            orangeLeaf.velocityY = 3;
            orangeLeaf.lifeTime = 150;
            }

            function createRedLeaf(){
              redLeaf = createSprite(random(50,350),40,10,10);
              redLeaf.addImage(redLeafImg);
              redLeaf.scale = 0.07;
              redLeaf.velocityY = 3;
              redLeaf.lifeTime = 150;
              }

              function createLeaf(){
                leaf = createSprite(random(50,350),40,10,10);
                leaf.addImage(leafImg);
                leaf.scale = 0.07;
                leaf.velocityY = 3;
                leaf.lifeTime = 150;
                }