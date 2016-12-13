'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Parent App within createEvent.html
//Allows users to create new events
var CreateEventApp = function (_React$Component) {
  _inherits(CreateEventApp, _React$Component);

  function CreateEventApp(props) {
    _classCallCheck(this, CreateEventApp);

    var _this = _possibleConstructorReturn(this, (CreateEventApp.__proto__ || Object.getPrototypeOf(CreateEventApp)).call(this, props));

    _this.state = {
      name: '',
      when: '',
      where: ''
    };
    _this.handleNameChange = _this.handleNameChange.bind(_this);
    _this.handleDateChange = _this.handleDateChange.bind(_this);
    _this.handleLocChange = _this.handleLocChange.bind(_this);
    _this.handleEventSubmit = _this.handleEventSubmit.bind(_this);
    return _this;
  }

  _createClass(CreateEventApp, [{
    key: 'handleNameChange',
    value: function handleNameChange(event) {
      this.setState({ name: event.target.value });
    }
  }, {
    key: 'handleDateChange',
    value: function handleDateChange(event) {
      this.setState({ when: event.target.value });
    }
  }, {
    key: 'handleLocChange',
    value: function handleLocChange(event) {
      this.setState({ where: event.target.value });
    }
  }, {
    key: 'handleEventSubmit',
    value: function handleEventSubmit(event) {
      //sends a post request with the event data to the server, which will enter the event into
      //the eventTable
      var successHandler = function successHandler() {
        $('#msg').text('event successfully posted');
      };
      $.ajax({
        method: 'POST',
        url: '/eventTable',
        contentType: 'application/json',
        data: JSON.stringify(this.state),
        success: successHandler.bind(this)
      });
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        React.createElement(
          'div',
          { className: 'featureBody', id: 'createEvent' },
          React.createElement(
            'form',
            { onSubmit: this.handleEventSubmit },
            React.createElement(
              'p',
              null,
              React.createElement(
                'label',
                null,
                'Name:',
                React.createElement('input', { type: 'text', name: 'name',
                  value: this.state.name,
                  onChange: this.handleNameChange })
              )
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
                'label',
                null,
                'Date:',
                React.createElement('input', { type: 'datetime-local', name: 'date',
                  value: this.state.when,
                  onChange: this.handleDateChange })
              )
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
                'label',
                null,
                'Location:',
                React.createElement('input', { type: 'text', name: 'location',
                  value: this.state.where,
                  onChange: this.handleLocChange })
              )
            ),
            React.createElement('input', { type: 'submit', value: 'Submit' })
          )
        ),
        React.createElement('div', { id: 'msg' })
      );
    }
  }]);

  return CreateEventApp;
}(React.Component);

window.CreateEventApp = CreateEventApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0NyZWF0ZUV2ZW50QXBwLmpzeCJdLCJuYW1lcyI6WyJDcmVhdGVFdmVudEFwcCIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwid2hlbiIsIndoZXJlIiwiaGFuZGxlTmFtZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiaGFuZGxlTG9jQ2hhbmdlIiwiaGFuZGxlRXZlbnRTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWNjZXNzSGFuZGxlciIsIiQiLCJ0ZXh0IiwiYWpheCIsIm1ldGhvZCIsInVybCIsImNvbnRlbnRUeXBlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwicHJldmVudERlZmF1bHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFDTUEsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxZQUFNLEVBRks7QUFHWEMsYUFBTztBQUhJLEtBQWI7QUFLQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkQsSUFBdEIsT0FBeEI7QUFDQSxVQUFLRSxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJGLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0csaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJILElBQXZCLE9BQXpCO0FBVmlCO0FBV2xCOzs7O3FDQUVnQkksSyxFQUFPO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDVCxNQUFNUSxNQUFNRSxNQUFOLENBQWFDLEtBQXBCLEVBQWQ7QUFDRDs7O3FDQUNnQkgsSyxFQUFPO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDUixNQUFNTyxNQUFNRSxNQUFOLENBQWFDLEtBQXBCLEVBQWQ7QUFDRDs7O29DQUNlSCxLLEVBQU87QUFDckIsV0FBS0MsUUFBTCxDQUFjLEVBQUNQLE9BQU9NLE1BQU1FLE1BQU4sQ0FBYUMsS0FBckIsRUFBZDtBQUNEOzs7c0NBRWlCSCxLLEVBQU87QUFDdkI7QUFDQTtBQUNBLFVBQUlJLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBVztBQUM5QkMsVUFBRSxNQUFGLEVBQVVDLElBQVYsQ0FBZSwyQkFBZjtBQUNELE9BRkQ7QUFHQUQsUUFBRUUsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLE1BREg7QUFFTEMsYUFBSyxhQUZBO0FBR0xDLHFCQUFhLGtCQUhSO0FBSUxDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZSxLQUFLdEIsS0FBcEIsQ0FKRDtBQUtMdUIsaUJBQVNWLGVBQWVSLElBQWYsQ0FBb0IsSUFBcEI7QUFMSixPQUFQO0FBT0FJLFlBQU1lLGNBQU47QUFDRDs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELE9BREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWYsRUFBNkIsSUFBRyxhQUFoQztBQUNFO0FBQUE7QUFBQSxjQUFNLFVBQVUsS0FBS2hCLGlCQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFHO0FBQUE7QUFBQTtBQUFBO0FBRUQsK0NBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEI7QUFDRSx5QkFBTyxLQUFLUixLQUFMLENBQVdDLElBRHBCO0FBRUUsNEJBQVUsS0FBS0csZ0JBRmpCO0FBRkM7QUFBSCxhQURGO0FBT0U7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBO0FBQUE7QUFFRCwrQ0FBTyxNQUFLLGdCQUFaLEVBQTZCLE1BQUssTUFBbEM7QUFDRSx5QkFBTyxLQUFLSixLQUFMLENBQVdFLElBRHBCO0FBRUUsNEJBQVUsS0FBS0ksZ0JBRmpCO0FBRkM7QUFBSCxhQVBGO0FBYUU7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBO0FBQUE7QUFFRCwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QjtBQUNFLHlCQUFPLEtBQUtOLEtBQUwsQ0FBV0csS0FEcEI7QUFFRSw0QkFBVSxLQUFLSSxlQUZqQjtBQUZDO0FBQUgsYUFiRjtBQW1CRSwyQ0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQW5CRjtBQURGLFNBRkY7QUF5QkUscUNBQUssSUFBRyxLQUFSO0FBekJGLE9BREY7QUE2QkQ7Ozs7RUFyRTBCa0IsTUFBTUMsUzs7QUF3RW5DQyxPQUFPN0IsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiQ3JlYXRlRXZlbnRBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1BhcmVudCBBcHAgd2l0aGluIGNyZWF0ZUV2ZW50Lmh0bWxcbi8vQWxsb3dzIHVzZXJzIHRvIGNyZWF0ZSBuZXcgZXZlbnRzXG5jbGFzcyBDcmVhdGVFdmVudEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHdoZW46ICcnLFxuICAgICAgd2hlcmU6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURhdGVDaGFuZ2UgPSB0aGlzLmhhbmRsZURhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUxvY0NoYW5nZSA9IHRoaXMuaGFuZGxlTG9jQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFdmVudFN1Ym1pdCA9IHRoaXMuaGFuZGxlRXZlbnRTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuICBoYW5kbGVEYXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7d2hlbjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgaGFuZGxlTG9jQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7d2hlcmU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlRXZlbnRTdWJtaXQoZXZlbnQpIHtcbiAgICAvL3NlbmRzIGEgcG9zdCByZXF1ZXN0IHdpdGggdGhlIGV2ZW50IGRhdGEgdG8gdGhlIHNlcnZlciwgd2hpY2ggd2lsbCBlbnRlciB0aGUgZXZlbnQgaW50b1xuICAgIC8vdGhlIGV2ZW50VGFibGVcbiAgICB2YXIgc3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICQoJyNtc2cnKS50ZXh0KCdldmVudCBzdWNjZXNzZnVsbHkgcG9zdGVkJyk7XG4gICAgfTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvZXZlbnRUYWJsZScsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSksXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZUJvZHlcIiBpZD1cImNyZWF0ZUV2ZW50XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRXZlbnRTdWJtaXR9PlxuICAgICAgICAgICAgPHA+PGxhYmVsPlxuICAgICAgICAgICAgICBOYW1lOiAgXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2xhYmVsPjwvcD5cbiAgICAgICAgICAgIDxwPjxsYWJlbD5cbiAgICAgICAgICAgICAgRGF0ZTpcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIG5hbWU9XCJkYXRlXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud2hlbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEYXRlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8L2xhYmVsPjwvcD5cbiAgICAgICAgICAgIDxwPjxsYWJlbD5cbiAgICAgICAgICAgICAgTG9jYXRpb246IFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibG9jYXRpb25cIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53aGVyZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVMb2NDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nbXNnJz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkNyZWF0ZUV2ZW50QXBwID0gQ3JlYXRlRXZlbnRBcHA7Il19