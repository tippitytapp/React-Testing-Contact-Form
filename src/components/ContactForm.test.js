import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('test contact form displays on screen', () => {
    //ARRANGE
    const {getByLabelText} = render(<ContactForm />)
    //ACT -- there is no act for displaying
    //ASSERT
    const firstNameInput = getByLabelText(/First name/i)
    expect (firstNameInput).toBeVisible();
})