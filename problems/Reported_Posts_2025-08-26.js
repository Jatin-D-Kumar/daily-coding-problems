
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
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            post.reported = true;
            console.log(`Post ${postId} has been reported.`);
        } else {
            console.log(`Post ${postId} not found.`);
        }
    }

    getReportedPosts() {
        return this.posts.filter(post => post.reported);
    }
}

// Example usage:
const manager = new ReportedPostsManager();
manager.addPost("This is the first post.");
manager.addPost("This is the second post.");
manager.