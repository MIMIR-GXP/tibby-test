import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({img}) => {
    return (
        <div className={"hover:scale-125 transition-all cursor-pointer w-[200px] h-[200px] bg-jaune-normal rounded-full border-[10px] border-blanc overflow-hidden m-16"}>
            {img &&
                <img src={img} alt="logo" className={"scale-125"}/>
            }
        </div>
    );
};

export default Button;