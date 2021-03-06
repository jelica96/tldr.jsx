// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var CSS$ReactTemplate = require("./CSS.bs.js");
var Design_system$ReactTemplate = require("./design_system.bs.js");

var component = ReasonReact.statelessComponent("Border");

function make(state, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          style: ReactDOMRe.Style[/* combine */0](Curry._1(CSS$ReactTemplate.Atom[/* Border */1][/* to_css */0], Curry._1(Design_system$ReactTemplate.Atom[/* Border */1][/* make */0], state)), {
                                borderStyle: "solid",
                                borderWidth: "1px",
                                bottom: "0",
                                left: "0",
                                position: "absolute",
                                right: "0",
                                top: "0",
                                zIndex: "-1"
                              })
                        });
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var Style = 0;

exports.Style = Style;
exports.component = component;
exports.make = make;
/* component Not a pure module */
