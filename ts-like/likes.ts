export class Likes {
    constructor(private _totalLikes: number, private _isActive: boolean) {

    }

    buttonClicked() {
        console.log("BUTTON CLICKED!");
        this._isActive = !this._isActive;
        if (this._isActive) {
            this._totalLikes = this._totalLikes + 1;
        } else {
            this._totalLikes = this._totalLikes - 1
        }
    }

    theStatus() {
        console.log(`There are  ${this._totalLikes} likes. The status is ${this._isActive}`);
    }
}