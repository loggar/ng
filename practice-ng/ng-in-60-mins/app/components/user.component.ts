import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
	moduleId: module.id,
	selector: 'user',
	templateUrl: 'user.component.html',
	providers: [PostsService]
})
export class UserComponent {
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	toggleText: string;
	posts: Posts[];

	constructor(private postsService: PostsService){
		this.name = 'Jesse Soldat';
		this.email = 'jlab@jlab.com';
		this.address = { 
			street: '775 Twin Dr.',
			city: 'Bangkok',
			country: 'Thailand'
		}
		this.hobbies = ['coding', 'manga', 'travel'];
		this.showHobbies = true;

		this.postsService.getPosts().subscribe(posts => {
			console.log(posts);

			this.posts = posts;
		});
	}

	toggleHobbies(){
		console.log('toggleHobbies')
		if(this.showHobbies === true){
			this.showHobbies = false;

		} else {
			this.showHobbies = true;

		}
	}

	addHobby(hobby: string){
		this.hobbies.push(hobby);
	}
	deleteHobby(i){
		this.hobbies.splice(i, 1);
	}
}
	
	interface address {
		street: string;
		city: string;
		country: string;
	}

	interface Posts {
		id: number;
		title: string;
		body: string;
	}