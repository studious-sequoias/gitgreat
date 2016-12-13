"use strict";

//Child component within the HomepageApp and the CreateEventApp to toggle 
//between the two App pages.
var Nav = function Nav() {
  return React.createElement(
    "div",
    { className: "nav" },
    React.createElement(
      "a",
      { href: "/", className: "title" },
      "Friends"
    ),
    React.createElement(
      "a",
      { href: "/" },
      "Home "
    ),
    React.createElement(
      "a",
      { href: "/create" },
      "Create Event"
    ),
    React.createElement(
      "a",
      { href: "#" },
      "Log In"
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL25hdi5qc3giXSwibmFtZXMiOlsiTmF2Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLFNBQU5BLEdBQU07QUFBQSxTQUNSO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFHLE1BQUssR0FBUixFQUFZLFdBQVUsT0FBdEI7QUFBQTtBQUFBLEtBREQ7QUFFRTtBQUFBO0FBQUEsUUFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBRyxNQUFLLFNBQVI7QUFBQTtBQUFBLEtBSEY7QUFJRTtBQUFBO0FBQUEsUUFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBSkYsR0FEUTtBQUFBLENBQVY7O0FBU0FDLE9BQU9ELEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NoaWxkIGNvbXBvbmVudCB3aXRoaW4gdGhlIEhvbWVwYWdlQXBwIGFuZCB0aGUgQ3JlYXRlRXZlbnRBcHAgdG8gdG9nZ2xlIFxuLy9iZXR3ZWVuIHRoZSB0d28gQXBwIHBhZ2VzLlxudmFyIE5hdiA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgXHQ8YSBocmVmPScvJyBjbGFzc05hbWU9XCJ0aXRsZVwiPkZyaWVuZHM8L2E+XG4gICAgPGEgaHJlZj0nLyc+SG9tZSA8L2E+XG4gICAgPGEgaHJlZj0nL2NyZWF0ZSc+Q3JlYXRlIEV2ZW50PC9hPlxuICAgIDxhIGhyZWY9JyMnPkxvZyBJbjwvYT5cbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuTmF2ID0gTmF2OyJdfQ==