import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'
import {
    ActionsTypes,
    PostType,
    ProfilePageType
} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type PostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: PostsPropsType) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    }

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;