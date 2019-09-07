import showBlogs from "./components/showBlogs";
import aboutBlog from "./components/aboutBlog";
import singleBlog from "./components/singleBlog";
import blogDetails from "./components/blogDetails";

export default [
  { path: "/", component: showBlogs },
  { path: "/about", component: aboutBlog },
  { path: "/blog/:id", component: singleBlog },
  { path: "/blog/:id/nastavnici", component: blogDetails }
];
