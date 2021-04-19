let planets = ["earth", "mars", "venus", "jupiter", "uranus"];
// planets.document.createElement("div");
let colors = ["blue","red", "grey", "yellow", "white", ]
let moons = [1,2,0,53,27];


for (let i=0; i<planets.length; i++){
    let planetDiv = document.createElement("div");
    planetDiv.innerHTML = planets[i];
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = colors[i];
    document.querySelector("section").appendChild(planetDiv);

}
for (let a=0; a<planets.length;a++){
    let margin = 150;

    for (let b=0;b<moons[a];b++){
        let moonDiv = document.createElement("div");
        moonDiv.className = "moon";
        margin+=50;
        moonDiv.style.marginLeft=`${margin}px`;
        document.getElementsByClassName("planet")[a].appendChild(moonDiv);
    }
}


