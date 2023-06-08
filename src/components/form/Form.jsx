import React from 'react';
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const Form = ({id}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, r) => {
        console.log("Email: " + data.email, "Prénom: " + data.name);
        r.target.reset();
    }

    const handleClick = () => {
        // eslint-disable-next-line react/prop-types
        id.current.classList.replace("flex", "hidden");
    }

    return (
        <div ref={id} className={"hidden w-full h-screen justify-center items-center absolute"}>

            <div className={"w-full h-full fixed bg-fixed bg-noir opacity-80 z-10"}></div>

            <div className="relative rounded-3xl bg-jaune-clair shadow-lg w-6/12 max-sm:w-11/12 z-40">
                <button onClick={handleClick}
                    className="text-xl cursor-pointer absolute end-2 -top-12 rounded-full text-white p-1"
                ><h1>X</h1></button>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action="/"
                    className="mb-0 mt-6 space-y-4 flex flex-col items-center gap-4 p-8"
                >
                    <h1 className="text-center text-lg font-medium">Formulaire</h1>

                    <label
                        htmlFor="UserEmail"
                        className={`w-full relative block overflow-hidden border-b-2 border-noir bg-transparent pt-3 focus-within:border-noir 
                        ${ errors.email ? "focus-within:border-red-400" : ""}`}
                    >
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            {...register("email", {required: true, maxLength: 80, pattern: /^\S+@\S+$/i})}
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-noir uppercase transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                        >
                        Email
                      </span>
                    </label>

                    <label
                        htmlFor="UserEmail"
                        className={`w-full relative block overflow-hidden border-b-2 border-noir bg-transparent pt-3 focus-within:border-noir 
                        ${ errors.name ? "focus-within:border-red-400" : ""}`}
                    >
                        <input
                            type="text"
                            id="name"
                            placeholder="Prénom"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            {...register("name", {required: true, maxLength: 80, pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+(([',. -][a-zA-ZÀ-ÖØ-öø-ÿ ])?[a-zA-ZÀ-ÖØ-öø-ÿ]*)*$/i})}
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-noir uppercase transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                        >
                        Prénom
                      </span>
                    </label>


                    <button
                        type="submit"
                        className="w-full group relative inline-block focus:outline-none focus:ring"
                    >
                      <span
                          className="w-full absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                      ></span>

                        <span
                            className="w-full relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                        >
                            Envoyer
                        </span>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Form;