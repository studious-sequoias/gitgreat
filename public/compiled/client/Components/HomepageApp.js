'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Parent App within homepage.html
//Allows users to view events, create and view event planning details

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      eventList: null,
      page: 'homepage',
      featuredEvent: null
    };
    _this.handleEntryClick = _this.handleEntryClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //sends a get request to the server to populate the eventList array in this component's state,
      //which gets passed as a prop into the Eventlist component
      var successHandler = function successHandler(data) {
        console.log(data);
        this.setState({ eventList: data });
      };
      $.ajax({
        method: 'GET',
        url: '/eventTable',
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleEntryClick',
    value: function handleEntryClick(event) {
      this.setState({
        page: 'eventDetails',
        featuredEvent: event
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var view;
      //view logic: if an event has been clicked on, then the page should view 
      //the eventDetails page--the EventPlanning component. Otherwise, show the 
      //homepage--the EventList component.
      if (this.state.page === 'homepage') {
        view = React.createElement(
          'div',
          null,
          React.createElement(EventList, {
            eventData: this.state.eventList,
            handleEntryClick: this.handleEntryClick
          }),
          ';'
        );
      } else if (this.state.page === 'eventDetails') {
        view = React.createElement(EventPlanning, { featuredEvent: this.state.featuredEvent });
      }

      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        view
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0hvbWVwYWdlQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXZlbnRMaXN0IiwicGFnZSIsImZlYXR1cmVkRXZlbnQiLCJoYW5kbGVFbnRyeUNsaWNrIiwiYmluZCIsInN1Y2Nlc3NIYW5kbGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwic3VjY2VzcyIsImV2ZW50IiwidmlldyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsSUFEQTtBQUVYQyxZQUFNLFVBRks7QUFHWEMscUJBQWU7QUFISixLQUFiO0FBS0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBUGlCO0FBUWxCOzs7O3dDQUNtQjtBQUNsQjtBQUNBO0FBQ0EsVUFBSUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTQyxJQUFULEVBQWU7QUFDbENDLGdCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQSxhQUFLRyxRQUFMLENBQWMsRUFBQ1QsV0FBV00sSUFBWixFQUFkO0FBQ0QsT0FIRDtBQUlBSSxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLGFBRkE7QUFHTEMsaUJBQVNULGVBQWVELElBQWYsQ0FBb0IsSUFBcEI7QUFISixPQUFQO0FBS0Q7OztxQ0FFZ0JXLEssRUFBTztBQUN0QixXQUFLTixRQUFMLENBQWM7QUFDWlIsY0FBTSxjQURNO0FBRVpDLHVCQUFlYTtBQUZILE9BQWQ7QUFJRDs7OzZCQUVRO0FBQ1AsVUFBSUMsSUFBSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUksS0FBS2pCLEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixVQUF4QixFQUFvQztBQUNsQ2UsZUFDRztBQUFBO0FBQUE7QUFDQyw4QkFBQyxTQUFEO0FBQ0UsdUJBQVcsS0FBS2pCLEtBQUwsQ0FBV0MsU0FEeEI7QUFFRSw4QkFBa0IsS0FBS0c7QUFGekIsWUFERDtBQUFBO0FBQUEsU0FESDtBQU9ELE9BUkQsTUFRTyxJQUFJLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixjQUF4QixFQUF3QztBQUM3Q2UsZUFBTyxvQkFBQyxhQUFELElBQWUsZUFBZSxLQUFLakIsS0FBTCxDQUFXRyxhQUF6QyxHQUFQO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELE9BREY7QUFFR2M7QUFGSCxPQURGO0FBTUQ7Ozs7RUF0RGVDLE1BQU1DLFM7O0FBMER4QkMsT0FBT3RCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJIb21lcGFnZUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUGFyZW50IEFwcCB3aXRoaW4gaG9tZXBhZ2UuaHRtbFxuLy9BbGxvd3MgdXNlcnMgdG8gdmlldyBldmVudHMsIGNyZWF0ZSBhbmQgdmlldyBldmVudCBwbGFubmluZyBkZXRhaWxzXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBldmVudExpc3Q6IG51bGwsXG4gICAgICBwYWdlOiAnaG9tZXBhZ2UnLFxuICAgICAgZmVhdHVyZWRFdmVudDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVFbnRyeUNsaWNrID0gdGhpcy5oYW5kbGVFbnRyeUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9zZW5kcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gcG9wdWxhdGUgdGhlIGV2ZW50TGlzdCBhcnJheSBpbiB0aGlzIGNvbXBvbmVudCdzIHN0YXRlLFxuICAgIC8vd2hpY2ggZ2V0cyBwYXNzZWQgYXMgYSBwcm9wIGludG8gdGhlIEV2ZW50bGlzdCBjb21wb25lbnRcbiAgICB2YXIgc3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50TGlzdDogZGF0YX0pO1xuICAgIH07XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvZXZlbnRUYWJsZScsXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFbnRyeUNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYWdlOiAnZXZlbnREZXRhaWxzJyxcbiAgICAgIGZlYXR1cmVkRXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHZpZXc7XG4gICAgLy92aWV3IGxvZ2ljOiBpZiBhbiBldmVudCBoYXMgYmVlbiBjbGlja2VkIG9uLCB0aGVuIHRoZSBwYWdlIHNob3VsZCB2aWV3IFxuICAgIC8vdGhlIGV2ZW50RGV0YWlscyBwYWdlLS10aGUgRXZlbnRQbGFubmluZyBjb21wb25lbnQuIE90aGVyd2lzZSwgc2hvdyB0aGUgXG4gICAgLy9ob21lcGFnZS0tdGhlIEV2ZW50TGlzdCBjb21wb25lbnQuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFnZSA9PT0gJ2hvbWVwYWdlJykge1xuICAgICAgdmlldyA9IFxuICAgICAgICAoPGRpdj5cbiAgICAgICAgICA8RXZlbnRMaXN0XG4gICAgICAgICAgICBldmVudERhdGE9e3RoaXMuc3RhdGUuZXZlbnRMaXN0fVxuICAgICAgICAgICAgaGFuZGxlRW50cnlDbGljaz17dGhpcy5oYW5kbGVFbnRyeUNsaWNrfVxuICAgICAgICAgIC8+O1xuICAgICAgICA8L2Rpdj4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5wYWdlID09PSAnZXZlbnREZXRhaWxzJykge1xuICAgICAgdmlldyA9IDxFdmVudFBsYW5uaW5nIGZlYXR1cmVkRXZlbnQ9e3RoaXMuc3RhdGUuZmVhdHVyZWRFdmVudH0vPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICB7dmlld31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==