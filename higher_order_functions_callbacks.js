var dbQuery = function () {
    setTimeout(function () {
        console.log('Query logs');
    }, 3000);
};
function loadPage(q) {
    console.log("header");
    q();
    console.log("sidebar");
    console.log("footer");
}
loadPage(dbQuery);
//# sourceMappingURL=higher_order_functions_callbacks.js.map