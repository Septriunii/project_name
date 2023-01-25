import React from "react";
// import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


const SurveyForm = () => {
e
    const [form, submitForm] = useState();
    const [range, setRange] = useState(1);

    const rating_range = useRef(1);

    const rating = () => {
        setRange(rating_range.current.value);
    }

    return (
        <>
            <form className="mx-auto my-3 p-3 w-full max-w-[500px] bg-white drop-shadow-lg">
                <h1 className="text-xl font-semibold">Survey Form</h1>
                <p className="text-xs">Please fill up the necessary information below as honestly as possible</p>
                <hr className="my-2 h-[2px] bg-slate-300 border-slate-300" />
                <section>
                    <label htmlFor="preferred" className="flex flex-col gap-3">
                        <span className="font-semibold">What was your favorite coffee ?</span>
                        <input type="text" name="" id="preferred" className="p-1 rounded-lg border-2 border-slate-300" />
                    </label>
                    <br />
                    <label htmlFor="" className="flex flex-col">
                        <span className="font-semibold">Where did you discover our shop ?</span>
                        <label htmlFor="cbox-1" className="px-3 flex gap-1 cursor-pointer">
                            <input type="checkbox" name="" id="cbox-1" className="accent-[brown]" />
                            <span>Referred by a friend</span>
                        </label>
                        <label htmlFor="cbox-2" className="px-3 flex gap-1  cursor-pointer">
                            <input type="checkbox" name="" id="cbox-2" className="accent-[brown]" />
                            <span>Google Maps</span>
                        </label>
                        <label htmlFor="cbox-3" className="px-3 flex gap-1  cursor-pointer">
                            <input type="checkbox" name="" id="cbox-3" className="accent-[brown]" />
                            <span>Facebook</span>
                        </label>
                        <label htmlFor="cbox-4" className="px-3 flex gap-1  cursor-pointer">
                            <input type="checkbox" name="" id="cbox-4" className="accent-[brown]" />
                            <span>Twitter</span>
                        </label>
                        <label htmlFor="cbox-5" className="px-3 flex gap-1  cursor-pointer">
                            <input type="checkbox" name="" id="cbox-5" className="accent-[brown]" />
                            <span>Instagram</span>
                        </label>
                        <label htmlFor="cbox-6" className="px-3 flex gap-1  cursor-pointer">
                            <input type="checkbox" name="" id="cbox-6" className="accent-[brown]" />
                            <span>Tiktok</span>
                        </label>
                    </label>
                    <br />
                    <label htmlFor="rating_range">
                        <span className="font-semibold">On a scale of 1 - 10. How would you rate the experience?</span>
                        <span className="flex items-stretch justify-center gap-3 p-3">
                            <input type="range" className="accent-[brown]" onChange={rating} ref={rating_range} name="" min="1" max="10" id="rating_range" defaultValue="1" />
                            <p className="text-sm">Rating : <strong>{range}</strong></p>
                        </span>
                    </label>
                </section>
                <hr className="my-2 h-[2px] bg-slate-300 border-slate-300" />
                <section className="w-full flex justify-between flex-row-reverse">
                    <button className="p-1 text-end w-fit bg-blue-600 rounded-lg text-white" type="submit">Submit</button>
                    <button className="p-1 text-end w-fit bg-red-600 rounded-lg text-white" type="Reset">Reset</button>
                </section>
            </form>
        </>
    )

}

export default SurveyForm;