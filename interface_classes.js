// loosely connected interface with class
var Admin = (function () {
    function Admin(email) {
        this.email = email;
        this.role = "Admin";
    }
    return Admin;
}());
function profile(user) {
    return "Welcome, " + user.email;
}
var joe = new Admin('Joe@admin.com');
console.log(joe.role);
var Post = (function () {
    function Post(post) {
        this.title = post.title;
        this.body = post.body;
    }
    Post.prototype.printPost = function () {
        console.log(this.title);
        console.log(this.body);
    };
    return Post;
}());
var post = new Post({ title: "greater title", body: "NACHOOOOOOO" });
console.log(post.title);
console.log(post.body);
post.printPost();
//# sourceMappingURL=interface_classes.js.map