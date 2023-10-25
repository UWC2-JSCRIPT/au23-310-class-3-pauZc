// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`
class SpaceShip{
    constructor(name, topSpeed){
        this.name = name
        this.topSpeed = topSpeed
    }
    accelerate(){
        const { name, topSpeed} =this
        console.log(`${name} is taking off at ${topSpeed} ft/s... Woohoo!`)
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const buzz = new SpaceShip('Buzz', 400);
const lightyear = new SpaceShip('Lightyear', 1000);
const saturn = new SpaceShip('Saturn', 1200);
buzz.accelerate();
lightyear.accelerate();
saturn.accelerate();