import Icon from "./Icon.jsx";

export default function AboutMePage({props}) {
    return (
        <div className='min-w-screen min-h-screen flex flex-grow bg-slate-900'>
            <div id='about-me' className='scroll-mt-20'></div>
            <div className='container text-white z-10 flex flex-col flex-grow'>
                <h2 className='pt-12 pb-4 text-6xl text-center'>About Me</h2>
                <h3 className='pb-8 text-xl text-center'>My Journey In Counselling Practice</h3>
                <img className='w-10-rem h-10-rem rounded-full mx-auto border-2 border-tertiary' src='/src/assets/avatarPhoto.png'
                     alt='avatar image'/>
                <p className='py-4 pt-8'>
                    I am an integrative counsellor who is person-centred at my roots but can use other approaches such
                    as CBT and trauma techniques in my therapy.
                </p>
                <p className='py-4'>
                    I am dedicated to helping individuals navigate their journey through life, addressing challenges
                    such as stress, anxiety, depression, low mood, relationship issues, and bereavement.
                </p>
                <p className='py-4'>
                    I provide a safe, welcoming, and healing environment where clients can explore their concerns
                    without fear of judgment or opinions. my style of counselling encourages you to lead the process,
                    going at a pace that is unique to you.
                </p>
                <p className='py-4'>

                    With a background in healthcare and lived experience with mental health challenges, I bring a deep
                    understanding and empathy to my work.
                </p>
                <p className='py-4'>
                    I have supported clients facing a broad range of difficulties
                    and have also volunteered as a counsellor with Home Start, a family support charity offering
                    practical and emotional assistance to parents who need support.
                </p>
                <p className='py-4'>
                    Understanding that life can be hectic, I offer flexible scheduling for sessions, including weekly or
                    fortnightly options, as well as evening appointments to accommodate busy lifestyles subject to
                    availability.
                </p>
                <p className='py-4'>
                    As a registered member of the NCPS, I have completed
                </p>
                <ul className='p-4 md:flex md:flex-row md:grid md:grid-cols-3 md:justify-evenly'>
                    <li className='flex flex-row w-full items-center gap-4 md:gap-4 py-4 text-center border-secondary border-b-2 md:border-0 rounded'>
                        <Icon
                            width='1/3 p-6 md:w-1/4 md:p-0'
                            icon='therapy'
                        />
                        <h3 className='text-left w-3/4'>Level 4 Diploma in Therapeutic Counselling</h3>
                    </li>
                    <li className='flex flex-row justify-center items-center py-4 gap-4 border-secondary border-b-2 md:border-0 text-center'>
                        <Icon
                            width='1/3 p-6 md:w-1/4 md:p-0'
                            icon='certificate'
                        />
                        <h3 className='text-left  w-3/4'>Diploma in CBT skills</h3>
                    </li>
                    <li className='flex flex-row justify-center items-center py-4 gap-4 border-secondary border-b-2 md:border-0  text-center'>
                        <Icon
                            width='1/3 p-6 md:w-1/4 md:p-0'
                            icon='phone-call'
                        />
                        <h3 className='text-left  w-3/4'>Training in Online and Telephone Counselling</h3>
                    </li>
                    <li className='flex flex-row justify-center items-center py-4 gap-4 border-secondary border-b-2 md:border-0 text-center'>
                        <Icon
                            width='1/3 p-6 md:w-1/4 md:p-0'
                            icon='psychology'
                        />
                        <h3 className='text-left  w-3/4'>Three Phase Trauma Treatment Model</h3>
                    </li>
                    <li className='flex flex-row justify-center items-center py-4 border-secondary border-b-2 md:border-0  gap-4 text-center'>
                        <Icon
                            width='1/3 p-6 md:w-1/4 md:p-0'
                            icon='guarantee'
                        />
                        <h3 className='text-left  w-3/4'>Oliver McGowan Trust Autism training</h3>
                    </li>
                    <li className='flex flex-row justify-center items-center py-4 border-secondary border-b-2 md:border-0 gap-4 text-center'>
                        <Icon
                            width='1/3 p-6 md:w-1/4 md:p-0'
                            icon='adhd'
                        />
                        <h3 className='text-left  w-3/4'>Understanding ADHD</h3>
                    </li>
                    <li className='flex flex-row justify-center items-center py-4 gap-4 md:border-0 text-center'>
                        <Icon
                            width='1/3 p-6 md:w-1/4 md:p-0'
                            icon='supporting'
                        />
                        <h3 className='text-left  w-3/4'>Safeguarding Adults and Children Levels 1 & 2 </h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}