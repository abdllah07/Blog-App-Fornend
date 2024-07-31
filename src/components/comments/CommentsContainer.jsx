import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../data/comments';
import Comment from './Comment';

function CommentsContainer({className , logginedUserId}) {

    const [comments, setComments] = useState([])
    const [affectedComment, setAffectedComment] = useState(null)
    // filter the main Comments and the child comments 
    const mainComments = comments.filter((comment ) => comment.parent === null) 

    console.log(comments);


    // get the comments data form comments.js
    useEffect(() => {
        (async() => {
            const commentData = await getCommentsData();
            setComments(commentData);
        })()
    }, []);


    // add new comments to comment.js 
    const addCommentHandler = (value , parent = null , replayOnUser = null) => {
        
        const newComment = {
            _id: "10",
            user: {
                _id: "a",
                name: "Mohammad Rezaii",
            },
            desc: value,
            post: "1",
            parent: parent,
            replyOnUser: replayOnUser,
            createdAt: "2022-12-31T17:22:05.092+0000",
        };

        setComments((curState) => {
            return [newComment , ...curState];
        })
        setAffectedComment(null);


    }

    const updateCommentHandler = (value, commentId) => {

        const updatedComments = comments.map((comment) => {
            if(comment._id === commentId) {
                return {...comment, desc: value };
            }
            return comment;
        })
        setComments(updatedComments)
        setAffectedComment(null);
    }

    const deleteCommentHandler = (commentId) => {
        const updatedComments = comments.filter((comment) => {
            return comment._id!== commentId;
        });
        setComments(updatedComments);
    }

    const getReplaysHandler = (commentId) => {
        return comments.filter((comment) => comment.parent === commentId).sort((a ,b) => {
            return (
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
        })
    }

    return (
        <div className={`${className}`}>

            <CommentForm
                    btnLabel="Send"
                    addCommentHandler={(value) => addCommentHandler(value)}
                />                
            <div className='space-y-4 mt-8' >
                        {mainComments.map((comment) => (
                            <Comment key={comment._id} comment={comment} 
                            addCommentHandler = {addCommentHandler}  
                            logginedUserId={logginedUserId} 
                            affectedComment = {affectedComment} 
                            setAffectedComment = {setAffectedComment}
                            updateComment = {updateCommentHandler}
                            deleteComment = {deleteCommentHandler}
                            replies = {getReplaysHandler(comment._id)}
                            />
                        ) )}
                </div>
        </div>
    )
}

export default CommentsContainer