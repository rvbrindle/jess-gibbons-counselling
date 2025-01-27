import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";


export default function Testimonial() {
    const testimonialLinks = [
        `${process.env.PUBLIC_URL}/testimonial-1.png`,
        `${process.env.PUBLIC_URL}/testimonial-2.png`,
        `${process.env.PUBLIC_URL}/testimonial-3.png`,
        `${process.env.PUBLIC_URL}/testimonial-4.png`,
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(
        {delay: 5000}
    )])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    const testimonials = testimonialLinks.map(testimonial => {
        return (
            <div className="embla__slide min-w-0 basis-full md:basis-8/12 flex-none mb-12 p-12">
                <img className='w-full mx-auto md:w-1/2 rounded shadow-xl shadow-black border-2 border-tertiary' src={testimonial} alt='testimonial from customer'/>
            </div>
        )
    })

    return (
        <div className="embla overflow-hidden w-full" ref={emblaRef}>
            <div className="embla__container flex">
                { testimonials }
            </div>
        </div>
    )
}