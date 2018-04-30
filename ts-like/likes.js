"use strict";
exports.__esModule = true;
var Likes = /** @class */ (function () {
    function Likes(_totalLikes, _isActive) {
        this._totalLikes = _totalLikes;
        this._isActive = _isActive;
    }
    Likes.prototype.buttonClicked = function () {
        console.log("BUTTON CLICKED!");
        this._isActive = !this._isActive;
        if (this._isActive) {
            this._totalLikes = this._totalLikes + 1;
        }
        else {
            this._totalLikes = this._totalLikes - 1;
        }
    };
    Likes.prototype.theStatus = function () {
        console.log("There are  " + this._totalLikes + " likes. The status is " + this._isActive);
    };
    return Likes;
}());
exports.Likes = Likes;
