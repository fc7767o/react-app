import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useRef } from "react";

function Settings(){
    const { userName, setUserName, avatar, setAvatar} = useUser();
    const [error, setError] = useState('');
    const fileInputRef = useRef();

    function handleAvatarChange(event){
        const file = event.target.files[0];
        if(!file) {return;}
        if(!file.type.startWith('image/')){
            setError("Выберете файл изображения");
            event.target.value = "";
            return;
        }
        if(!file.size > 1024 * 1024){
            setError("Размер не должен превышать 1мб");
            event.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result);
            setError("");
        };
        reader.onerror = () => {
            setError("Не удалось");
        }
        reader.readAsDataURL(file);

    }
    function removeAvatar(){
        setAvatar("");
        setError("");
        if(fileInputRef.current){
            fileInputRef.current.value = "";
        }
    }

    return(
        <section className="Page">
            <h1>Настройки</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi minima dolorum non maxime, quod fugit exercitationem, id doloremque aut distinctio fugiat quas earum consequuntur eveniet dolores a obcaecati animi.</p>
            <div className="settings-avatar">
                {avatar ? (
                    <img src={avatar} alt="Аватар" className="avatar-preview" />
                )
                : (
                    <div>
                        {userName.charAt(0).toUpperCase() || "?"}
                    </div>
                )}
                <div className="avatar-controls">
                    <h2>Фото профиля</h2>
                    <input ref={fileInputRef} type="file" accept="image/*" onClick={handleAvatarChange}/>
                    <p>Изображение до 1мб</p>
                    {avatar && (
                        <button type="button" onClick={removeAvatar}>
                            Удалить фотографию
                        </button>
                    )}
                </div>
            </div>

            {error && (
                <p className="form-error">{error}</p>
            )}
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