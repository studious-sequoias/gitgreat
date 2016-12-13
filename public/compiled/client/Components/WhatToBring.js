'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Child component within the Event Planning component
//Allows users to create a list of items that need to be brought to an event;
var WhatToBring = function (_React$Component) {
  _inherits(WhatToBring, _React$Component);

  function WhatToBring(props) {
    _classCallCheck(this, WhatToBring);

    var _this = _possibleConstructorReturn(this, (WhatToBring.__proto__ || Object.getPrototypeOf(WhatToBring)).call(this, props));

    _this.state = {
      itemList: [{ item: 'mashed potatoes', cost: '20', owner: 'Jenn' }],
      currentItem: null,
      currentOwner: null,
      currentCost: null
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleItemChange = _this.handleItemChange.bind(_this);
    _this.handleCostChange = _this.handleCostChange.bind(_this);
    _this.handleOwnerChange = _this.handleOwnerChange.bind(_this);
    _this.fetchItems = _this.fetchItems.bind(_this);
    return _this;
  }

  _createClass(WhatToBring, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchItems();
    }
  }, {
    key: 'fetchItems',
    value: function fetchItems() {
      //The event name is passed along to the server via query parameters 
      //so that we can display the itemlist associated with a specific event
      var eventParam = this.props.featuredEvent.name.split(' ').join('_');
      var successHandler = function successHandler(data) {
        this.setState({ itemList: data });
      };
      $.ajax({
        method: 'GET',
        url: '/itemList?eventName=' + eventParam,
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      //The event name is passed along to the server via query parameters 
      //so that we can post to the itemlistTable associated with a specific event
      var item = {
        item: this.state.currentItem,
        cost: this.state.currentCost,
        owner: this.state.currentOwner
      };
      var successHandler = function successHandler(data) {
        this.fetchItems();
      };
      var eventParam = this.props.featuredEvent.name.split(' ').join('_');
      $.ajax({
        method: 'POST',
        url: '/itemList?eventName=' + eventParam,
        data: JSON.stringify(item),
        contentType: 'application/json',
        success: successHandler.bind(this)
      });
      event.preventDefault();
    }
  }, {
    key: 'handleItemChange',
    value: function handleItemChange(event) {
      this.setState({
        currentItem: event.target.value
      });
    }
  }, {
    key: 'handleOwnerChange',
    value: function handleOwnerChange(event) {
      this.setState({
        currentOwner: event.target.value
      });
    }
  }, {
    key: 'handleCostChange',
    value: function handleCostChange(event) {
      this.setState({
        currentCost: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { className: 'bringForm', onSubmit: this.handleSubmit },
          React.createElement(
            'label',
            null,
            'Owner:',
            React.createElement('input', { type: 'text', name: 'owner',
              onChange: this.handleOwnerChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Item:',
            React.createElement('input', { type: 'text', name: 'item',
              onChange: this.handleItemChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Cost:',
            React.createElement('input', { type: 'text', name: 'cost',
              onChange: this.handleCostChange
            })
          ),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        ),
        React.createElement(
          'table',
          { className: 'bringTable' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Owner'
              ),
              React.createElement(
                'th',
                null,
                'Item'
              ),
              React.createElement(
                'th',
                null,
                'Cost'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.state.itemList.map(function (item, index) {
              return React.createElement(
                'tr',
                { key: index },
                React.createElement(
                  'th',
                  null,
                  item.owner
                ),
                React.createElement(
                  'th',
                  null,
                  item.item
                ),
                React.createElement(
                  'th',
                  null,
                  item.cost
                )
              );
            })
          )
        )
      );
    }
  }]);

  return WhatToBring;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL1doYXRUb0JyaW5nLmpzeCJdLCJuYW1lcyI6WyJXaGF0VG9CcmluZyIsInByb3BzIiwic3RhdGUiLCJpdGVtTGlzdCIsIml0ZW0iLCJjb3N0Iiwib3duZXIiLCJjdXJyZW50SXRlbSIsImN1cnJlbnRPd25lciIsImN1cnJlbnRDb3N0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUl0ZW1DaGFuZ2UiLCJoYW5kbGVDb3N0Q2hhbmdlIiwiaGFuZGxlT3duZXJDaGFuZ2UiLCJmZXRjaEl0ZW1zIiwiZXZlbnRQYXJhbSIsImZlYXR1cmVkRXZlbnQiLCJuYW1lIiwic3BsaXQiLCJqb2luIiwic3VjY2Vzc0hhbmRsZXIiLCJkYXRhIiwic2V0U3RhdGUiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJldmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtJQUNNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsQ0FBQyxFQUFDQyxNQUFNLGlCQUFQLEVBQTBCQyxNQUFNLElBQWhDLEVBQXNDQyxPQUFPLE1BQTdDLEVBQUQsQ0FEQztBQUVYQyxtQkFBYSxJQUZGO0FBR1hDLG9CQUFjLElBSEg7QUFJWEMsbUJBQWE7QUFKRixLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCRCxJQUF0QixPQUF4QjtBQUNBLFVBQUtFLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFM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O0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFERixXQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0csaUJBQUtYLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmlDLEdBQXBCLENBQXlCLFVBQUNoQyxJQUFELEVBQU9pQyxLQUFQO0FBQUEscUJBQ3hCO0FBQUE7QUFBQSxrQkFBSSxLQUFLQSxLQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUtqQyx1QkFBS0U7QUFBVixpQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFLRix1QkFBS0E7QUFBVixpQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUFLQSx1QkFBS0M7QUFBVjtBQUhGLGVBRHdCO0FBQUEsYUFBekI7QUFESDtBQVJGO0FBdEJGLE9BREY7QUEyQ0Q7Ozs7RUFuSHVCaUMsTUFBTUMsUyIsImZpbGUiOiJXaGF0VG9CcmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ2hpbGQgY29tcG9uZW50IHdpdGhpbiB0aGUgRXZlbnQgUGxhbm5pbmcgY29tcG9uZW50XG4vL0FsbG93cyB1c2VycyB0byBjcmVhdGUgYSBsaXN0IG9mIGl0ZW1zIHRoYXQgbmVlZCB0byBiZSBicm91Z2h0IHRvIGFuIGV2ZW50O1xuY2xhc3MgV2hhdFRvQnJpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbUxpc3Q6IFt7aXRlbTogJ21hc2hlZCBwb3RhdG9lcycsIGNvc3Q6ICcyMCcsIG93bmVyOiAnSmVubid9XSxcbiAgICAgIGN1cnJlbnRJdGVtOiBudWxsLFxuICAgICAgY3VycmVudE93bmVyOiBudWxsLFxuICAgICAgY3VycmVudENvc3Q6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUl0ZW1DaGFuZ2UgPSB0aGlzLmhhbmRsZUl0ZW1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNvc3RDaGFuZ2UgPSB0aGlzLmhhbmRsZUNvc3RDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU93bmVyQ2hhbmdlID0gdGhpcy5oYW5kbGVPd25lckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hJdGVtcyA9IHRoaXMuZmV0Y2hJdGVtcy5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hJdGVtcygpO1xuICB9XG5cbiAgZmV0Y2hJdGVtcygpIHtcbiAgICAgIC8vVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFsb25nIHRvIHRoZSBzZXJ2ZXIgdmlhIHF1ZXJ5IHBhcmFtZXRlcnMgXG4gICAgLy9zbyB0aGF0IHdlIGNhbiBkaXNwbGF5IHRoZSBpdGVtbGlzdCBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBldmVudFxuICAgIHZhciBldmVudFBhcmFtID0gdGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50Lm5hbWUuc3BsaXQoJyAnKS5qb2luKCdfJyk7XG4gICAgdmFyIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbUxpc3Q6IGRhdGF9KTtcbiAgICB9O1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2l0ZW1MaXN0P2V2ZW50TmFtZT0nICsgZXZlbnRQYXJhbSxcbiAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NIYW5kbGVyLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIC8vVGhlIGV2ZW50IG5hbWUgaXMgcGFzc2VkIGFsb25nIHRvIHRoZSBzZXJ2ZXIgdmlhIHF1ZXJ5IHBhcmFtZXRlcnMgXG4gICAgLy9zbyB0aGF0IHdlIGNhbiBwb3N0IHRvIHRoZSBpdGVtbGlzdFRhYmxlIGFzc29jaWF0ZWQgd2l0aCBhIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGl0ZW0gPSB7XG4gICAgICBpdGVtOiB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtLFxuICAgICAgY29zdDogdGhpcy5zdGF0ZS5jdXJyZW50Q29zdCxcbiAgICAgIG93bmVyOiB0aGlzLnN0YXRlLmN1cnJlbnRPd25lclxuICAgIH07XG4gICAgdmFyIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5mZXRjaEl0ZW1zKCk7XG4gICAgfTtcbiAgICB2YXIgZXZlbnRQYXJhbSA9IHRoaXMucHJvcHMuZmVhdHVyZWRFdmVudC5uYW1lLnNwbGl0KCcgJykuam9pbignXycpO1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9pdGVtTGlzdD9ldmVudE5hbWU9JyArIGV2ZW50UGFyYW0sXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShpdGVtKSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRJdGVtOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVPd25lckNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudE93bmVyOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVDb3N0Q2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50Q29zdDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJyaW5nRm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgT3duZXI6XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J293bmVyJyBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU93bmVyQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJdGVtOiBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdpdGVtJyBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSXRlbUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDb3N0OiBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdjb3N0JyBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29zdENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYnJpbmdUYWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPk93bmVyPC90aD5cbiAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxuICAgICAgICAgICAgICA8dGg+Q29zdDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbUxpc3QubWFwKCAoaXRlbSwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRoPntpdGVtLm93bmVyfTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPntpdGVtLml0ZW19PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+e2l0ZW0uY29zdH08L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==