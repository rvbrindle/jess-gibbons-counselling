import Form from "./Form.jsx";

export default function ContactPage() {
    return (
        <div className='min-w-screen min-h-screen flex flex-grow bg-slate-700'>
            <div id='contact' className='scroll-mt-20'></div>
            <div className='container text-white z-10 flex flex-col flex-grow'>
                <h2 className='pt-12 pb-4 text-6xl text-center'>Get in Touch</h2>
                <h3 className='pb-8 text-xl text-center' >Begin <strong>Your</strong> Journey...</h3>
                <p className='text-center'>
                    If you would like any more information regarding the services I offer or how we could work together
                    please contact me via:
                </p>
                <Form props={{
                    fields:
                        {
                            'name': {
                                value: '',
                                type: String,
                                input: 'text',
                                required: true
                            },
                            'email': {
                                value: '',
                                type: String,
                                input: 'email',
                                required: true
                            },
                            'phone': {
                                value: '',
                                type: Number,
                                input: 'tel',
                                required: true
                            },
                            'message': {
                                value: '',
                                type: String,
                                input: 'text',
                                required: true
                            }
                        }
                }}/>
            </div>
        </div>
    )
}