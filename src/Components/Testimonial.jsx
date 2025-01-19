import {useEffect, useState} from "react";


export default function Testimonial() {
    const testimonials = [
        "I felt that Jess and I built a rapport very quickly and that she created a safe, comfortable space for us to talk. This meant that I found it really easy to talk to Jess and was able to discuss things that I usually find it very hard to speak of.",
        "My sessions with Jess have been really good and helpful, I don’t open up to people but from the first session I could talk to her freely and honestly. I’m going to really miss our sessions.",
        "Working with Jess has been a breeze, I have found her to be very supportive and I have felt safe sharing my issues with her. Jess is a down-to-earth person who takes the time to really get to know your story. Would recommend to others any day",
        "As a new mum, I was really struggling with the pressures of raising my children and didn’t have much support at home. Jess helped me by listening to me and giving me a space to talk about my feelings and stress with no judgement.",
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
                setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 10000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [testimonials.length]);

    return (
        <>
            <h2 className='pt-12 pb-4 text-4xl text-center'>What People Say</h2>

            <div className='w-full rounded border-2 bg-primary border-secondary mb-20'>
                <p className={`italic p-8 text-black`}>
                    "{testimonials[currentTestimonialIndex]}"
                </p>
            </div>
        </>
    );
}