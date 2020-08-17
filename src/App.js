import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/Home.page";
import UserPosts from "./pages/user-posts/UserPosts.component";
import PostDetail from "./pages/post/PostDetail.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/posts/:userId" component={UserPosts} />
          <Route path="/post/:postId" component={PostDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
