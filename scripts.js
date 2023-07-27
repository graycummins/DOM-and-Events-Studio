// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){

    //position of the rocket on the document
    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;

    const rocket = this.document.getElementById('rocket');
    const flightStatus = this.document.getElementById("flightStatus");
    const shuttleBackground = this.document.getElementById("shuttleBackground");
    const spaceShuttleHeight = this.document.getElementById("spaceShuttleHeight");
   
    const takeOff = this.document.getElementById("takeoff");

    takeOff.addEventListener('click', function(){
        let status = window.confirm("Confirm shuttle is ready for take off");
        if(status) {
            flightStatus.innerHTML = "The shuttle is in flight";
            shuttleBackground.style.backgroundColor = 'blue';
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    //abort mission button
    //whenever pressed the shuttle will return to the beginning position
    const missionabort = this.document.getElementById("missionAbort");

    missionabort.addEventListener('click', function() {
        let status = window.confirm("Do you want to abort the mission?");
        if (status) {
            flightStatus.innerHTML = "Mission aborted";
            resetRocket();
        }
     });

    const landing = this.document.getElementById("landing");

    landing.addEventListener('click', function() {
        altitude = 0;
        alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle is landing";
        resetRocket();
    });


    //use event deligation
    document.addEventListener('click', function() {
        let bkgwidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
        console.log(bkgwidth);

        if (event.target.id === 'left' && rocketPosX > -(bkgwidth/ 2 - 40)){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';

        }
        if (event.target.id === 'right' && rocketPosX < (bkgwidth/2 - 40)){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === 'up' && altitude<250000){
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
            
        }
        if (event.target.id === 'down' && altitude >0){
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

    function resetRocket() {
        shuttleBackground.style.backgroundColor = 'green';
        altitude = 0;
        rocketPosX = 0;
        rocketPosY = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
    }
});

