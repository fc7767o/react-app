import { useState } from "react";

function Actions(){
    const [likes, setLikes] = useState(0);
    const [reposts, setReposts] = useState(0)

    return(
        <div className="actions">
            <button onClick={() =>setLikes(likes + 1)}>
            ❤ {likes}
            </button>
            <button onClick={() => setReposts(reposts + 1)}>
            ✔ {reposts}
            </button>

            <button onClick={() =>{
                setLikes(0);
                setReposts(0);
            }}>
                Сбросить
            </button>

        </div>
    )

}

export default Actions;