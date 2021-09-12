import React, {useState, useEffect, useCallback} from 'react';
import styles  from './styles/note.css';
import Comment from './comment';


export default function Note(props){


    let [comments, setComment] = useState([]);
    let [value, setValue] = useState('');
    
    const getCommentLocalStorage = () =>{
        if (localStorage.getItem('comments') === null)
            localStorage.setItem('comments', JSON.stringify([]));
        else{
            let localComments = JSON.parse(localStorage.getItem('comments'));
            setComment(comments = localComments);
        }
    };

    const updateCommentsLS = useCallback(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments])

    const handleSubmit=()=>{
        setComment(comments.push(value));
        console.log(comments);
    }

    useEffect(() =>{
        getCommentLocalStorage();
    }, []);

    useEffect(() =>{
        updateCommentsLS();
    }, [comments, updateCommentsLS])

    

    return(
        <div className="comments" id="commentsApp">
        <h2 className="comments_header">Comments</h2>
        <div className="comments_space" id="comments_space">
            <Comment comment = {comments}></Comment>
        </div>
        <form className="comments_form" onSubmit={handleSubmit}>
            <textarea id="comments_input" className="comments_input" onChange={(event) => setValue(value = event.target.value)}></textarea>
            <button className="comments_button" type='submit'>Send</button>
        </form>


    </div>
    )
}