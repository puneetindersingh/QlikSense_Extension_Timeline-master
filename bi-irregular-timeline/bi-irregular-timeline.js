/*
Created by Ralf Becher - ralf.becher@web.de - (c) 2015 irregular.bi, Leipzig, Germany
Tested on Qlik Sense 2.1.1

irregular.bi takes no responsibility for any code.
Use at your own risk.
*/

//loads a fixed vis.js, see: https://github.com/almende/vis/issues/2628
define(["jquery", "qlik", "./scripts/vis-fix2628.min", "css!./styles/vis.min.css", "css!./styles/style.css"],
    function ($, qlik, vis) {
        'use strict';

        return {
            initialProperties: {
                version: 0.2,
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [{
                        qWidth: 8,
                        qHeight: 1250
                    }]
                }
            },
            //property panel
            definition: {
                type: "items",
                component: "accordion",
                items: {

                    dimensions: {
                        uses: "dimensions",
                        min: 5,
                        max: 5
                            /*
                                1. Dimension: Reference ID, numeric (Event ID or else) or String
                                2. Dimension: Item Content, text
                                3. Dimension: Start Date
                                4. Dimension: End Date (optional, null if omitted)
                                5. Dimension: Type (box (default), point, range, background)
                            */
                    },
                    measures: {
                        uses: "measures",
                        min: 0,
                        max: 3
                            /*
                                1. Measure: title text for hover popup (optional)
                                2. Measure: CSS class name for styling or number 1 to 10 for class color-a = "QlikSense dark blue" to color-j = "Qlik Sense dark red" (optional)
                                3. Measure: group name to group items in swim lanes (optional)
                            */
                    },
                    sorting: {
                        uses: "sorting"
                    },

                    addons: {
                        uses: "addons",
                        items: {
                            dataHandling: {
                                uses: "dataHandling"
                            }
                        }
                    },
                    settings: {
                        uses: "settings",
                        items: {
                          colors:{
                            type:"items",
                            label:"Colour Picker",
                            items:{
                              Css: {
                            type: "string",
                            component: "dropdown",
                            label: "Css Group",
                            ref: "Variable",
                            options: [{
                                label: "1",
                                value: "A"
                        }, {
                                label: "2",
                                value: "B"
                        }, {
                                label: "3",
                                value: "C"
                        }, {
                                label: "4",
                                value: "D"
                        }, {
                                label: "5",
                                value: "E"
                        }, {
                                label: "6",
                                value: "F"
                        }, {
                                label: "7",
                                value: "G"
                        }, {
                                label: "8",
                                value: "H"
                        }, {
                                label: "9",
                                value: "I"
                        }, {
                                label: "10",
                                value: "J"
                        }],
                            defaultValue: "A"
                        },
                                        						ColorA: {
                                                        label:"Color Css",
                            					                ref: "Buttoncolor",
                            					                type: "object",
                            					                component: "color-picker",

                            					                defaultValue:{index: 1, color: "#000000"},

                            }
                            }
                          },
                            timelineHeader: {
                                type: "items",
                                label: "Timeline Params",
                                items: {
                                    axisOrientation: {
                                        ref: "axisOrientation",
                                        type: "string",
                                        component: "dropdown",
                                        label: "Axis Orientation",
                                        options: [{
                                                value: 'top'
                                        }, {
                                                value: 'bottom'
                                        }, {
                                                value: 'both'
                                        }, {
                                                value: 'none'
                                        }
                                        ],
                                        defaultValue: "bottom"
                                    },
                                    itemOrientation: {
                                        ref: "itemOrientation",
                                        type: "string",
                                        component: "dropdown",
                                        label: "Item Orientation",
                                        options: [{
                                                value: 'top'
                                        }, {
                                                value: 'bottom'
                                        }
                                        ],
                                        defaultValue: "bottom"
                                    },
                                    stackItems: {
                                        ref: "stackItems",
                                        type: "boolean",
                                        component: "switch",
                                        label: "Stack Items",
                                        options: [{
                                            value: true,
                                            label: "On"
                                        }, {
                                            value: false,
                                            label: "Off"
                                        }],
                                        defaultValue: true
                                    },
                                    groupSorting: {
                                        ref: "groupSorting",
                                        type: "string",
                                        component: "dropdown",
                                        label: "Group Sorting",
                                        options: [{
                                                value: 'A',
                                                label: 'Ascending'
                                        }, {
                                                value: 'D',
                                                label: 'Descending'
                                        }
                                        ],
                                        defaultValue: "A"
                                    },
                                    localizeDate: {
                                        ref: "localizeDate",
                                        type: "string",
                                        component: "dropdown",
                                        label: "Localization",
                                        options: [{
                                                value: 'af'
                                        }, {
                                                value: 'ar-ma'
                                        }, {
                                                value: 'ar-sa'
                                        }, {
                                                value: 'ar-tn'
                                        }, {
                                                value: 'ar'
                                        }, {
                                                value: 'az'
                                        }, {
                                                value: 'be'
                                        },
                                            {
                                                value: 'bg'
                                        }, {
                                                value: 'bn'
                                        }, {
                                                value: 'bo'
                                        }, {
                                                value: 'br'
                                        }, {
                                                value: 'bs'
                                        }, {
                                                value: 'ca'
                                        }, {
                                                value: 'cs'
                                        }, {
                                                value: 'cv'
                                        },
                                            {
                                                value: 'cy'
                                        }, {
                                                value: 'da'
                                        }, {
                                                value: 'de-at'
                                        }, {
                                                value: 'de'
                                        }, {
                                                value: 'el'
                                        }, {
                                                value: 'en-au'
                                        }, {
                                                value: 'en-ca'
                                        },
                                            {
                                                value: 'en-gb'
                                        }, {
                                                value: 'eo'
                                        }, {
                                                value: 'es'
                                        }, {
                                                value: 'et'
                                        }, {
                                                value: 'eu'
                                        }, {
                                                value: 'fa'
                                        }, {
                                                value: 'fi'
                                        }, {
                                                value: 'fo'
                                        },
                                            {
                                                value: 'fr-ca'
                                        }, {
                                                value: 'fr'
                                        }, {
                                                value: 'fy'
                                        }, {
                                                value: 'gl'
                                        }, {
                                                value: 'he'
                                        }, {
                                                value: 'hi'
                                        }, {
                                                value: 'hr'
                                        }, {
                                                value: 'hu'
                                        },
                                            {
                                                value: 'hy-am'
                                        }, {
                                                value: 'id'
                                        }, {
                                                value: 'is'
                                        }, {
                                                value: 'it'
                                        }, {
                                                value: 'ja'
                                        }, {
                                                value: 'jv'
                                        }, {
                                                value: 'ka'
                                        }, {
                                                value: 'km'
                                        },
                                            {
                                                value: 'ko'
                                        }, {
                                                value: 'lb'
                                        }, {
                                                value: 'lt'
                                        }, {
                                                value: 'lv'
                                        }, {
                                                value: 'me'
                                        }, {
                                                value: 'mk'
                                        }, {
                                                value: 'ml'
                                        }, {
                                                value: 'mr'
                                        },
                                            {
                                                value: 'ms-my'
                                        }, {
                                                value: 'ms'
                                        }, {
                                                value: 'my'
                                        }, {
                                                value: 'nb'
                                        }, {
                                                value: 'ne'
                                        }, {
                                                value: 'nl'
                                        }, {
                                                value: 'nn'
                                        }, {
                                                value: 'pl'
                                        },
                                            {
                                                value: 'pt-br'
                                        }, {
                                                value: 'pt'
                                        }, {
                                                value: 'ro'
                                        }, {
                                                value: 'ru'
                                        }, {
                                                value: 'si'
                                        }, {
                                                value: 'sk'
                                        }, {
                                                value: 'sl'
                                        }, {
                                                value: 'sq'
                                        },
                                            {
                                                value: 'sr-cyrl'
                                        }, {
                                                value: 'sr'
                                        }, {
                                                value: 'sv'
                                        }, {
                                                value: 'ta'
                                        }, {
                                                value: 'th'
                                        }, {
                                                value: 'tl-ph'
                                        }, {
                                                value: 'tr'
                                        }, {
                                                value: 'tzl'
                                        },
                                            {
                                                value: 'tzm-latno'
                                        }, {
                                                value: 'tzm'
                                        }, {
                                                value: 'uk'
                                        }, {
                                                value: 'uz'
                                        }, {
                                                value: 'vi'
                                        }, {
                                                value: 'zh-cn'
                                        }, {
                                                value: 'zh-tw'
                                        }
                                        ],
                                        defaultValue: "en-gb"
                                    },
                                    markWeekend: {
                                        ref: "markWeekend",
                                        type: "boolean",
                                        component: "switch",
                                        label: "Mark Weekend (F5 needed)",
                                        options: [{
                                            value: true,
                                            label: "On"
                                        }, {
                                            value: false,
                                            label: "Off"
                                        }],
                                        defaultValue: true
                                    },
                                    weekendDays: {
                                        ref: "weekendDays",
                                        type: "string",
                                        component: "dropdown",
                                        label: "Weekend Days (F5 needed)",
                                        options: [{
                                                value: 'satsun',
                                                label: 'Saturday-Sunday'
                                        }, {
                                                value: 'sun',
                                                label: 'Sunday'
                                        }, {
                                                value: 'frisat',
                                                label: 'Friday-Saturday'
                                        }, {
                                                value: 'fri',
                                                label: 'Friday'
                                        }
                                        ],
                                        defaultValue: "satsun"
                                    },
                                    reverseColor: {
                                        ref: "reverseColor",
                                        type: "boolean",
                                        component: "switch",
                                        label: "Reverse Color",
                                        options: [{
                                            value: true,
                                            label: "On"
                                        }, {
                                            value: false,
                                            label: "Off"
                                        }],
                                        defaultValue: false
                                    },
                                    itemOverflow: {
                                        ref: "itemOverflow",
                                        type: "boolean",
                                        component: "switch",
                                        label: "Title Text Overflow",
                                        options: [{
                                            value: true,
                                            label: "On"
                                        }, {
                                            value: false,
                                            label: "Off"
                                        }],
                                        defaultValue: false
                                    },
                                    backgroundCss: {
                                        ref: "backgroundCss",
                                        type: "boolean",
                                        component: "switch",
                                        label: "Apply CSS for Background",
                                        options: [{
                                            value: true,
                                            label: "On"
                                        }, {
                                            value: false,
                                            label: "Off"
                                        }],
                                        defaultValue: true
                                    },
                                    maxItems: {
                                        ref: "maxItems",
                                        type: "integer",
                                        label: "max. Items to render",
                                        defaultValue: 100
                                    },
                                    fitAllInWindow: {
                                        ref: "fitAllInWindow",
                                        type: "boolean",
                                        component: "switch",
                                        label: "Fit all events in window",
                                        options: [{
                                            value: true,
                                            label: "On"
                                        }, {
                                            value: false,
                                            label: "Off"
                                        }],
                                        defaultValue: false
                                    },
                                    moveToTime: {
                                        ref: "moveToTime",
                                        type: "number",
                                        label: "Move focus to time",
                                        defaultValue: 0,
                                        expression: "optional",
                                        show: function (layout) {
                                            return layout.fitAllInWindow != 1;
                                        }
                                    },
                                    rollingMode: {
                                        ref: "rollingMode",
                                        type: "boolean",
                                        component: "switch",
                                        label: "Rolling Mode",
                                        options: [{
                                            value: true,
                                            label: "On"
                                        }, {
                                            value: false,
                                            label: "Off"
                                        }],
                                        defaultValue: false
                                    },
                                    visibleRangeMin: {
                                        ref: "visibleRangeMin",
                                        type: "number",
                                        label: "Visible range min.",
                                        defaultValue: 0,
                                        expression: "optional"
                                    },
                                    visibleRangeMax: {
                                        ref: "visibleRangeMax",
                                        type: "number",
                                        label: "Visible range max.",
                                        defaultValue: 0,
                                        expression: "optional"
                                    },
                                    zoomMin: {
                                        ref: "zoomMin",
                                        type: "integer",
                                        label: "Zoom min.",
                                        defaultValue: 0,
                                        expression: "optional"
                                    },
                                    zoomMax: {
                                        ref: "zoomMax",
                                        type: "integer",
                                        label: "Zoom max.",
                                        defaultValue: 0,
                                        expression: "optional"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            support: {
                export: true
            },
            snapshot: {
                canTakeSnapshot: true
            },
            paint: function ($element, layout) {
console.log(layout.Variable);
console.log(layout.Buttoncolor.color);
var color=layout.Buttoncolor.color;
var selected_css;
if(layout.Variable=="A")
{
  selected_css=".vis-item.color-a";
}
if(layout.Variable=="B")
{
  selected_css=".vis-item.color-b";
}
if(layout.Variable=="C")
{
  selected_css=".vis-item.color-c";
}
if(layout.Variable=="D")
{
  selected_css=".vis-item.color-d";
}
if(layout.Variable=="E")
{
  selected_css=".vis-item.color-e";
}
if(layout.Variable=="F")
{
  selected_css=".vis-item.color-f";
}
if(layout.Variable=="G")
{
  selected_css=".vis-item.color-g";
}
if(layout.Variable=="H")
{
  selected_css=".vis-item.color-h";
}
if(layout.Variable=="I")
{
  selected_css=".vis-item.color-i";
}
if(layout.Variable=="J")
{
  selected_css=".vis-item.color-j";
}
$("<style>")
    .prop("type", "text/css")
    .html("\
"+selected_css+" {\
background-color: "+color+";\
}")

    .appendTo("head");
                if (layout.itemOverflow) {
                    $("<style>")
                        .prop("type", "text/css")
                        .html("\
					.vis-item .vis-item-overflow {\
						overflow: visible;\
					}")
                        .appendTo("head");
                }

                if (layout.markWeekend) {
                    var _style = 'background:lightgray;color: white;',
                        _days = '';
                    if (layout.weekendDays === 'fri') {
                        _days = '.vis-time-axis .vis-grid.vis-friday';
                    } else if (layout.weekendDays === 'frisat') {
                        _days = '.vis-time-axis .vis-grid.vis-friday, .vis-time-axis .vis-grid.vis-saturday';
                    } else if (layout.weekendDays === 'satsun') {
                        _days = '.vis-time-axis .vis-grid.vis-saturday, .vis-time-axis .vis-grid.vis-sunday';
                    } else if (layout.weekendDays === 'sun') {
                        _days = '.vis-time-axis .vis-grid.vis-sunday';
                    }
                    $("<style type='text/css'>" + _days + "{" + _style + "}</style>").appendTo("head");
                }

                var _this = this,
                    //app = qlik.currApp();
                    qData = layout.qHyperCube.qDataPages[0],
                    id = layout.qInfo.qId,
                    containerId = 'timeline-container_' + id,
                    groupNames = [],
                    groups = {},
                    useGroups = false;

                if (qData && qData.qMatrix) {

                    $element.empty().append($('<div />')
                        .attr({
                            id: containerId
                        })
                        .css({
                            height: $element.height(),
                            width: $element.width(),
                            overflow: 'auto'
                        }));

                    if (layout.qHyperCube.qMeasureInfo.length > 2) {
                        // create groups
                        $.each(qData.qMatrix, function (i, e) {
                            if (e[7].qText && e[7].qText.trim() != '' && e[7].qText != '-') {
                                if ($.inArray(e[7].qText, groupNames) == -1) {
                                    groupNames.push(e[7].qText);
                                }
                            }
                        });
                        if (groupNames.length > 0) {
                            // sort groups descending for nows
                            if (layout.groupSorting == "A") {
                                groupNames.sort(function (a, b) {
                                    var x = a.toLowerCase(),
                                        y = b.toLowerCase();
                                    return x < y ? -1 : x > y ? 1 : 0;
                                });
                            } else if (layout.groupSorting == "D") {
                                groupNames.sort(function (a, b) {
                                    var y = a.toLowerCase(),
                                        x = b.toLowerCase();
                                    return x < y ? -1 : x > y ? 1 : 0;
                                });
                            }
                            // create a data set with groups
                            var groups = new vis.DataSet();
                            for (var g = 0; g < groupNames.length; g++) {
                                groups.add({
                                    id: g,
                                    content: groupNames[g]
                                });
                            }
                            useGroups = true;
                        }
                    }
                    //console.log(qData.qMatrix);
                    //console.log(groupNames);
                    var _qMatrix = qData.qMatrix;
                    if (_qMatrix.length > layout.maxItems) {
                        _qMatrix = _qMatrix.slice(0, layout.maxItems);
                    }

                    if (layout.visibleRangeMin > 0 || layout.visibleRangeMax > 0) {
                        _qMatrix = _qMatrix.filter(function (e) {
                            return (layout.visibleRangeMax == 0 || e[2].qNum < layout.visibleRangeMax) && (layout.visibleRangeMin == 0 || (e[3].qNum === "NaN" ? e[2].qNum : e[3].qNum) >= layout.visibleRangeMin);
                        });
                    }

                    var dataSet = _qMatrix.map(function (e) {
                        // minimum dimensions needed: id, content, start date
                        //console.log("dataSet item", e);
                        var dataItem = {
                            id: e[0].qElemNumber,
                            content: e[1].qText,
                            start: dateFromQlikNumber(e[2].qNum)
                        };
                        if (isTextCellNotEmpty(e[3])) {
                            // optional end date set
                            dataItem.end = dateFromQlikNumber(e[3].qNum);
                        }
                        if (isTextCellNotEmpty(e[4])) {
                            // optional type set
                            if ((e[4].qText == "background" && dataItem.end) || e[4].qText == "point") {
                                dataItem.type = e[4].qText;
                            }
                        }
                        if (e.length > 5) {
                            // optional measures set
                            if (e[5].qText) {
                                // title set
                                dataItem.title = e[5].qText;
                            } else {
                                dataItem.title = "-";
                            }
                            if (e.length > 6) {
                                if (isNaN(e[6].qNum)) {
                                    dataItem.className = e[6].qText;
                                } else {
                                    if (layout.reverseColor) {
                                        if (dataItem.type == "background") {
                                            if (layout.backgroundCss) {
                                                dataItem.className = "color-bg-" + String.fromCharCode(107 - Math.max(1, Math.min(10, e[6].qNum)));
                                            }
                                        } else {
                                            dataItem.className = "color-" + String.fromCharCode(107 - Math.max(1, Math.min(10, e[6].qNum)));
                                        }
                                    } else {
                                        if (dataItem.type == "background") {
                                            if (layout.backgroundCss) {
                                                dataItem.className = "color-bg-" + String.fromCharCode(96 + Math.max(1, Math.min(10, e[6].qNum)));
                                            }
                                        } else {
                                            dataItem.className = "color-" + String.fromCharCode(96 + Math.max(1, Math.min(10, e[6].qNum)));
                                        }
                                    }
                                }
                                if (useGroups && e.length > 7) {
                                    if (isTextCellNotEmpty(e[7])) {
                                        var pos = $.inArray(e[7].qText, groupNames);
                                        if (pos >= 0) dataItem.group = pos;
                                    }
                                }
                            }
                        } else {
                            dataItem.title = dateFromQlikNumber(e[2].qNum);
                        }
                        //console.log(dataItem);
                        return dataItem;
                    });
                    //console.log(dataSet);

                    //                    function customOrder(a, b) {
                    //                        // order by id
                    //                        console.log("a", a.start, "b", b.start);
                    //                        return b.start.getMilliseconds() - a.start.getMilliseconds();
                    //                    }

                    var dataItems = new vis.DataSet(dataSet);
                    var container = document.getElementById(containerId);
                    var options = {
                        editable: false,
                        height: $element.height(),
                        locale: layout.localizeDate,
                        orientation: {
                            axis: layout.axisOrientation,
                            item: layout.itemOrientation
                        },
                        stack: layout.stackItems,
                        //order: customOrder,
                        groupOrder: 'id',
                        rollingMode: layout.rollingMode
                    };

                    if (layout.visibleRangeMin && layout.visibleRangeMin != 0) options.min = dateFromQlikNumber(layout.visibleRangeMin);
                    if (layout.visibleRangeMax && layout.visibleRangeMax != 0) options.max = dateFromQlikNumber(layout.visibleRangeMax);
                    if (layout.zoomMin && layout.zoomMin > 0) options.zoomMin = layout.zoomMin * 86400000;
                    if (layout.zoomMax && layout.zoomMax > 0) options.zoomMax = layout.zoomMax * 86400000;

                    var timeline = new vis.Timeline(container);

                    timeline.setOptions(options);
                    if (useGroups) timeline.setGroups(groups);
                    timeline.setItems(dataItems);
                    //console.log(timeline);
                    if (layout.fitAllInWindow) {
                        timeline.fit();
                    } else if (layout.moveToTime && layout.moveToTime != 0) {
                        timeline.moveTo(dateFromQlikNumber(layout.moveToTime));
                    }
                    $("#" + containerId).css('cursor', 'default');

                    timeline.on('select', function (properties) {
                        if (qlik.navigation.getMode() === "analysis") {
                            //console.log(properties);
                            if (properties.hasOwnProperty("items")) {
                                if (properties.items.length > 0) {
                                    //Make the selections
                                    _this.backendApi.selectValues(0, [properties.items[0]], true);
                                }
                            }
                        }
                    });
                }
            }
        }


    });

function isTextCellNotEmpty(c) {
    return (c.qText && !(c.qIsNull || c.qText.trim() == ''));
}

function dateFromQlikNumber(n) {
    // return: Date from QlikView number
    var d = new Date((n - 25569) * 86400 * 1000);
    // since date was created in UTC shift it to the local timezone
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    return d;
}

function dateFromQlikNumberToISOString10(n) {
    // return: date string in format YYYY-MM-DD
    return dateFromQlikNumber(n).toISOString().slice(0, 10)
}
