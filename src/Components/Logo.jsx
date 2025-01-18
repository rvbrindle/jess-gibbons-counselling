import {COMPANY_NAME} from '../consts/consts.js'
export default function Logo({small= false}) {

    const logo = ((small === true)) ?  `${process.env.PUBLIC_URL}/Logo-small.png` :  `${process.env.PUBLIC_URL}/Logo.png`

    return (
        <div className='w-8-rem h-4-rem'>
            <img className='w-full h-full' src={logo}  alt={`${COMPANY_NAME} logo`}/>
        </div>
    )
}