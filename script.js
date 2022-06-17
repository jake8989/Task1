'use strict';
// const wrong = 1;

function formValidation() {
  const name = document.forms['mainform']['fname'].value;
  const lastName = document.forms['mainform']['flname'].value;
  const phone = Number(document.forms['mainform']['phone'].value);
  const email = document.forms['mainform']['email'].value;
  const address = document.forms['mainform']['address'].value;
  console.log(phone);
  if (name == 'Name' || name == '') {
    alert('First name is required ');
    return false;
  }
  if (lastName == 'Last Name' || lastName == '') {
    alert('Last name is required ');
    return false;
  }
  if (email == 'Email' || email == '') {
    alert('Email is must!!');
    return false;
  }
  if (!(email.includes('@') && email.includes('gmail.com'))) {
    alert('Email should be in the correct manner');
    return false;
  }
  if (phone == 'Phone' || phone == '') {
    alert('Phone is required ');
    return false;
  }
  if (phone === NaN) {
    alert('Please enter number!!!');
    return false;
  }
  if (String(phone).length != 10) {
    alert('Please enter a valid number');
    return false;
  }

  if (address == 'Address' || address == '') {
    alert('Address is must!!');
    return false;
  } else {
    document.getElementById('message-submit').textContent =
      'Your form has been submitted succefully';
    //we dont have any backend for storing data so we return it false //
    return false;
  }
}
