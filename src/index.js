import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:00AM" 
                    comment="Nice blog"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 2:00PM" 
                    comment="Keep it up"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Mike" 
                    timeAgo="Yesterday at 4:00PM" 
                    comment="Good Work"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
  };
  
  ReactDOM.render(<App />, document.querySelector("#root"));