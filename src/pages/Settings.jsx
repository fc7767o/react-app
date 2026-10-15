import { useUser } from "../context/UserContext";

function Settings(){
    const { userName, setUserName} = useUser();
    return(
        <section className="Page">
            <h1>Настройки</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi minima dolorum non maxime, quod fugit exercitationem, id doloremque aut distinctio fugiat quas earum consequuntur eveniet dolores a obcaecati animi.</p>
            <label>
                Имя пользователя
                <input type="text" 
                value={userName}
                onChange={(event)=>
                    setUserName(event.target.value)
                }/>
            </label>
            <p>Усвтановлено имя: {userName}</p>
        </section>
    );
}

export default Settings;