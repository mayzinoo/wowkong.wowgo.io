
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

    const classMapping = {
    'C': 'emoji mine clicked',
    'M': 'emoji mine',
    'F': 'emoji flag',
    'W': 'emoji wrong',
    null: 'unrevealed',
  };

  const classMappingEasy = {
    'C': 'emoji mine clicked',
    'M': 'emoji mine',
    'F': 'emoji flag',
    'W': 'emoji wrong',
     null: 'unrevealed-easy',
  };

  const classMappingMedium = {
    'C': 'emoji mine clicked',
    'M': 'emoji mine',
    'F': 'emoji flag',
    'W': 'emoji wrong',
    null: 'unrevealed-medium',
  };

  const classMappingHard = {
    'C': 'emoji mine clicked',
    'M': 'emoji mine',
    'F': 'emoji flag',
    'W': 'emoji wrong',
    null: 'unrevealed-hard',
  };
  const classMappingExtreme = {
    'C': 'emoji mine clicked',
    'M': 'emoji mine',
    'F': 'emoji flag',
    'W': 'emoji wrong',
    null: 'unrevealed-extreme',
  };
  const classMappingNightmare = {
    'C': 'emoji mine clicked',
    'M': 'emoji mine',
    'F': 'emoji flag',
    'W': 'emoji wrong',
    null: 'unrevealed-nightmare',
  };

 const symbolMappingEasy = {
    'C': '   💣',
    'M': '   💣',
    'M\'': '   💣',
    '\'M': '   💣',
    'F': '   💣',
    'W': '   🥑',
    '0': '   🥑',
    '0\'': '   🥑',
    '\'0': '   🥑',
    '1': '   🥑',
    '\'1': '   🥑',
    '1\'': '   🥑',
    '2': '   🥑',
    '2\'': '   🥑',
    '\'2': '   🥑',
    '' : '   🥑',
  };

  const symbolMappingMedium = {
    'C': '💣',
    'M': '💣',
    'M\'': '💣',
    '\'M': '💣',
    'F': '💣',
    'W': '🥥',
    '0': '🥥',
    '0\'': '🥥',
    '\'0': '🥥',
    '1': '🥥',
    '\'1': '🥥',
    '1\'': '🥥',
    '2': '🥥',
    '2\'': '🥥',
    '\'2': '🥥',
    '' : '🥥',
  };

  const symbolMappingHard = {
    'C': '💣',
    'M': '💣',
    'M\'': '💣',
    '\'M': '💣',
    'F': '💣',
    'W': '🍌',
    '0': '🍌',
    '0\'': '🍌',
    '\'0': '🍌',
    '1': '🍌',
    '\'1': '🍌',
    '1\'': '🍌',
    '2': '🍌',
    '2\'': '🍌',
    '\'2': '🍌',
    '' : '🍌',
  };

  const symbolMappingExtreme = {
    'C': '💣',
    'M': '💣',
    'M\'': '💣',
    '\'M': '💣',
    'F': '💣',
    'W': '🍍',
    '0': '🍍',
    '0\'': '🍍',
    '\'0': '🍍',
    '1': '🍍',
    '\'1': '🍍',
    '1\'': '🍍',
    '2': '🍍',
    '2\'': '🍍',
    '\'2': '🍍',
    '' : '🍍',
  };

  const symbolMappingNightmare = {
    'C': '💣',
    'M': '💣',
    'M\'': '💣',
    '\'M': '💣',
    'F': '💣',
    'W': '🍓',
    '0': '🍓',
    '0\'': '🍓',
    '\'0': '🍓',
    '1': '🍓',
    '\'1': '🍓',
    '1\'': '🍓',
    '2': '🍓',
    '2\'': '🍓',
    '\'2': '🍓',
    '' : '🍓',
  };


  
      var getSymbolEasy = function getSymbolEasy(value) {
    return symbolMappingEasy[value] || (value ? value : '');
  };

  var getSymbolMedium = function getSymbolMedium(value) {
    return symbolMappingMedium[value] || (value ? value : '');
  };

  var getSymbolHard = function getSymbolHard(value) {
    return symbolMappingHard[value] || (value ? value : '');
  };

  var getSymbolExtreme = function getSymbolExtreme(value) {
    return symbolMappingExtreme[value] || (value ? value : '');
  };

  var getSymbolNightmare = function getSymbolNightmare(value) {
    return symbolMappingNightmare[value] || (value ? value : '');
  };

  var getClass = function getClass(value) {
    return classMapping[value] || 'revealed number' + value;
  };

  var getClassEasy = function getClassEasy(value) {
    return classMappingEasy[value] || 'revealed number ' + value;
  };

  var getClassMedium = function getClassMedium(value) {
    return classMappingMedium[value] || 'revealed number' + value;
  };

  var getClassHard = function getClassHard(value) {
    return classMappingHard[value] || 'revealed number' + value;
  };

  var getClassExtreme = function getClassExtreme(value) {
    return classMappingExtreme[value] || 'revealed number' + value;
  };

  var getClassNightmare = function getClassNightmare(value) {
    return classMappingNightmare[value] || 'revealed number' + value;
  };
  
   

    return React.createClass({
        displayName: 'Square',

        propTypes: {
            id:React.PropTypes.number.isRequired,
            dd:React.PropTypes.number.isRequired,            
            data0:React.PropTypes.array.isRequired,
            data1:React.PropTypes.array.isRequired,
            data2:React.PropTypes.array.isRequired,
            data3:React.PropTypes.array.isRequired,
            data4:React.PropTypes.array.isRequired,
            data5:React.PropTypes.array.isRequired,
            data6:React.PropTypes.array.isRequired,
            data7:React.PropTypes.array.isRequired,
            data8:React.PropTypes.array.isRequired,
            gstatus:React.PropTypes.string.isRequired,
            width:React.PropTypes.number.isRequired,
            key:React.PropTypes.string.isRequired,
            value:React.PropTypes.number.isRequired,
            level:React.PropTypes.string.isRequired,
            
        },         

          render: function () {           

             if(this.props.id === 0){
                 var skey = this.props.dd;
                 var names_zero = this.props.data0;
                 names_zero = "'" + names_zero + "'";
                 var nameArr_0 = names_zero.split(',');                
                 
                 if(skey === 0){
                    var result = nameArr_0[0];    
                    
                 }
                 else if(skey === 1){
                  var result = nameArr_0[1];
                  
                 }
                 else if(skey === 2){
                  var result = nameArr_0[2];    
                 }
                 else{
                  var result = nameArr_0[3];    
                 }  

                  var level = this.props.level; var getfruit; var getclass;
                  if(level === 'Easy'){
                      getfruit = getSymbolEasy(result);
                      getvalue = getSymbolEasy(this.props.value);
                      getclass = getClassEasy(this.props.value);
                  }
                  else if(level === 'Medium'){
                      getfruit = getSymbolMedium(result);
                      getvalue = getSymbolMedium(this.props.value);
                      getclass = getClassMedium(this.props.value);
                  }
                  else if(level === 'Hard'){
                      getfruit = getSymbolHard(result);
                      getvalue = getSymbolHard(this.props.value);
                      getclass = getClassHard(this.props.value);
                  }
                  else if(level === 'Extreme'){
                      getfruit = getSymbolExtreme(result);
                      getvalue = getSymbolExtreme(this.props.value);
                      getclass = getClassExtreme(this.props.value);
                  }
                  else{
                      getfruit = getSymbolNightmare(result);
                      getvalue = getSymbolNightmare(this.props.value);
                      getclass = getClassNightmare(this.props.value);
                  }

                if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
            }
              
          
          else if(this.props.id ===1){
             var skey = this.props.dd;
             var names_one = this.props.data1;
             names_one = "'" + names_one + "'";
             var nameArr_1 = names_one.split(',');            
             
             if(skey === 0){
                var result = nameArr_1[0];
             }
             else if(skey === 1){
              var result = nameArr_1[1];
              
             }
             else if(skey === 2){
              var result = nameArr_1[2];
              
             }
             else{
              var result = nameArr_1[3];
              
             }

             var level = this.props.level; var getfruit; var getclass;
              if(level === 'Easy'){
                  getfruit = getSymbolEasy(result);
                  getvalue = getSymbolEasy(this.props.value);
                  getclass = getClassEasy(this.props.value);
              }
              else if(level === 'Medium'){
                  getfruit = getSymbolMedium(result);
                  getvalue = getSymbolMedium(this.props.value);
                  getclass = getClassMedium(this.props.value);
              }
              else if(level === 'Hard'){
                  getfruit = getSymbolHard(result);
                  getvalue = getSymbolHard(this.props.value);
                  getclass = getClassHard(this.props.value);
              }
              else if(level === 'Extreme'){
                  getfruit = getSymbolExtreme(result);
                  getvalue = getSymbolExtreme(this.props.value);
                  getclass = getClassExtreme(this.props.value);
              }
              else{
                  getfruit = getSymbolNightmare(result);
                  getvalue = getSymbolNightmare(this.props.value);
                  getclass = getClassNightmare(this.props.value);
              }

             
              if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                } 
          }  

          else if(this.props.id ===2){
             var skey = this.props.dd;
             var names_two = this.props.data2;
             names_two = "'" + names_two + "'";
             var nameArr_2 = names_two.split(',');   
             
             
             if(skey === 0){
                var result = nameArr_2[0];       
             }
             else if(skey === 1){
              var result = nameArr_2[1];
              
             }
             else if(skey === 2){
              var result = nameArr_2[2];
              
             }
             else{
              var result = nameArr_2[3];              
             }

             var level = this.props.level; var getfruit; var getclass;
              if(level === 'Easy'){
                  getfruit = getSymbolEasy(result);
                  getvalue = getSymbolEasy(this.props.value);
                  getclass = getClassEasy(this.props.value);
              }
              else if(level === 'Medium'){
                  getfruit = getSymbolMedium(result);
                  getvalue = getSymbolMedium(this.props.value);
                  getclass = getClassMedium(this.props.value);
              }
              else if(level === 'Hard'){
                  getfruit = getSymbolHard(result);
                  getvalue = getSymbolHard(this.props.value);
                  getclass = getClassHard(this.props.value);
              }
              else if(level === 'Extreme'){
                  getfruit = getSymbolExtreme(result);
                  getvalue = getSymbolExtreme(this.props.value);
                  getclass = getClassExtreme(this.props.value);
              }
              else{
                  getfruit = getSymbolNightmare(result);
                  getvalue = getSymbolNightmare(this.props.value);
                  getclass = getClassNightmare(this.props.value);
              }



             if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
            }

            else if(this.props.id ===3){
               var skey = this.props.dd;
               var names_two = this.props.data3;
               names_two = "'" + names_two + "'";
               var nameArr_3 = names_two.split(',');             
               
               if(skey === 0){
                  var result = nameArr_3[0];               
                }
               else if(skey === 1){
                var result = nameArr_3[1];
                
               }
               else if(skey === 2){
                var result = nameArr_3[2];
                
               }
               else{
                var result = nameArr_3[3];                
               } 

               var level = this.props.level; var getfruit; var getclass;
                  if(level === 'Easy'){
                      getfruit = getSymbolEasy(result);
                      getvalue = getSymbolEasy(this.props.value);
                      getclass = getClassEasy(this.props.value);
                  }
                  else if(level === 'Medium'){
                      getfruit = getSymbolMedium(result);
                      getvalue = getSymbolMedium(this.props.value);
                      getclass = getClassMedium(this.props.value);
                  }
                  else if(level === 'Hard'){
                      getfruit = getSymbolHard(result);
                      getvalue = getSymbolHard(this.props.value);
                      getclass = getClassHard(this.props.value);
                  }
                  else if(level === 'Extreme'){
                      getfruit = getSymbolExtreme(result);
                      getvalue = getSymbolExtreme(this.props.value);
                      getclass = getClassExtreme(this.props.value);
                  }
                  else{
                      getfruit = getSymbolNightmare(result);
                      getvalue = getSymbolNightmare(this.props.value);
                      getclass = getClassNightmare(this.props.value);
                  }

               if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
            } 

            else if(this.props.id ===4){
               var skey = this.props.dd;
               var names_two = this.props.data4;
               names_two = "'" + names_two + "'";
               var nameArr_3 = names_two.split(',');             
               
               if(skey === 0){
                  var result = nameArr_3[0];               
                  
               }
               else if(skey === 1){
                var result = nameArr_3[1];
                
               }
               else if(skey === 2){
                var result = nameArr_3[2];
                
               }
               else{
                var result = nameArr_3[3];                
               }

              var level = this.props.level; var getfruit; var getclass;
                  if(level === 'Easy'){
                      getfruit = getSymbolEasy(result);
                      getvalue = getSymbolEasy(this.props.value);
                      getclass = getClassEasy(this.props.value);
                  }
                  else if(level === 'Medium'){
                      getfruit = getSymbolMedium(result);
                      getvalue = getSymbolMedium(this.props.value);
                      getclass = getClassMedium(this.props.value);
                  }
                  else if(level === 'Hard'){
                      getfruit = getSymbolHard(result);
                      getvalue = getSymbolHard(this.props.value);
                      getclass = getClassHard(this.props.value);
                  }
                  else if(level === 'Extreme'){
                      getfruit = getSymbolExtreme(result);
                      getvalue = getSymbolExtreme(this.props.value);
                      getclass = getClassExtreme(this.props.value);
                  }
                  else{
                      getfruit = getSymbolNightmare(result);
                      getvalue = getSymbolNightmare(this.props.value);
                      getclass = getClassNightmare(this.props.value);
                  }



               if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
            }

            else if(this.props.id ===5){
               var skey = this.props.dd;
               var names_two = this.props.data5;
               names_two = "'" + names_two + "'";
               var nameArr_3 = names_two.split(',');             
               
               if(skey === 0){
                  var result = nameArr_3[0];   
                  
               }
               else if(skey === 1){
                var result = nameArr_3[1];
                
               }
               else if(skey === 2){
                var result = nameArr_3[2];
                
               }
               else{
                var result = nameArr_3[3];                
               }

              var level = this.props.level; var getfruit; var getclass;
                  if(level === 'Easy'){
                      getfruit = getSymbolEasy(result);
                      getvalue = getSymbolEasy(this.props.value);
                      getclass = getClassEasy(this.props.value);
                  }
                  else if(level === 'Medium'){
                      getfruit = getSymbolMedium(result);
                      getvalue = getSymbolMedium(this.props.value);
                      getclass = getClassMedium(this.props.value);
                  }
                  else if(level === 'Hard'){
                      getfruit = getSymbolHard(result);
                      getvalue = getSymbolHard(this.props.value);
                      getclass = getClassHard(this.props.value);
                  }
                  else if(level === 'Extreme'){
                      getfruit = getSymbolExtreme(result);
                      getvalue = getSymbolExtreme(this.props.value);
                      getclass = getClassExtreme(this.props.value);
                  }
                  else{
                      getfruit = getSymbolNightmare(result);
                      getvalue = getSymbolNightmare(this.props.value);
                      getclass = getClassNightmare(this.props.value);
                  }


               if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )          
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
            }
            
            else if(this.props.id ===6){
               var skey = this.props.dd;
               var names_two = this.props.data6;
               names_two = "'" + names_two + "'";
               var nameArr_3 = names_two.split(',');              
               
               if(skey === 0){
                  var result = nameArr_3[0];               
               }
               else if(skey === 1){
                var result = nameArr_3[1];
                
               }
               else if(skey === 2){
                var result = nameArr_3[2];
                
               }
               else{
                var result = nameArr_3[3];                
               }

              var level = this.props.level; var getfruit; var getclass;
                  if(level === 'Easy'){
                      getfruit = getSymbolEasy(result);
                      getvalue = getSymbolEasy(this.props.value);
                      getclass = getClassEasy(this.props.value);
                  }
                  else if(level === 'Medium'){
                      getfruit = getSymbolMedium(result);
                      getvalue = getSymbolMedium(this.props.value);
                      getclass = getClassMedium(this.props.value);
                  }
                  else if(level === 'Hard'){
                      getfruit = getSymbolHard(result);
                      getvalue = getSymbolHard(this.props.value);
                      getclass = getClassHard(this.props.value);
                  }
                  else if(level === 'Extreme'){
                      getfruit = getSymbolExtreme(result);
                      getvalue = getSymbolExtreme(this.props.value);
                      getclass = getClassExtreme(this.props.value);
                  }
                  else{
                      getfruit = getSymbolNightmare(result);
                      getvalue = getSymbolNightmare(this.props.value);
                      getclass = getClassNightmare(this.props.value);
                  }


              if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
            }

            else if(this.props.id ===7){
               var skey = this.props.dd;
               var names_two = this.props.data7;
               names_two = "'" + names_two + "'";
               var nameArr_3 = names_two.split(',');           
               
               if(skey === 0){
                  var result = nameArr_3[0];          
               }
               else if(skey === 1){
                var result = nameArr_3[1];
                
               }
               else if(skey === 2){
                var result = nameArr_3[2];
                
               }
               else{
                var result = nameArr_3[3];                
               }

              var level = this.props.level; var getfruit; var getclass;
                  if(level === 'Easy'){
                      getfruit = getSymbolEasy(result);
                      getvalue = getSymbolEasy(this.props.value);
                      getclass = getClassEasy(this.props.value);
                  }
                  else if(level === 'Medium'){
                      getfruit = getSymbolMedium(result);
                      getvalue = getSymbolMedium(this.props.value);
                      getclass = getClassMedium(this.props.value);
                  }
                  else if(level === 'Hard'){
                      getfruit = getSymbolHard(result);
                      getvalue = getSymbolHard(this.props.value);
                      getclass = getClassHard(this.props.value);
                  }
                  else if(level === 'Extreme'){
                      getfruit = getSymbolExtreme(result);
                      getvalue = getSymbolExtreme(this.props.value);
                      getclass = getClassExtreme(this.props.value);
                  }
                  else{
                      getfruit = getSymbolNightmare(result);
                      getvalue = getSymbolNightmare(this.props.value);
                      getclass = getClassNightmare(this.props.value);
                  }


              if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
           }

           else {
             var skey = this.props.dd;
             var names_two = this.props.data8;
             names_two = "'" + names_two + "'";
             var nameArr_3 = names_two.split(',');          
             
             if(skey === 0){
                var result = nameArr_3[0];               
             }
             else if(skey === 1){
              var result = nameArr_3[1];
              
             }
             else if(skey === 2){
              var result = nameArr_3[2];
              
             }
             else{
              var result = nameArr_3[3];              
             } 

             var level = this.props.level; var getfruit; var getclass;
                  if(level === 'Easy'){
                      getfruit = getSymbolEasy(result);
                      getvalue = getSymbolEasy(this.props.value);
                      getclass = getClassEasy(this.props.value);
                  }
                  else if(level === 'Medium'){
                      getfruit = getSymbolMedium(result);
                      getvalue = getSymbolMedium(this.props.value);
                      getclass = getClassMedium(this.props.value);
                  }
                  else if(level === 'Hard'){
                      getfruit = getSymbolHard(result);
                      getvalue = getSymbolHard(this.props.value);
                      getclass = getClassHard(this.props.value);
                  }
                  else if(level === 'Extreme'){
                      getfruit = getSymbolExtreme(result);
                      getvalue = getSymbolExtreme(this.props.value);
                      getclass = getClassExtreme(this.props.value);
                  }
                  else{
                      getfruit = getSymbolNightmare(result);
                      getvalue = getSymbolNightmare(this.props.value);
                      getclass = getClassNightmare(this.props.value);
                  }

             if(this.props.width===4){
                  return D.button({ className:`gfour Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else if(this.props.width===3){
                  return D.button({ className:`gthree Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
                else{
                  return D.button({ className:`gtwo Square ${getclass}`, onClick: this.props.onClick  } ,              
                  (this.props.gstatus === 'fail'  ?  getfruit :  getvalue )      
                  );
                }
            }
       }   
    });
});



