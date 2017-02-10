var annotate = require('./')



var fnArr = []


// REGULAR FORMAT
fnArr.push( function (x, y, z) {}) 

fnArr.push( function fn(x, y, z) {

})
  
fnArr.push( function (x,y,z){})

fnArr.push( function (
  // testing
  fn
) {})

fnArr.push( function (
  /*
    Hello World.
   */
  fn
) {})

// ARROW FORMAT
fnArr.push( (xy, z) => z )
fnArr.push(  (xy, z) => { return z; } )
fnArr.push( xyz => { return xyz; } )
fnArr.push( xyz => { return e(); } )
fnArr.push( x=>x )
fnArr.push( ()=>null )
fnArr.push( (
      // This is a test
      x
    ) => null )
fnArr.push( (/* testing a,b,c */) => null )
fnArr.push( (x, /* testing a,b,c */y, z) => null )
fnArr.push((x/* testing a,b,c */,y, z) => null )

// GENERATORS
fnArr.push( function *() {})
fnArr.push( function* () {})
fnArr.push( function*() {} )
fnArr.push( function * (x, y, xyz) {} )

// ONJECTS
//fnArr.push( {fn() {}} )
//fnArr.push( {fn () {}} )
//fnArr.push( {fn(){}} )
//fnArr.push( {fn(x, y, xyz){}} )

for( var i = 0; fnArr.length > i; i++){
  console.log('#%s: ', i, annotate( fnArr[i] ) )
}


/**
exscind - to cut out or off.
reckon - add up; evaluate
skulk - lurk; shirk
delve
perusal - the action of reading or examining something.
probe - investigation
anatomize
sunder - Split apart
exsect - excise, remove (AVAILABLE)
inquest - investigation
reconnoiter - inspect
perlustrate - examine closely
cogitation - a thought; design or plan:
rumination - a deep or considered thought about something.
speculate - think about deeply and theorize
excogitate - think out, plan, or devise.
*/