var Blog;
(function (Blog) {
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
    Blog.Post = Post;
})(Blog || (Blog = {}));
var Content;
(function (Content) {
    var Post = (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeywords);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
var blogPost = new Blog.Post({
    title: "greater title",
    body: "NACHOOOOOOO"
});
blogPost.printPost();
var contentPost = new Content.Post({
    title: "greater title",
    body: "NACHOOOOOOO",
    slug: "ggdslkaklgjd",
    seoKeywords: 'sadjfsal'
});
contentPost.printPost();
//# sourceMappingURL=namespaces.js.map