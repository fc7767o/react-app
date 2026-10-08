import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";

function Prifile(){
const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Oxygen WordPress Site Builder Review",
            text: "Oxygen is a fairly new visual WordPress site builder from the Soflyy team – the developers behind WP All Import and WP Sandbox. The software has just officially launched as version 2.0, which offers advanced functionality from the initial release. Oxygen was designed to offer the ease of use of other theme and page builders […]",
            author: "Ksusha"
        }
    ]);

        const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function addPost(event){
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Ksusha"
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");

    }

    function deletePost(id){
        setPosts(
            posts.filter((post) => post.id != id)
        )
    }

    return(
        <section>
            <h1>Профиль</h1>
            <ProfileCard />
            <div className="feed">
                <h2>Мои публикации</h2>

            <form className='post-form' onSubmit={addPost}>
                <input type="text" placeholder='Заголовок' className='post-input' value={title} onChange={(event) => setTitle(event.target.value)}/>
                <textarea placeholder="Текст поста" className='post-textarea' value={text} onChange={(event) => setText(event.target.value)}></textarea>
                <button type='submit' className='post-button'> Опубликовать</button>
            </form>

            {posts.map((post) =>(
                 <Post key={post.id} author={post.author} title={post.title} text={post.text} id={post.id} onDelete={deletePost}/>
            )
            )}

            </div>
        </section>
        
    )
}

export default Prifile;