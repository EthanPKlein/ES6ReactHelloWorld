"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloMessage = function (_React$Component) {
  _inherits(HelloMessage, _React$Component);

  function HelloMessage() {
    _classCallCheck(this, HelloMessage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HelloMessage).apply(this, arguments));
  }

  _createClass(HelloMessage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  }]);

  return HelloMessage;
}(React.Component);

var HelloMessageMultiProps = function (_React$Component2) {
  _inherits(HelloMessageMultiProps, _React$Component2);

  function HelloMessageMultiProps() {
    _classCallCheck(this, HelloMessageMultiProps);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HelloMessageMultiProps).apply(this, arguments));
  }

  _createClass(HelloMessageMultiProps, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name,
        " from ",
        this.props.city,
        ", ",
        this.props.country
      );
    }
  }]);

  return HelloMessageMultiProps;
}(React.Component);

ReactDOM.render(React.createElement(HelloMessage, { name: "world" }), document.getElementById('div1'));

ReactDOM.render(React.createElement(HelloMessageMultiProps, { name: "Bob", city: "London", country: "UK" }), document.getElementById('div2'));

ReactDOM.render(React.createElement(HelloMessageMultiProps, { name: "Sam", city: "San Francisco", country: "US" }), document.getElementById('div3'));