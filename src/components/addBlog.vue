/*eslint-disable*/
<template>
  <div id="add-blog">
    <h2>Add New Blog</h2>
    <form v-if="!submitted" class="form-group">
      <label>Blog Title</label>
      <input type="text" v-model="blog.title" required class="form-control" />
      <label class="form-group">Blog Content</label>
      <textarea v-model.lazy="blog.content" class="form-control"></textarea>
      <div id="checkboxes" class="form-group">
        <label>Science</label>
        <input type="checkbox" value="Science" v-model="blog.categories" />
        <label>IT</label>
        <input type="checkbox" value="IT" v-model="blog.categories" />
        <label>Bussines</label>
        <input type="checkbox" value="Bussines" v-model="blog.categories" />
        <label>Other</label>
        <input type="checkbox" value="Other" v-model="blog.categories" />
      </div>
      <select v-model="blog.author" class="form-control-sm">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post" class="btn btn-outline-dark">Add</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Angular Avenger", "Vue Vindicator", "React Robocop"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: Math.random()
        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
