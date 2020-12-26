const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function preload() {

}

function setup(){
    var canvas = createCanvas(1000,1000);
    //windowWidth / 2 , windowHeight / 1.5);
    engine = Engine.create();
    world = engine.world;

    // let canvasmouse = Mouse.create(canvas.elt)
    // canvasmouse.pixelRatio = pixelDensity()
    // let options={
    //     mouse: canvasmouse
    // }
    // mConstraint = MouseConstraint.create(engine, options);
    // World.add(world, mConstraint)

    pendulum1 = new Pendulum(300,500,("yellow"));
    pendulum2 = new Pendulum(380,500,("red"));
    pendulum3 = new Pendulum(520,500,("green"));
    pendulum4 = new Pendulum(590,500,("blue"));
    pendulum5 = new Pendulum(660,500,("pink"));

    sling1 = new Sling(pendulum1.body, {x:200, y:100})
    sling2 = new Sling(pendulum2.body, {x:280, y:100})
    sling3 = new Sling(pendulum3.body, {x:360, y:100})
    sling4 = new Sling(pendulum4.body, {x:440, y:100})
    sling5 = new Sling(pendulum5.body, {x:520, y:100})

    
}

function draw(){
    background("white")
    Engine.update(engine)

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged(){
   Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY})
}