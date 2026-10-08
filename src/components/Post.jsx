import Actions from './Actions';

function Post({author, text, title, onDelete, id}){
    return(
        <article className='post'>
            <h2>{title}</h2>
            <p className='post-text'>{text}</p>
            <p className='post-author'>{author}</p>
            
            <Actions />

            <button className='delete-button' onClick={() => onDelete(id)}>
                Удалить
            </button>
        </article>
    )
}

export default Post;