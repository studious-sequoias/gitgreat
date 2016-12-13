"use strict";

//Child component within EventList (contained within HomepageApp)
var EventListEntry = function EventListEntry(props) {
  return React.createElement(
    "div",
    { className: "listEntry", onClick: function onClick() {
        return props.handleEntryClick(props.event);
      } },
    React.createElement(
      "strong",
      null,
      props.event.name
    ),
    React.createElement("br", null),
    "Location: ",
    props.event.where,
    React.createElement("br", null),
    "Time: ",
    props.event.when,
    React.createElement("br", null)
  );
};

window.EventListEntry = EventListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJFdmVudExpc3RFbnRyeSIsInByb3BzIiwiaGFuZGxlRW50cnlDbGljayIsImV2ZW50IiwibmFtZSIsIndoZXJlIiwid2hlbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQSxNQUFLLFdBQVUsV0FBZixFQUEyQixTQUFTO0FBQUEsZUFBTUEsTUFBTUMsZ0JBQU4sQ0FBdUJELE1BQU1FLEtBQTdCLENBQU47QUFBQSxPQUFwQztBQUNFO0FBQUE7QUFBQTtBQUFTRixZQUFNRSxLQUFOLENBQVlDO0FBQXJCLEtBREY7QUFDcUMsbUNBRHJDO0FBQUE7QUFFYUgsVUFBTUUsS0FBTixDQUFZRSxLQUZ6QjtBQUUrQixtQ0FGL0I7QUFBQTtBQUdTSixVQUFNRSxLQUFOLENBQVlHLElBSHJCO0FBRzBCO0FBSDFCLEdBRG1CO0FBQUEsQ0FBckI7O0FBUUFDLE9BQU9QLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6IkV2ZW50TGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DaGlsZCBjb21wb25lbnQgd2l0aGluIEV2ZW50TGlzdCAoY29udGFpbmVkIHdpdGhpbiBIb21lcGFnZUFwcClcbnZhciBFdmVudExpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RFbnRyeVwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUVudHJ5Q2xpY2socHJvcHMuZXZlbnQpfT5cbiAgICA8c3Ryb25nPntwcm9wcy5ldmVudC5uYW1lfTwvc3Ryb25nPjxiciAvPlxuICAgIExvY2F0aW9uOiB7cHJvcHMuZXZlbnQud2hlcmV9PGJyIC8+XG4gICAgVGltZToge3Byb3BzLmV2ZW50LndoZW59PGJyIC8+XG4gIDwvZGl2PlxuKTtcblxud2luZG93LkV2ZW50TGlzdEVudHJ5ID0gRXZlbnRMaXN0RW50cnk7Il19