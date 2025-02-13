import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import {toast, ToastContainer} from "react-toastify";
import {useState} from "react";

export default function Form({props}) {
    const fields = props.fields;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        message: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    const handleSubmit = async () => {
        const formData = new FormData(document.querySelector('form'));
        try {
            const response = await fetch("https://api.sheetmonkey.io/form/fj2wr7QPhnxBhUKjfDEfjr", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                toast("Thanks! I will get back to you shortly");
            } else {
                toast("Failed! Please try again");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast("Failed! Please try again");
        }
    };

    return (
        <>
            <div
                className='flex flex-row w-full md:flex-row items-center align-middle content-center justify-evenly py-10 md:py-8 text-2xl'>
                <a className='text-lg w-1/6 md:w-1/12 content-center items-center justify-center text-center cursor-pointer'
                   href='tel:07719777620'>
                    <Icon
                        width='full'
                        icon='call'
                    />
                </a>

                <a className='text-lg w-1/6 md:w-1/12 content-center items-center justify-center text-center cursor-pointer'
                   href='https://www.instagram.com/jess_gibbons_counselling/'>
                    <Icon
                        width='full'
                        icon='instagram'
                    />
                </a>

                <a className='text-lg w-1/6 md:w-1/12 content-center items-center justify-center text-center cursor-pointer'
                   href='https://www.facebook.com/people/Jess-Gibbons-Counselling-Services/61564433574320/'>
                    <Icon
                        width='full'
                        icon='facebook'
                    />
                </a>

            </div>

            <form
                method="post"
                className="mt-6 text-white py-4 w-11/12 md:w-3/4 text-xl text-center mx-auto flex-col bg-secondary rounded-lg border-2 border-white shadow-2xl"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <ToastContainer
                    position="bottom-center"
                />
                <div className="w-3/4 mx-auto form-group flex flex-col">
                    <h2 className='py-6 text-4xl'>Contact</h2>

                    <label
                        className="my-4 justify-evenly align-middle items-center flex flex-col md:flex-row">
                        <p className='text-sm md:text-lg md:w-1/4 mb-4 md:mb-0'>Name:</p>
                        <input
                            className="w-3/4 p-2 text-zinc-900 focus:outline-tertiary"
                            name="name"
                            type="text"
                            value={formData.name}
                            required={true}
                            onChange={handleChange}
                        />
                    </label>

                    <label
                        className="my-4 justify-evenly align-middle items-center flex flex-col md:flex-row">
                        <p className='text-sm md:text-lg md:w-1/4 mb-4 md:mb-0'>Email:</p>
                        <input
                            className="w-3/4 p-2 text-zinc-900  focus:outline-tertiary"
                            name="email"
                            type="email"
                            value={formData.email}
                            required={true}
                            onChange={handleChange}
                        />
                    </label>

                    <label
                        className="my-4 justify-evenly align-middle items-center flex flex-col md:flex-row">
                        <p className='text-sm md:text-lg md:w-1/4 mb-4 md:mb-0'>Tel:</p>
                        <input
                            className="w-3/4 p-2 text-zinc-900  focus:outline-tertiary"
                            name="telephone"
                            type="tel"
                            value={formData.telephone}
                            required={true}
                            onChange={handleChange}
                        />
                    </label>

                    <label
                        className="my-4 justify-evenly align-middle items-center flex flex-col md:flex-row">
                        <p className='text-sm md:text-lg md:w-1/4 mb-4 md:mb-0'>Message:</p>
                        <input
                            className="w-3/4 p-2 text-zinc-900 focus:outline-tertiary"
                            name="message"
                            type="textarea"
                            value={formData.message}
                            required={true}
                            onChange={handleChange}
                        />
                    </label>

                    <p className='text-center text-xs'>*All communication is strictly confidential and will not be
                        shared
                        with <strong>any</strong> 3rd party sources
                    </p>

                    <input type="hidden" className='hidden' name="Created" value="x-sheetmonkey-current-date-time"/>
                    <input
                        type="submit"
                        className='p-2 my-4 w-1/3 self-center cursor-pointer bg-tertiary hover:scale-110'
                    />
                </div>
            </form>
        </>
    )
};
