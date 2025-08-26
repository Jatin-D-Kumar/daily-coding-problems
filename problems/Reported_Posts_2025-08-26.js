
class Post {
    constructor(id, content) {
        this.id = id;
        this.content = content;
        this.reported = false;
    }
}

class ReportedPostsManager {
    constructor() {
        this.posts = [];
    }

    addPost(content) {
        const newPost = new Post(this.posts.length + 1, content);
        this.posts.push(newPost);
    }

    reportPost(postId) {
      