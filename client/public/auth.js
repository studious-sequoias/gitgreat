var login = function() {
  var username = $('#login').val();
  console.log('FROM LOGIN, USERNAME:', username);
  $.ajax({
    method: 'GET',
    url: '/api/users/name/' + username,
    success: function(person) {
      if (person) {
        sessionStorage.setItem('user', person.name);
        sessionStorage.setItem('userId', person.id);
        //redirect to home
        window.location.href="/";
      } else {
        console.log('USER WAS NOT FOUND, REDIRECTING TO SIGNUP');
        //redirect to signup
        window.location.href="/signup.html";
      }
    }
  });
};

var signup = function() {
  var username = $('#signup').val();
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      name: username
    },
    success: function(person) {
      if (person) {
        // window.location.href="/login.html";
        sessionStorage.setItem('user', person.name);
        sessionStorage.setItem('userId', person.id);
        window.location.href="/";
      } else {
        window.location.href="/signup.html";
      }
    }
  });
};