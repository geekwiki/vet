function fnReflect(){
  var pfx = '[fnReflect]'
  var args = arguments
  var caller = args.callee.caller.toString()

  if ( ! args.length ){
    console.debug( pfx + 'NO ARGS')
  }
  else {
    console.debug('%s arguments passed', args.length)
    for( var i = 0; i < args.length; i++) {
      console.debug( pfx + ' Arg #%s (%s):',i, typeof args[i], args[i])
    }
  }
  
  console.debug( pfx + 'this',this)
  console.debug( pfx + 'toString()',caller)


  //caller.toString().match(/(?:(?:[a-zA-Z0-9_\s]+)(?:,(?!$))?)+/)

  var fnStr = caller.match(/function\s+([a-zA-Z_$][a-zA-Z0-9-_$]*)?\(((?:[a-zA-Z0-9_\s]*)*(?:,(?!$))?)+\)\{?/)

  var fnName = fnStr[1] || 'Anonymous Function'

  console.debug( pfx + 'fnStr',fnStr)
  console.debug( pfx + 'function name',fnName)

  return
}


var testA = function ( paramA, paramB ){
  fnReflect.apply(this, arguments)
  console.log('From testA')
}

function testB(firstName, lastName, greeting){
  fnReflect.apply(this, arguments)
  console.log('From testB')
}

var testC = function ( ){
  fnReflect.apply(this, arguments)
  console.log('From testC')
}

function testD(){
  fnReflect.apply(this, arguments)
  console.log('From testD')
}


testA('justin','hyland', 'IDKWTF')

testB('john','doe')

testC()

testD()