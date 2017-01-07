"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoListItem = function VideoListItem(_ref) {
    var video = _ref.video;

    console.log(video);
    var imageUrl = video.snippet.thumbnails.default.url;

    return _react2.default.createElement(
        "li",
        { className: "list-group-item" },
        _react2.default.createElement(
            "div",
            { className: "video-list media" },
            _react2.default.createElement(
                "div",
                { className: "media-left" },
                _react2.default.createElement("img", { className: "media-object", src: imageUrl })
            ),
            _react2.default.createElement(
                "div",
                { className: "media-body" },
                _react2.default.createElement(
                    "div",
                    { className: "media-heading" },
                    video.snippet.title
                )
            )
        )
    );
};

exports.default = VideoListItem;

//# sourceMappingURL=video_list_item-compiled.js.map