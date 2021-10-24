"use strict";
exports.__esModule = true;
var Styles;
(function (Styles) {
    Styles["LOG"] = "color: #FFFFFF; background-color: #8f8f8f;";
    Styles["INFO"] = "color: #FFFFFF; background-color: #3484e7;";
    Styles["SUCCESS"] = "color: #000000; background-color: #32FC38;";
    Styles["ERROR"] = "color: #FFFFFF; background-color: #F20505;";
    Styles["GOAL"] = "color: #000000; background-color: #FFFFFF; border: 2px dotted #000000;";
    Styles["POO"] = "color: #FCE475; background-color: #6E2717;";
    Styles["PUKE"] = "color: #F4FB11; background-color: #0E8516;  border: 2px dotted #F4FB11;";
    Styles["BOOM"] = "color: #F20505; background-color: #FFD100; border: 2px dashed #F20505;";
    Styles["LOVE"] = "color: #FFFBD7; background-color: #FF00D4;";
    Styles["WARN"] = "color: #FFFFFF; background-color: #FF9300;";
    Styles["FIRE"] = "color: #FFF000; background-color: #B61412;";
    Styles["BUG"] = "color: #FFA3FC; background-color: #8811B5; font-weight: bold; border: 1px dashed #FFA3FC";
    Styles["FETCH"] = "color: #FFE0FD; background-color: #6E0969; padding: 3px 5px 4px 0; font-size: 0.8rem;";
    Styles["SEND"] = "color: #FFFFFF; background-color: #0080FF;";
    Styles["GROUP"] = "color: #FFFFFF; background-color: #000000; padding: 3px 5px 4px 0; font-size: 0.8rem;";
    Styles["GROUPCOLLAPSED"] = "color: #FFFFFF; background-color: #000000; padding: 3px 5px 4px 0; font-size: 0.8rem;";
    Styles["ICON"] = "font-size: 0.9rem;";
    Styles["COMMON"] = "font-size: 0.65rem;\n            padding: 1px 5px 2px 5px; \n            border-radius: 5px;\n            margin-top: 0;";
})(Styles || (Styles = {}));
var Icons;
(function (Icons) {
    Icons["LOG"] = "\uD83D\uDCAC";
    Icons["INFO"] = "\uD83C\uDF00";
    Icons["SUCCESS"] = "\u2705";
    Icons["ERROR"] = "\uD83D\uDE92";
    Icons["GOAL"] = "\uD83C\uDFC1";
    Icons["POO"] = "\uD83D\uDCA9";
    Icons["PUKE"] = "\uD83E\uDD2E";
    Icons["BOOM"] = "\uD83D\uDCA5";
    Icons["LOVE"] = "\uD83D\uDE0D";
    Icons["WARN"] = "\uD83D\uDEA8";
    Icons["FIRE"] = "\uD83D\uDD25";
    Icons["BUG"] = "\uD83D\uDC79";
    Icons["FETCH"] = "\uD83E\uDD84";
    Icons["SEND"] = "\uD83D\uDE80";
    Icons["GROUP"] = "\uD83D\uDCE6";
    Icons["GROUPCOLLAPSED"] = "\uD83D\uDCE6";
})(Icons || (Icons = {}));
var GenericActions;
(function (GenericActions) {
    GenericActions["LOG"] = "\uD83D\uDCAC";
    GenericActions["INFO"] = "\uD83C\uDF00";
    GenericActions["SUCCESS"] = "\u2705";
    GenericActions["ERROR"] = "\uD83D\uDE92";
    GenericActions["GOAL"] = "\uD83C\uDFC1";
    GenericActions["POO"] = "\uD83D\uDCA9";
    GenericActions["PUKE"] = "\uD83E\uDD2E";
    GenericActions["BOOM"] = "\uD83D\uDCA5";
    GenericActions["LOVE"] = "\uD83D\uDE0D";
    GenericActions["WARN"] = "\uD83D\uDEA8";
    GenericActions["FIRE"] = "\uD83D\uDD25";
    GenericActions["TIME"] = "\u23F0";
    GenericActions["BUG"] = "\uD83D\uDC79";
})(GenericActions || (GenericActions = {}));
var sendToConsole = function (_a) {
    var payload = _a.payload, type = _a.type, name = _a.name;
    console.log("%c" + Icons[type] + "%c" + type + (name ? " " + name : ""), Styles.ICON, Styles.COMMON + Styles[type], payload);
};
var sendGroupToConsole = function (type, name) {
    console.group("%c " + Icons[type] + (type === "FETCH" ? "FETCH: " : "") + (name ? "" + name : ""), Styles.COMMON + Styles[type]);
};
var sendGroupCollapsedToConsole = function (type, name) {
    console.groupCollapsed("%c " + Icons[type] + (name ? "" + name : ""), Styles.COMMON + Styles[type]);
};
var Konsole = {};
Konsole.table = console.table;
Konsole.assert = console.assert;
Konsole.clear = console.clear;
Konsole.count = console.count;
Konsole.countReset = console.countReset;
Konsole.debug = console.debug;
Konsole.dir = console.dir;
Konsole.dirxml = console.dirxml;
Konsole.table = console.table;
Konsole.time = console.time;
Konsole.timeEnd = console.timeEnd;
Konsole.timeLog = console.timeLog;
Konsole.timeStamp = console.timeStamp;
Konsole.trace = console.trace;
// eslint-disable-next-line
Konsole.fetch = function (payload, name) {
    sendGroupToConsole("FETCH", name);
    sendToConsole({ payload: payload, type: "SEND" });
};
Konsole.group = function (name) {
    sendGroupToConsole("GROUP", name);
};
Konsole.groupCollapsed = function (name) {
    sendGroupCollapsedToConsole("GROUPCOLLAPSED", name);
};
Konsole.groupEnd = function () {
    console.groupEnd();
};
Object.keys(GenericActions).forEach(function (fn) {
    if (Number.isNaN(Number(fn))) {
        Konsole[fn.toLowerCase()] = function (payload, name) {
            sendToConsole({ payload: payload, type: fn, name: name });
        };
    }
});
exports["default"] = Konsole;
