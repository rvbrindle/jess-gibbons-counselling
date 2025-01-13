export default function Button({props}) {
    const handleClickScroll = (e) => {
        const elementHeader = document.getElementById(props.scrollHeader);

        elementHeader.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const handleClick = (e) => {
    }

    return (
        <>
            <div
                onClick={ (props.scroll) ? handleClickScroll : handleClick}
                className='bg-primary border-2 border-secondary bg-transparent py-2 px-4 cursor-pointer hover:bg-secondary hover:text-white transition-all ease-in-out'>
                { props.label }
            </div>
        </>
    )
}