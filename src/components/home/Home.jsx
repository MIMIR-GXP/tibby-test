import React, {useRef} from 'react';
import Button from "../button/Button.jsx";
import Form from "../form/Form.jsx";
import Cash from "../../assets/cash.jpg";
import Star from "../../assets/star.jpg";

const Home = () => {

    const modalRef = useRef(null);

    const handleClick = () => {
        modalRef.current.classList.replace("hidden", "flex");
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-wrap">
            <Form id={modalRef} />
            <button onClick={handleClick}>
                <Button img={Star} />
            </button>

            <button onClick={handleClick}>
                <Button />
            </button>

            <button onClick={handleClick}>
                <Button />
            </button>

            <button onClick={handleClick}>
                <Button img={Cash} />
            </button>
        </div>
    );
};

export default Home;