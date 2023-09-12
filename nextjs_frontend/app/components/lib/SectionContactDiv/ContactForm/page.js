'use client';
import React, {useRef, useState} from 'react';
import validation from '@/app/utils/validation';
// import emailjs from '@emailjs/browser';

const page = () => {
    const form = useRef();

    const [values, setValues] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [send, setSend] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
                process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    const handelChanges = (e) => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(validation(values)).length !== 0) {
            setErrors(validation(values));
            return;
        }
        sendEmail(e);
        e.target.reset();
        setValues({name: '', email: '', phoneNumber: '', message: ''});
        setSend(true);
        setTimeout(() => {
            setSend(false);
        }, 3000);
    };

    const clearError = (e) => {
        const {name} = e.target;
        setErrors({...errors, [name]: ''});
    };
    return (
        <form ref={form} onSubmit={handelSubmit}>
            {send && (
                <div className="succesCard">
                    <h2 className="">Succes</h2>
                    <p className="">Uw bericht is verzonden</p>
                </div>
            )}
            <div className="inputDiv">
                {errors.name && <span>{errors.name}</span>}
                <input
                    text="Naam"
                    type="text"
                    placeholder="Uw naam"
                    name="name"
                    id="name"
                    errors={errors.name}
                    onChange={handelChanges}
                    onFocus={clearError}
                />
            </div>
            <div className="inputDiv">
                {errors.email && <span>{errors.email}</span>}
                <input
                    text="Email"
                    type="text"
                    placeholder="Uw email aders"
                    name="email"
                    id="email"
                    errors={errors.email}
                    onChange={handelChanges}
                    onFocus={clearError}
                />
            </div>
            <div className="inputDiv">
                {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                <input
                    text="Telefoon"
                    type="text"
                    placeholder="Uw telefoon nummer"
                    name="phoneNumber"
                    id="phoneNumber"
                    errors={errors.phoneNumber}
                    onChange={handelChanges}
                    onFocus={clearError}
                />
            </div>
            <div className="inputDiv">
                {errors.message && <span>{errors.message}</span>}
                <textarea
                    rows={4}
                    placeholder="Uw bericht"
                    name="message"
                    id="message"
                    //   className={` ${
                    //     errors.message && ''
                    //   }`}
                    onChange={handelChanges}
                    onFocus={clearError}
                ></textarea>
            </div>

            <button type="submit" className="button">
                <p>bericht versturen</p>
            </button>
        </form>
    );
};

export default page;