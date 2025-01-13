import {COMPANY_NAME} from "../consts/consts.js";

export default function Footer() {
    const date = new Date()
    return (
        <div className='w-full p-8 flex bg-primary'>
            <p className='mx-auto'> &copy; {COMPANY_NAME} {date.getFullYear()} </p>
        </div>
    )
}