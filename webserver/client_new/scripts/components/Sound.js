define([
    'react',
    'game-logic/clib',
    'game-logic/stateLib',
    'game-logic/engine'
], function(
    React,
    Clib,
    StateLib,
    Engine
) {

    var D = React.DOM;

    return React.createClass({
        displayName: 'Sound',

        render: function() {

            return D.audio({className:'dd'},
                            D.source({src:'sounds/findingsuccess.wav'})
                        );
        }
    });

});

