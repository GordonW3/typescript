// loosely connected interface with class
 
interface User {
	email : string;
	firstName? : string;
	lastName? : string;
}

class Admin {
	role : string;
	constructor(public email : string){
		this.role = "Admin"
	}
}

function profile(user : User) : string {
	return `Welcome, ${user.email}`;
}

var joe = new Admin('Joe@admin.com');

console.log(joe.role);

// directly implementation
interface Ipost {
	title : string;
	body : string;
}

class Post implements Ipost {
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

var post = new Post({ title: "greater title", body: "NACHOOOOOOO" });
console.log(post.title);
console.log(post.body);

post.printPost();