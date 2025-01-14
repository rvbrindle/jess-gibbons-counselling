export default function Card({props}) {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full -z-10 relative max-h-fit'>
                <img className='w-full border-2 border-primary h-auto' src={props.img} alt='card-1-img'/>
            </div>
            <div
                className='w-full bg-tertiary ml-4 -mt-12 py-8 flex gap-2 text-center flex-col hover:scale-105 transition-all ease-in-out cursor-pointer
                justify-center border-2 border-primary min-h-48 px-6 md:min-h-64 rounded shadow-md shadow-black'
            >
                <h2 className='text-3xl'>{props.title}</h2>
                <p>{props.text}</p>
                <small className='text-xl'>{props.pricing}</small>
            </div>
        </div>
    )
}