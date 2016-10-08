var fps = 30;

window.onload = function() {
    var ctx = new AudioContext();
    var audio = $("#example")[0];
    var audioSrc = ctx.createMediaElementSource(audio);
    var analyser = ctx.createAnalyser();
    analyser.smoothingTimeConstant = 0.2;
    // we have to connect the MediaElementSource with the analyser
    audioSrc.connect(analyser);
    audioSrc.connect(ctx.destination);
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)

    // frequencyBi  nCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    function draw() {
        setTimeout(function() {
            requestAnimationFrame(draw);

            analyser.getByteFrequencyData(frequencyData);
            console.log(frequencyData);
            var average = 0;
            for(var j=0;j<100;j++){
                average = Math.round(parseInt(frequencyData[j * 10]) * 100 / 255);
                $('.bar' + j).css('height', average + "%");
            }

        }, 1000 / fps);
    }

    $("#start").click(function(){
        if (audio.paused == false) {
            audio.pause();
        } else {
            audio.play();
            draw();
        }
    });
};

function getFrequencyFromIndex(i) {
    return i * 44100 / frequencyData.length;
}