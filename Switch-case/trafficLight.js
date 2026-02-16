let trafficLight = process.argv[2];

let light = trafficLight.toUpperCase();

switch (light) {
    case "RED":
        console.log("Stop");
        break;
    case "YELLOW":
        console.log("Ready");
        break;
    case "GREEN":
        console.log("Go");
        break;
    default:
        console.log("Handle invalid colors.");
}


