//Get the contacts from https://reqres.in/api/users?page=1 
export async function getContacts(){

    //Select contact drop down menu item
    const sel = document.querySelector('.input-contact-list');

    try{
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();

        if(!response.ok) throw new Error(`${data.message} ${response.status}`);

        //Insert the contact name options to the dropdown select menu
        data.data.forEach(function(i){
            sel.insertAdjacentHTML('beforeend', '<option value="' + i.email + '">' + i.first_name + ' ' + i.last_name + '</option>');
        });

    }catch (err){
        alert(err);
    }
}