"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//FEATURE HAS NOT BEEN COMPLETED --just a placeholder component for an activity random event generator
//If an event has been created but without an actual activity, a user should be able to enter
//random activities into a 'hat'--really just a list--and a function shoudl be able to spit out 
//a random activity for the group to do.
var Activities = function (_React$Component) {
  _inherits(Activities, _React$Component);

  function Activities(props) {
    _classCallCheck(this, Activities);

    return _possibleConstructorReturn(this, (Activities.__proto__ || Object.getPrototypeOf(Activities)).call(this, props));
  }

  _createClass(Activities, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Activities Tab Stuff Here"
      );
    }
  }]);

  return Activities;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0FjdGl2aXRpZXMuanN4Il0sIm5hbWVzIjpbIkFjdGl2aXRpZXMiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7SUFDTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFSO0FBQ0Q7Ozs7RUFQc0JDLE1BQU1DLFMiLCJmaWxlIjoiQWN0aXZpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRkVBVFVSRSBIQVMgTk9UIEJFRU4gQ09NUExFVEVEIC0tanVzdCBhIHBsYWNlaG9sZGVyIGNvbXBvbmVudCBmb3IgYW4gYWN0aXZpdHkgcmFuZG9tIGV2ZW50IGdlbmVyYXRvclxuLy9JZiBhbiBldmVudCBoYXMgYmVlbiBjcmVhdGVkIGJ1dCB3aXRob3V0IGFuIGFjdHVhbCBhY3Rpdml0eSwgYSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGVudGVyXG4vL3JhbmRvbSBhY3Rpdml0aWVzIGludG8gYSAnaGF0Jy0tcmVhbGx5IGp1c3QgYSBsaXN0LS1hbmQgYSBmdW5jdGlvbiBzaG91ZGwgYmUgYWJsZSB0byBzcGl0IG91dCBcbi8vYSByYW5kb20gYWN0aXZpdHkgZm9yIHRoZSBncm91cCB0byBkby5cbmNsYXNzIEFjdGl2aXRpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXY+QWN0aXZpdGllcyBUYWIgU3R1ZmYgSGVyZTwvZGl2Pik7XG4gIH1cbn0iXX0=