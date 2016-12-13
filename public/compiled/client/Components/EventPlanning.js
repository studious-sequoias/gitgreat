'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Child component contained within HomepageApp
//Contains the event planning navigation bar
var EventPlanning = function (_React$Component) {
  _inherits(EventPlanning, _React$Component);

  function EventPlanning(props) {
    _classCallCheck(this, EventPlanning);

    var _this = _possibleConstructorReturn(this, (EventPlanning.__proto__ || Object.getPrototypeOf(EventPlanning)).call(this, props));

    _this.state = {
      tab: false
    };

    _this.changeDisplay = _this.changeDisplay.bind(_this);
    return _this;
  }

  _createClass(EventPlanning, [{
    key: 'changeDisplay',
    value: function changeDisplay(e) {
      this.setState({
        tab: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var view;
      if (this.state.tab === 'whatToBringBtn') {
        view = React.createElement(WhatToBring, { featuredEvent: this.props.featuredEvent });
      } else if (this.state.tab === 'activitiesBtn') {
        view = React.createElement(Activities, null);
      } else if (this.state.tab === 'reminderBtn') {
        view = React.createElement(Reminders, { featuredEvent: this.props.featuredEvent });
      } else if (this.state.tab === 'photosBtn') {
        view = React.createElement(Photos, { uploadFile: this.uploadFile });
      }
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'eventHeader' },
          this.props.featuredEvent.name,
          ' | ',
          this.props.featuredEvent.where,
          ' | ',
          this.props.featuredEvent.when
        ),
        React.createElement(FeatureNavigation, { changeDisplay: this.changeDisplay }),
        view
      );
    }
  }]);

  return EventPlanning;
}(React.Component);

window.EventPlanning = EventPlanning;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50UGxhbm5pbmcuanN4Il0sIm5hbWVzIjpbIkV2ZW50UGxhbm5pbmciLCJwcm9wcyIsInN0YXRlIiwidGFiIiwiY2hhbmdlRGlzcGxheSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZpZXciLCJmZWF0dXJlZEV2ZW50IiwidXBsb2FkRmlsZSIsIm5hbWUiLCJ3aGVyZSIsIndoZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFDTUEsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUs7QUFETSxLQUFiOztBQUlBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFOaUI7QUFPbEI7Ozs7a0NBRWFDLEMsRUFBRztBQUNmLFdBQUtDLFFBQUwsQ0FBYztBQUNaSixhQUFLRyxFQUFFRSxNQUFGLENBQVNDO0FBREYsT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxVQUFJQyxJQUFKO0FBQ0EsVUFBSSxLQUFLUixLQUFMLENBQVdDLEdBQVgsS0FBbUIsZ0JBQXZCLEVBQXlDO0FBQ3ZDTyxlQUFPLG9CQUFDLFdBQUQsSUFBYSxlQUFlLEtBQUtULEtBQUwsQ0FBV1UsYUFBdkMsR0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUtULEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixlQUF2QixFQUF3QztBQUM3Q08sZUFBTyxvQkFBQyxVQUFELE9BQVA7QUFDRCxPQUZNLE1BRUEsSUFBSSxLQUFLUixLQUFMLENBQVdDLEdBQVgsS0FBbUIsYUFBdkIsRUFBc0M7QUFDM0NPLGVBQU8sb0JBQUMsU0FBRCxJQUFXLGVBQWUsS0FBS1QsS0FBTCxDQUFXVSxhQUFyQyxHQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUksS0FBS1QsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLFdBQXZCLEVBQW9DO0FBQzFDTyxlQUFPLG9CQUFDLE1BQUQsSUFBUSxZQUFZLEtBQUtFLFVBQXpCLEdBQVA7QUFDQTtBQUNELGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxhQUFkO0FBQTZCLGVBQUtYLEtBQUwsQ0FBV1UsYUFBWCxDQUF5QkUsSUFBdEQ7QUFBQTtBQUErRCxlQUFLWixLQUFMLENBQVdVLGFBQVgsQ0FBeUJHLEtBQXhGO0FBQUE7QUFBa0csZUFBS2IsS0FBTCxDQUFXVSxhQUFYLENBQXlCSTtBQUEzSCxTQURGO0FBRUUsNEJBQUMsaUJBQUQsSUFBbUIsZUFBZSxLQUFLWCxhQUF2QyxHQUZGO0FBR0dNO0FBSEgsT0FERjtBQU9EOzs7O0VBbEN5Qk0sTUFBTUMsUzs7QUFvQ2xDQyxPQUFPbEIsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoiRXZlbnRQbGFubmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ2hpbGQgY29tcG9uZW50IGNvbnRhaW5lZCB3aXRoaW4gSG9tZXBhZ2VBcHBcbi8vQ29udGFpbnMgdGhlIGV2ZW50IHBsYW5uaW5nIG5hdmlnYXRpb24gYmFyXG5jbGFzcyBFdmVudFBsYW5uaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhYjogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFuZ2VEaXNwbGF5ID0gdGhpcy5jaGFuZ2VEaXNwbGF5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGFuZ2VEaXNwbGF5KGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdmlldztcbiAgICBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICd3aGF0VG9CcmluZ0J0bicpIHtcbiAgICAgIHZpZXcgPSA8V2hhdFRvQnJpbmcgZmVhdHVyZWRFdmVudD17dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50fS8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICdhY3Rpdml0aWVzQnRuJykge1xuICAgICAgdmlldyA9IDxBY3Rpdml0aWVzIC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICdyZW1pbmRlckJ0bicpIHtcbiAgICAgIHZpZXcgPSA8UmVtaW5kZXJzIGZlYXR1cmVkRXZlbnQ9e3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudH0vPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudGFiID09PSAncGhvdG9zQnRuJykge1xuICAgICB2aWV3ID0gPFBob3RvcyB1cGxvYWRGaWxlPXt0aGlzLnVwbG9hZEZpbGV9IC8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImV2ZW50SGVhZGVyXCI+e3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudC5uYW1lfSB8IHt0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnQud2hlcmV9IHwge3RoaXMucHJvcHMuZmVhdHVyZWRFdmVudC53aGVufTwvaDE+XG4gICAgICAgIDxGZWF0dXJlTmF2aWdhdGlvbiBjaGFuZ2VEaXNwbGF5PXt0aGlzLmNoYW5nZURpc3BsYXl9IC8+XG4gICAgICAgIHt2aWV3fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxud2luZG93LkV2ZW50UGxhbm5pbmcgPSBFdmVudFBsYW5uaW5nO1xuXG4iXX0=