import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('test that the form displays', () => {
    //ARRANGE
    const {getByTestId} = render(<ContactForm />)
    //ACT
    //ASSERT
    const formForm = getByTestId(/contactform/i)
    expect(formForm).toBeVisible();
})

test('test form inputs display on screen', () => {
    //ARRANGE
    const {getByLabelText} = render(<ContactForm />)
    //ACT -- there is no act for displaying
    //ASSERT
    const firstNameInput = getByLabelText(/First name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/Email/i)
    const messageInput = getByLabelText(/Message/i)
    expect (firstNameInput).toBeVisible();
    expect (lastNameInput).toBeVisible();
    expect (emailInput).toBeVisible();
    expect (messageInput).toBeVisible();
})

test('form inputs allow text input', () => {
    //ARRANGE
    const {getByLabelText} = render(<ContactForm />)
    const firstNameInput = getByLabelText(/First name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/Email/i)
    const messageInput = getByLabelText(/Message/i)
    //ACT
    fireEvent.change(firstNameInput,{target: {value: "marc"}});
    fireEvent.change(lastNameInput, {target: {value: "tapp"}});
    fireEvent.change(emailInput, {target: {value: "marc.tapp@gmail.com"}});
    fireEvent.change(messageInput, {target: {value: "this is a message to my dearest friends"}})
})