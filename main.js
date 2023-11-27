function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = m15.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    s
}