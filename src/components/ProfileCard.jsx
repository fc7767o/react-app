import { useState } from 'react';
import Post from './Post';

function ProfileCard(){
    // const [posts, setPosts] = useState([
    //     {
    //         id: 1,
    //         title: "Oxygen WordPress Site Builder Review",
    //         text: "Oxygen is a fairly new visual WordPress site builder from the Soflyy team – the developers behind WP All Import and WP Sandbox. The software has just officially launched as version 2.0, which offers advanced functionality from the initial release. Oxygen was designed to offer the ease of use of other theme and page builders […]",
    //         author: "Ksusha"
    //     },
        
    //     {
    //         id: 2,
    //         title: "Follow these principles to design an effective website",
    //         text: "The success of any web site is not determined by its visual design, but by its utility, and most importantly usability. The user is in the center of attention because the user is the one who is clicking the mouse and using the page, so everything must revolve around him.",
    //         author: "Ksusha"
    //     },

    //     {
    //         id: 3,
    //         title: "Freebie: Stone and Concrete Textures",
    //         text: "Today we have a set of free high res stone and concrete textures from Caleb Kimbrough. The set includes 10 high-quality textures that can be used for personal or commercial purposes. You can download any of the images from Flickr (click on the image that you want and you’ll be led to the Flick page). […]",
    //         author: "Ksusha"
    //     },
    //     {
    //         id: 4,
    //         title: "450+ Adobe Illustrator Patterns",
    //         text: "The Adobe Creative Suite has to be one of the more popular design packages. Illustrator is specifically a great tool for any project including website layouts, vector art, illustrations, logos, and so much more. One resource many designers utilize are patterns for backgrounds. Repeating patterns are often more popular in websites to fill the whole […]",
    //         author: "Ksusha"
    //     },
        
    //     {
    //         id: 5,
    //         title: "The Content Dilemma – Executing and Scaling Your Campaigns",
    //         text: " The concept of Content Personalization is to show a customized message to the right person with the hypothesis that this will lead to higher revenue/engagement/[Insert KPI here].  The idea is solid and has been proven out at small scale but very few, if any, organizations are successfully executing.  As marketers, we’ve bought the DMPs, […]",
    //         author: "Ksusha"
    //     },

    //     {
    //         id: 6,
    //         title: "How to Design a Profitable Landing Page",
    //         text: "Good design of a Landing Page (LP) is not just about the emotions you experience when looking at it – it’s actually a much wider concept and the main goal of it is to solve business tasks. Unfortunately, many novice marketers and businessmen make a common mistake and set wrong priorities when designing an LP. […]",
    //         author: "Ksusha"
    //     },
    //     {
    //         id: 7,
    //         title: "Registrations are due soon for taking part in The A’ Design Award – Sign Up Your Designs Today",
    //         text: "A’ Design Award is the World’s most prestigious international annual juried accolade for design. The A’ Design Competitions are organized in all creative fields to highlight the greatest designs from all countries in all disciplines. Entries to the A’ Design Awards are blind peer reviewed by an expert jury panel of leading academics, prominent press […]",
    //         author: "Ksusha"
    //     },
        
    //     {
    //         id: 8,
    //         title: "4 Ways to Personalize Your Emails with Real Examples",
    //         text: "All of us love personalized services. Regardless of the business you’re running, personalization can make a huge difference. The same applies to email marketing as well. By collecting data on customer behaviors, you can find out what they’re interested in, which also helps you personalize the email tailored to their unique behavior and the interest. […]",
    //         author: "Ksusha"
    //     }
    // ])

    // const [title, setTitle] = useState("");
    // const [text, setText] = useState("");

    // function addPost(event){
    //     event.preventDefault();

    //     const newPost = {
    //         id: Date.now(),
    //         title: title,
    //         text: text,
    //         author: "Ksusha"
    //     }

    //     setPosts([...posts, newPost]);
    //     setTitle("");
    //     setText("");

    // }

    // function deletePost(id){
    //     setPosts(
    //         posts.filter((post) => post.id != id)
    //     )
    // }

    


    return(
        <section className='profile-card'>
            <div className='profile'>
                <div className="avatar">
                    <img className='avatar-pink' src="https://img1.picmix.com/output/pic/normal/5/6/8/5/9845865_f6237.gif" alt="" />
                </div>
                <div className='profile-info'>
                    <h2>My Real Name</h2>
                    <p>social network nickname</p>
                </div>
                <p className='profile-description'>oops i did it again</p>
            </div>

        {/* <form className='post-form' onSubmit={addPost}>
            <input type="text" placeholder='Заголовок' className='post-input' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <textarea placeholder="Текст поста" className='post-textarea' value={text} onChange={(event) => setText(event.target.value)}></textarea>
            <button type='submit' className='post-button'> Опубликовать</button>
        </form>

            {posts.map((post) =>(
                 <Post key={post.id} author={post.author} title={post.title} text={post.text} id={post.id} onDelete={deletePost}/>
            )
            )} */}
            
            {/* <Post author="Ksusha" title="Блалала" likes={17} text="еще какой-то текст"/>
            <Post author="Ksusha" title="Пупупу" likes={17} text="и еще какой-то текст"/> */}
        </section>
    )
}

export default ProfileCard;

