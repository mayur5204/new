document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');
  const userListContent = document.getElementById('userListContent');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const user = { name, email };

    // Store user data in local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Simulate server response
    setTimeout(() => {
      alert('User registered successfully!');
    }, 500);

    form.reset();
  });

  // Populate user list on userList page
  $(document).on('pagebeforeshow', '#userList', function () {
    userListContent.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `Name: ${user.name}, Email: ${user.email}`;
      userListContent.appendChild(li);
    });
  });
});