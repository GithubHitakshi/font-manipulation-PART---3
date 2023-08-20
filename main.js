nose_x = 0;
nose_y = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(150, 150)
    canvas = createCanvas(550, 500)
    canvas.position(screen.width / 2, 150)

    posenet = ml5.poseNet(video, modeloaded);
    posenet.on("pose", got_pose);

}

function modeloaded() {
    console.log("Posenet is Initialized");
}

function got_pose(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        difference = floor(left_wrist - right_wrist);
    }


}

function draw() {
    background("grey");
    fill("pink");
    stroke("blue");
    textSize(difference);
    text("HELLO!!",nose_x,nose_y);

    document.getElementById("width").innerHTML = difference  +"px";
}