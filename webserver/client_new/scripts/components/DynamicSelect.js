define([
    'react',
    'components/GraphicsContainer',
    'components/ControlsSelector' 
], function (
    React,
    GraphicsContainerClass,
    ControlsSelectorClass

) {
    var D = React.DOM;

    var GraphicsContainer = React.createFactory(GraphicsContainerClass);
    var ControlsSelector = React.createFactory(ControlsSelectorClass);

     const symbolMapping = {
      'Easy': '🥑',
      'Medium': '🥥',
      'Hard': '🍌',
      'Extreme': '🍍',
      'Nightmare': '🍓',
      
    };
    const arrayData = [
      {
        id: 'Easy',
        name: '🥑 Easy' ,
        width: 4,
        level:'easy'   
      },
      {
        id: 'Medium',
        name: '🥥 Medium',
        width: 3,
        level:'medium'    
      },
      {
        id: 'Hard',
        name: '🍌 Hard',
        width: 2,
        level:'hard'    
      },
      {
        id: 'Extreme',
        name: '🍍 Extreme',
        width: 3,
        level:'extreme'    
      },
      {
        id: 'Nightmare',
        name: '🍓 Nightmare',
        width: 2,
        level:'nightmare'    
      },
    ];
    //const getSymbol = value => symbolMapping[value];

    var getSymbol = function getSymbol(value) {
  return symbolMapping[value];
};
    

    return React.createClass({
        displayName: 'DynamicSelect',

         handleEasy:function (event)
        {
            document.getElementById("myNav").setAttribute("class", "overlay"); 
            var selectedValue = 'Easy';
            this.props.onSelectChange(selectedValue);
        },
         handleMedium:function(event) 
        {
            document.getElementById("myNav").setAttribute("class", "overlay"); 
            var selectedValue = 'Medium';
            this.props.onSelectChange(selectedValue);
        },
         handleHard:function(event) 
         {
             document.getElementById("myNav").setAttribute("class", "overlay"); 
             var selectedValue = 'Hard';
             this.props.onSelectChange(selectedValue);
         },
          handleExtreme:function (event)
         {
             document.getElementById("myNav").setAttribute("class", "overlay"); 
             var selectedValue = 'Extreme';
             this.props.onSelectChange(selectedValue);
         },
          handleNightmare:function (event) 
         {
             document.getElementById("myNav").setAttribute("class", "overlay"); 
             var selectedValue = 'Nightmare';
             this.props.onSelectChange(selectedValue);
         },
         handleChange:function(event) 
         {
             document.getElementById("myNav").setAttribute("class", "overlay"); 
             var selectedValue = event.target.value;
             this.props.onSelectChange(selectedValue);
         },
         openNav:function(event) 
         {   
             document.getElementById("myNav").setAttribute("class", "overlay2");
             var selectedValue = this.props.selectedValue;
             this.props.onSelectChange(selectedValue);        
         },
         closeNav:function (event) 
         {        
             document.getElementById("myNav").setAttribute("class", "overlay");        
         },

        propTypes: {
            selectedValue:React.PropTypes.string.isRequired,
            currentstatus:React.PropTypes.string.isRequired,
            clicks:React.PropTypes.string.isRequired,
            playstatus:React.PropTypes.string.isRequired,
                        
        },         

          render: function () {            
            return D.div({ },
                    D.div({ id: 'myNav', className: 'overlay' },

                        D.div({ className: 'overlay-content' },
                            D.div({ className: 'overlay-content' },
                                D.ul({ className: 'groups-holder' },
                                    D.li({ onClick:this.handleEasy },
                                        D.div({  },
                                            D.div({ className:'inner-dropdown' },
                                                D.div({ className:'(this.props.selectedValue === "Easy" ? "activelabel" : "label")' },
                                                    D.div({className:'gname-label'},
                                                        D.div({ className:'mode-name' }, 'Easy' ),
                                                        D.div({ className:'group-name' }, '3 out of 4 win' )
                                                        )
                                                    
                                                )
                                            ),
                                            D.div({ className:'btn-holder' }, 
                                               D.div({ className:'selected-mode sc-dxgOiQ dtjNHQ' }, 
                                                    /*D.i({ className:'image  sc-dnqmqq gtgabp' } ),
                                                    D.i({ className:'image  sc-dnqmqq jSarNC' },  ),*/
                                                        D.div({ className:'level' }, 
                                                           D.i({ className:'image sc-dnqmqq frFmZv' }, '🥑' )
                                                        )
                                                )
                                            )
                                        )
                                    ),

                                    D.li({ onClick:this.handleMedium },
                                        D.div({  },
                                            D.div({ className:'inner-dropdown' },
                                                D.div({ className:'(this.props.selectedValue === "Medium" ? "activelabel" : "label")' },
                                                    D.div({className:'gname-label'},
                                                        D.div({ className:'mode-name' }, 'Medium' ),
                                                        D.div({ className:'group-name' }, '2 out of 3 win' )
                                                    )
                                                )
                                            ),
                                            D.div({ className:'btn-holder' }, 
                                               D.div({ className:'selected-mode sc-dxgOiQ dtjNHQ' }, 
                                                    /*D.i({ className:'image border sc-dnqmqq gtgabp' },  ),
                                                    D.i({ className:'image bg sc-dnqmqq jSarNC' },  ),*/
                                                        D.div({ className:'level' }, 
                                                           D.i({ className:'image sc-dnqmqq frFmZv' }, '🥥' )
                                                        )
                                                )
                                            )
                                        )
                                    ),

                                    D.li({ onClick:this.handleHard },
                                        D.div({  },
                                            D.div({ className:'inner-dropdown' },
                                                D.div({ className:'(this.props.selectedValue === "Hard" ? "activelabel" : "label")' },
                                                    D.div({className:'gname-label'},
                                                        D.div({ className:'mode-name' }, 'Hard' ),
                                                        D.div({ className:'group-name' }, '1 out of 2 wins')
                                                    )
                                                )
                                            ),
                                            D.div({ className:'btn-holder' }, 
                                               D.div({ className:'selected-mode sc-dxgOiQ dtjNHQ' }, 
                                                    /*D.i({ className:'image border sc-dnqmqq gtgabp' },  ),
                                                    D.i({ className:'image bg sc-dnqmqq jSarNC' },  ),*/
                                                        D.div({ className:'level' }, 
                                                           D.i({ className:'image sc-dnqmqq frFmZv' }, '🍌' ) 
                                                        )
                                                )
                                            )
                                        )
                                    ),

                                    D.li({ onClick:this.handleExtreme },
                                        D.div({  },
                                            D.div({ className:'inner-dropdown' },
                                                D.div({ className:'(this.props.selectedValue === "Extreme" ? "activelabel" : "label")' },
                                                    D.div({className:'gname-label'},
                                                        D.div({ className:'mode-name' }, 'Extreme' ),
                                                        D.div({ className:'group-name' }, '1 out of 3 wins' )
                                                    )
                                                )
                                            ),
                                            D.div({ className:'btn-holder' }, 
                                               D.div({ className:'selected-mode sc-dxgOiQ dtjNHQ' }, 
                                                    /*D.i({ className:'image border sc-dnqmqq gtgabp' },  ),
                                                    D.i({ className:'image bg sc-dnqmqq jSarNC' },  ),*/
                                                        D.div({ className:'level' }, 
                                                           D.i({ className:'image sc-dnqmqq frFmZv' }, '🍍' )
                                                        )
                                                )
                                            )
                                        )
                                    ),

                                    D.li({ onClick:this.handleNightmare },
                                        D.div({  },
                                            D.div({ className:'inner-dropdown' },
                                                D.div({ className:'(this.props.selectedValue === "Nightmare" ? "activelabel" : "label")' },
                                                    D.div({className:'gname-label'},
                                                        D.div({ className:'mode-name' }, 'Nightmare' ),
                                                        D.div({ className:'group-name' }, '1 out of 4 wins')
                                                    )
                                                )
                                            ),
                                            D.div({ className:'btn-holder' }, 
                                               D.div({ className:'selected-mode sc-dxgOiQ dtjNHQ' }, 
                                                    /*D.i({ className:'image border sc-dnqmqq gtgabp' },  ),
                                                    D.i({ className:'image bg sc-dnqmqq jSarNC' },  ),*/
                                                        D.div({ className:'level' }, 
                                                           D.i({ className:'image sc-dnqmqq frFmZv' }, '🍓' )
                                                        )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                
                    ),

                    D.button({ className:(this.props.currentstatus === 'before' ? 'btn-level' : 'tooltipfordynamic'), 
                               onClick:(this.props.currentstatus === 'before' || this.props.status === 'fail' || this.props.playstatus === 'Play' ? this.openNav : '') }, 
                         D.i({ }, (this.props.selectedValue)  ? getSymbol(this.props.selectedValue) : '🥑'  ), 
                         D.span({ className:'tooltiptext' }, 'Finish active bet to change difficulty' )
                    )
                );    
        }   
                                
    });
});

    

    


