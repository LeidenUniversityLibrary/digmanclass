/**
 * Open links to external websites in new tabs/windows.
 * https://stackoverflow.com/a/4425214/1445526
 */
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
