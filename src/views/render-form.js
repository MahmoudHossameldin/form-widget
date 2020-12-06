import { FormFunctionality } from './form-functionality'
import { getContacts } from './get-contacts-from-api'
import html from './form.html';
import './form.css';
import datepicker from 'js-datepicker';
import 'js-datepicker/dist/datepicker.min.css';

let elements = [];
let body;

export function renderForm() {
    // convert plain HTML string into DOM elements
    let temporary = document.createElement('div');
    temporary.innerHTML = html;

    // append form elements to body
    body = document.getElementsByTagName('body')[0];
    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        body.appendChild(temporary.children[0]);
    }

    //Add the datepicker to the input field
    datepicker('.input-datepicker');

    // Get the contacts drop down data from the API
    getContacts();

    // Apply the form functionality and validation
    const formFunctionality = new FormFunctionality();

}