
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
        con