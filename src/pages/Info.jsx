import { useState } from "react";

function Info() {
    const gifs = [
        "https://i.pinimg.com/originals/0d/6e/de/0d6ede17c1299981febb6718693009f1.gif",
        "https://img1.liveinternet.ru/images/attach/d/2/152/232/152232999_u85.gif",
        "https://i.pinimg.com/originals/09/57/0e/09570e264766df8a8a7b998242b032b1.gif",
    ];

    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current - 1 + gifs.length) % gifs.length);
    };

    const next = () => {
        setCurrent((current + 1) % gifs.length);
    };

    return (
        <section className="page-info">
            <h1>О проекте</h1>

            <div className="carousel">
                <button onClick={prev} className="carousel-btn">←</button>

                <img src={gifs[current]} alt={`гифка ${current + 1}`} />

                <button onClick={next} className="carousel-btn">→</button>
            </div>

            
            <div className="carousel-dots">
                {gifs.map((_, i) => (
                    <span
                        key={i}
                        className={i === current ? "dot active" : "dot"}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Info;