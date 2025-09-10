if (!Element.prototype._attachShadow) {
    console.log("Overriding attachShadow to use open mode");
    Element.prototype._attachShadow = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function() {
        return this._attachShadow({ mode: "open" });
    };
}