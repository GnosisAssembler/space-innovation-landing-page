/**
 * Hides the nav overlay after pressing
 * the nav links
 */

function hideNavOverlay() {
    var overlay = document.getElementById("s-header-bg-overlay");
    overlay.classList.remove("-is-open");

    var headerOverlay = document.getElementById("s-header");
    headerOverlay.classList.remove("-is-open");

    var trigger = document.getElementById("s-header__trigger");
    trigger.classList.remove("-is-active");

}