"use strict";

//Child component within the Event Planning component
//Allows user to navigate between the event planning details

var FeatureNavigation = function FeatureNavigation(props) {
  return React.createElement(
    "div",
    { id: "eventNav" },
    React.createElement(
      "button",
      { href: "#", className: "wtbBtn", id: "firstBtn", value: "whatToBringBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "What To Bring"
    ),
    React.createElement(
      "button",
      { href: "#", className: "reminderBtn", value: "reminderBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Reminders"
    ),
    React.createElement(
      "button",
      { href: "#", className: "photosBtn", value: "photosBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Photos"
    ),
    React.createElement(
      "button",
      { href: "#", className: "chatBtn", value: "chatBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Chatroom (IP)"
    )
  );
};

window.FeatureNavigation = FeatureNavigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0ZlYXR1cmVOYXZpZ2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlTmF2aWdhdGlvbiIsInByb3BzIiwiZSIsImNoYW5nZURpc3BsYXkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQSxJQUFJQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFEO0FBQUEsU0FDdEI7QUFBQTtBQUFBLE1BQUssSUFBRyxVQUFSO0FBQ0U7QUFBQTtBQUFBLFFBQVEsTUFBSyxHQUFiLEVBQWlCLFdBQVUsUUFBM0IsRUFBb0MsSUFBRyxVQUF2QyxFQUFrRCxPQUFNLGdCQUF4RCxFQUF5RSxTQUFTLGlCQUFDQyxDQUFEO0FBQUEsaUJBQU9ELE1BQU1FLGFBQU4sQ0FBb0JELENBQXBCLENBQVA7QUFBQSxTQUFsRjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLE1BQUssR0FBYixFQUFpQixXQUFVLGFBQTNCLEVBQXlDLE9BQU0sYUFBL0MsRUFBNkQsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBdEU7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBUSxNQUFLLEdBQWIsRUFBaUIsV0FBVSxXQUEzQixFQUF1QyxPQUFNLFdBQTdDLEVBQXlELFNBQVMsaUJBQUNBLENBQUQ7QUFBQSxpQkFBT0QsTUFBTUUsYUFBTixDQUFvQkQsQ0FBcEIsQ0FBUDtBQUFBLFNBQWxFO0FBQUE7QUFBQSxLQUhGO0FBSUU7QUFBQTtBQUFBLFFBQVEsTUFBSyxHQUFiLEVBQWlCLFdBQVUsU0FBM0IsRUFBcUMsT0FBTSxTQUEzQyxFQUFxRCxTQUFTLGlCQUFDQSxDQUFEO0FBQUEsaUJBQU9ELE1BQU1FLGFBQU4sQ0FBb0JELENBQXBCLENBQVA7QUFBQSxTQUE5RDtBQUFBO0FBQUE7QUFKRixHQURzQjtBQUFBLENBQXhCOztBQVNBRSxPQUFPSixpQkFBUCxHQUEyQkEsaUJBQTNCIiwiZmlsZSI6IkZlYXR1cmVOYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DaGlsZCBjb21wb25lbnQgd2l0aGluIHRoZSBFdmVudCBQbGFubmluZyBjb21wb25lbnRcbi8vQWxsb3dzIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgZXZlbnQgcGxhbm5pbmcgZGV0YWlsc1xuXG52YXIgRmVhdHVyZU5hdmlnYXRpb24gPSAocHJvcHMpID0+IChcbiAgPGRpdiBpZD1cImV2ZW50TmF2XCI+XG4gICAgPGJ1dHRvbiBocmVmPScjJyBjbGFzc05hbWU9XCJ3dGJCdG5cIiBpZD1cImZpcnN0QnRuXCIgdmFsdWU9XCJ3aGF0VG9CcmluZ0J0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5XaGF0IFRvIEJyaW5nPC9idXR0b24+XG4gICAgPGJ1dHRvbiBocmVmPScjJyBjbGFzc05hbWU9XCJyZW1pbmRlckJ0blwiIHZhbHVlPVwicmVtaW5kZXJCdG5cIiBvbkNsaWNrPXsoZSkgPT4gcHJvcHMuY2hhbmdlRGlzcGxheShlKX0+UmVtaW5kZXJzPC9idXR0b24+XG4gICAgPGJ1dHRvbiBocmVmPScjJyBjbGFzc05hbWU9XCJwaG90b3NCdG5cIiB2YWx1ZT1cInBob3Rvc0J0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5QaG90b3M8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGhyZWY9JyMnIGNsYXNzTmFtZT1cImNoYXRCdG5cIiB2YWx1ZT1cImNoYXRCdG5cIiBvbkNsaWNrPXsoZSkgPT4gcHJvcHMuY2hhbmdlRGlzcGxheShlKX0+Q2hhdHJvb20gKElQKTwvYnV0dG9uPiAgICBcbiAgPC9kaXY+XG4pO1xuXG53aW5kb3cuRmVhdHVyZU5hdmlnYXRpb24gPSBGZWF0dXJlTmF2aWdhdGlvbjsiXX0=