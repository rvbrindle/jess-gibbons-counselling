export default function Page({props}) {
    return (
        <div className='h-full w-full'>
            <div className='w-full h-full bg-primary'>
                <video preload={'/src/assets/bg-vid.mp4'} muted loop autoPlay={true} className='opacity- h-full w-full'>
                    <source src="/bg-vid.mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}