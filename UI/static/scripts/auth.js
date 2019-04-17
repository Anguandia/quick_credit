document.write(`<form id='signupform'>\
<label class='signup'>first name<span>*</span>\
<input name='first_name' class='signup' id='first' placeholder='first name' required></input>\
</label>\
<label class='signup'>family name<span>*</span>\
<input name='family_name' class='signup' id='family_name' placeholder='family name' required></input>\
</label>\
<label class='signin'>user Name<span>*</span>\
<input name='user_name' class='signin' id='user_name' placeholder='enter user name or email' required></input>\
</label>\
<label class='signup'>user Name\
<input name='user_name' class='signin signup' id='user_name' placeholder='enter user name or email' required></input>\
</label>\
<label class='signup'>email<span>*</span>\
<input name='email' type='email' class='signup' id='email' placeholder='email' required></input>\
</label>\
<label class='signup'>phone\
<input type='mobilePhone' class='signup' id='phone' placeholder='phone number'></input>\
</label>\
<label for='password' class='signup signin'>password<span>*</span>\
<input type='password' class='signup signin' id='password' placeholder='password' required></input>\
</label>\
<label for='confirm_password' class='signup'>confirm password<span>*</span>\
<input type='password' class='signin' id='confirm_password' placeholder='retype password' required></input>\
</label>\
<button type='submit' class='signin signup'>submit</button>\
</form>`);
