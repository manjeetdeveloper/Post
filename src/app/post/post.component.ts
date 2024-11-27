import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post/post.service';
import { Comment } from '../post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  1stcomments: Comment[] = [];
  1stPost: Post | null = null;
  objPost: Post;
  objPut: Post;
  onjPatch: Post;
  message = "";
  constructor(private _p = PostService) {
  }
  ngOnInit(): void {
    this._p.getcomment().subscribe{
      data => {
        this.1stcomments = data;
      }, error => {
        alert("An unexpected error occured!");
        console.log(error);
      }
    }
  }
  this._p.getcommentsbyparameter().subscribe(
    data => {
      this.1stPost = data;
    }
  )
var opost = new Post();
opost.body = "Hello World";
opost.title = "Lovely Professional University";
opost.userId = 5;

this._p.post(opost).subscribe(
  data => {
    this.objPost = data;
  },
  error => {
    alert('An unexpected error occurred');
    console.log(error);
  }
);
opost.title = "Lovely Professional University patched data";

this._p.patch(opost).subscribe(
  data => {
    this.objPatch = data;
  },
  error => {
    alert('An unexpected error occurred');
    console.log(error);
  }
);
this._p.delete().subscribe(
  data => {
    this.message = "resource deleted successfully";
  },
  error => {
    if (error.status == 404) {
      alert('this post does not exist');
      console.log(error);
    } else {
      alert('this post has already been deleted');
      console.log(error);
    }
  }
);


}
