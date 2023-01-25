import React, { useState, useRef } from "react";
import { useEffect } from "react";
import SurveyForm from "./SurveyForm";


// ! Coffee Order Component
const OrderCoffeeForm = () => {

    const [formInputs, submitForm] = useState(null);
    const [renderComp, setRender] = useState('coffee');


    // * Input References an alternative for using id's idk why....
    const select_coffee = useRef(null);
    const select_dessert = useRef(null);
    const select_order = useRef(null);

    //* When Form is submitted something happens here
    const handleSubmit = (event) => {
        event.preventDefault();
        let selections = {
            coffee: select_coffee.current.value,
            dessert: select_dessert.current.value,
            order: select_order.current.value
        }
        submitForm(selections);
        setRender('survey');


    }

    //* JSON Thingy
    const form_data = JSON.parse(JSON.stringify(formInputs));



    return (
        <form onSubmit={handleSubmit} onReset={() => submitForm(null)} className="text-white px-3 py-7 mx-auto my-0 w-full max-w-[500px] bg-[brown] rounded-md">
            <hr className="my-2 h-[2px] bg-slate-300 border-slate-300" />
            <h1 className="text-2xl text-center">Hello! Welcome to <em>La Cafe</em></h1>
            <hr className="my-2 h-[2px] bg-slate-300 border-slate-300" />
            <label htmlFor="select-coffee" className="text-[brown] bg-white flex flex-col p-1 rounded-lg ">
                <span>What Coffee would you like to drink?</span>
                <select id="select-coffee" ref={select_coffee} className="text-[brown] p-1 rounded-lg border-2 border-slate-300 cursor-pointer" required>
                    <option value="">Choose...</option>
                    <option value="Americano">Americano</option>
                    <option value="Latte">Latte</option>
                    <option value="Black Coffee">Black Coffee</option>
                    <option value="Instant Coffee">Instant Coffee</option>
                </select>
            </label>
            <hr className="my-2 h-[2px] bg-slate-300 border-slate-300" />
            <label htmlFor="select-dessert" className="text-[brown] bg-white flex flex-col p-1 rounded-lg">
                <span>And for dessert?</span>
                <select id="select-dessert" ref={select_dessert} className="text-[brown] p-1 rounded-lg border-2 border-slate-300 cursor-pointer" required>
                    <option value="">Choose...</option>
                    <option value="CheeseCake">CheeseCake</option>
                    <option value="CupCake">CupCake</option>
                    <option value="Brownie">Brownie</option>
                    <option value="Cookies">Cookies</option>
                    <option value="None">None</option>
                </select>
            </label>
            <hr className="my-2 h-[2px] bg-slate-300 border-slate-300" />
            <label htmlFor="select-coffee" className="text-[brown] bg-white flex flex-col p-1 rounded-lg ">
                <span>Will you be drinking...</span>
                <select id="select-coffee" ref={select_order} className="text-[brown] p-1 rounded-lg border-2 border-slate-300 cursor-pointer" required>
                    <option value="">Choose...</option>
                    <option value="Will be drinking here">In the cafe</option>
                    <option value="For take out">Take out</option>
                </select>
            </label>
            <hr className="my-2 h-[2px] bg-slate-300 border-slate-300" />
            <section>
                <button type="submit" className="p-1 rounded-lg border-2 border-white hover:bg-white hover:text-[brown] mr-1">Order</button>
                <button className="p-1 rounded-lg bg-white text-[brown]" type="reset" >Reset</button>
            </section>
            <details open>
                <summary className="block cursor-pointer bg-white text-[brown] rounded-lg p-1 mt-3 text-center">My Orders</summary>
                <ul>
                    <li className="p-1">My Coffee is : {form_data == null ? 'Choose Coffee' : form_data.coffee}</li>
                    <li className="p-1">My Coffee is : {form_data == null ? 'Choose Dessert' : form_data.dessert}</li>
                    <li className="p-1">My Order : {form_data == null ? 'Choose Order' : form_data.order}</li>
                </ul>
            </details>
        </form>
    )

}



// ! Main Render
export default () => {
    const [renderComp, setRender] = useState('coffee');

    useEffect(() => {
        console.log('Button ' + renderComp)
    }, [setRender]);


    return (
        <>
            <br />
            <div className="text-center flex justify-center items-center">
                <button className="p-1 mr-1 bg-[brown] text-white rounded-md" onClick={() => { setRender('coffee'); }}>Coffee</button>
                <button className="p-1 mr-1 bg-[brown] text-white rounded-md" onClick={() => { setRender('survey'); }}>Survey</button>
                <p className="w-[300px] text-start">Now showing : <strong>{renderComp}</strong></p>
            </div>
            <br />
            <div>
                {
                    renderComp == 'coffee' ? <OrderCoffeeForm /> : renderComp == 'survey' ? <SurveyForm /> : <OrderCoffeeForm />
                }
            </div>

        </>
    )
}

