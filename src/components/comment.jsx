import React,{useEffect} from 'react';

export default function Comment (props){
    let comments = [props.comment];
    

    return(
        comments.map((comment)=>{
            return(
            comment!=props.comment.comments?<div>{comment}</div>:<div className='lastComment'>{comment}</div>);
        })
    );
}