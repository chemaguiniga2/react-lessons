import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard>
                Are u sure u want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45pm" text="Hey how r u?" img={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" text="Miss u Gabyrush" img={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo ="Yesterday at 3:00AM"text="I wanna marry u" img={faker.image.avatar()} />
            </ApprovalCard> 
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))