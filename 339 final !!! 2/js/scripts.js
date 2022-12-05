$(document).ready(function () {
    autoPlayYouTubeModal();

    //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    function autoPlayYouTubeModal() {
        var trigger = $("body").find('[data-bs-toggle="modal"]');
        trigger.click(function () {
            console.log("click");

            var theModal = $(this).attr("data-bs-target"),
                videoSRC = $(this).attr("data-theVideo"),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.btn-close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });

            $(theModal).on('hidden.bs.modal', function (e) {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }
});
