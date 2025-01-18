import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function Form({props}) {
    const fields = props.fields;

    // Helper function to handle input changes (if needed later)
    const handleInputChange = (e, fieldName) => {
        const value = e.target.value;
        // Update value (you would typically use state management here)
        console.log(`Field ${fieldName} updated with value: ${value}`);
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
                className='w-full mx-auto p-16 bg-white mb-12 border-2 border-primary text-black flex flex-col md:my-3 gap-8 rounded'>
                {Object.entries(fields).map(([name, field]) => (
                    <div className='flex flex-col justify-between gap-4' key={name}>
                        <label
                            className='w-full'
                            htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                        <input
                            id={name}
                            type={field.input}
                            name={name}
                            value={field.value}
                            required={field.required}
                            onChange={(e) => handleInputChange(e, name)} // handle input changes
                            placeholder={`Enter your ${name}`}
                            className='p-2 border-l-4 border-secondary rounded'
                        />

                    </div>
                ))}
                <Button props={{
                    label: 'Send'
                }}/>
                <p className='text-center text-sm'>*All communication is strictly confidential and will not be
                    shared
                    with <strong>any</strong> 3rd party sources</p>

            </form>
        </>
    )
};
