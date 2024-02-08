import About from "../pages/About/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    { path: '/posts', component: Posts },
    { path: '/about', component: About },
    { path: '/posts/:id/:comments', component: PostIdPage },
]

export const publicRoutes = [

    { path: '/login', component: Login }
]