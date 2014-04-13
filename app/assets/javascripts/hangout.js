var init = function() {
    // gapi.hangout.render('createhangout-div', { 'render': 'createhangout' });
};

if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", init);
}
else {
    window.onload = init;
}
