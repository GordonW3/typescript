namespace Blog {
	export interface Ipost {
		title : string;
		body : string;
	}

	export class Post {
		title : string;
		body : string;

		constructor(post: Ipost){
			this.title = post.title;
			this.body = post.body;
		}

		printPost() {
			console.log(this.title);
			console.log(this.body);
		}
	}
}

namespace Content {
	export interface Ipost {
		title : string;
		body : string;
		slug : string;
		seoKeywords : string;
	}

	export class Post implements Ipost {
		title : string;
		body : string;
		slug : string;
		seoKeywords : string;

		constructor(post: Ipost){
			this.title = post.title;
			this.body = post.body;
			this.slug = post.slug;
			this.seoKeywords = post.seoKeywords;
		}

		printPost() {
			console.log(this.title);
			console.log(this.body);
			console.log(this.slug);
			console.log(this.seoKeywords);
		}
	}
}


var blogPost = new Blog.Post({ 
	title: "greater title", 
	body: "NACHOOOOOOO"
});

blogPost.printPost();

var contentPost = new Content.Post({ 
	title: "greater title", 
	body: "NACHOOOOOOO",
	slug : "ggdslkaklgjd",
	seoKeywords : 'sadjfsal'
});

contentPost.printPost();