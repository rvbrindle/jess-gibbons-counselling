import Card from "./Card.jsx";
import Testimonial from "./Testimonial";

export default function MyServicesPage() {
    return (
        <div className='min-w-screen min-h-screen flex flex-grow bg-white flex-col'>
            <div id='my-services' className='scroll-mt-20'> </div>
            <div className='container text-black z-10 flex flex-col flex-grow'>
                <h2 className='pt-12 pb-4 text-5xl text-center'>My Services</h2>
                <h3 className='pb-8 text-xl text-center' >Your Journey With Counselling</h3>
                <p className='pb-4'>
                    If you feel I may be the right counsellor for you, please get in touch via phone call, email or via
                    the contact form below.
                </p>
                <p>
                    I can offer a free 15 minute initial consultation via telephone. From this consultation, I can give
                    you more information about my approach to counselling and we can both decide if we can work
                    together.
                </p>
                <div className='container w-full flex flex-col md:flex-row justify-evenly gap-8 my-12'>
                    <Card props={
                        {
                            title: '15 Minute Consultation',
                            img: `${process.env.PUBLIC_URL}/card-image-1.png`,
                            text: '15 minute initial telephone consultation to discuss suitability',
                            pricing: '£0.00'
                        }
                    }/>
                    <Card props={
                        {
                            title: '1:1 Counselling Session',
                            img: `${process.env.PUBLIC_URL}/card-image-2.png`,
                            text: '50 minute face to face, online or telephone counselling session, tailored to your needs',
                            pricing: '£45.00 - £55.00'
                        }
                    }/>
                    <Card props={
                        {
                            title: 'Concessions Available',
                            img: `${process.env.PUBLIC_URL}/card-image-3.png`,
                            text: 'Counselling sessions at a lower price for students, trainee counsellors and clients on a lower or no income.',
                            pricing: '£POA *limited spaces apply'
                        }
                    }/>
                </div>
            </div>
            <div className='text-black z-10 flex flex-col flex-grow bg-primary'>
                <h2 className='pt-12 pb-4 text-5xl text-center'>What People Say</h2>
                <Testimonial/>
            </div>
        </div>
    )
}