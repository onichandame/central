const okitchen = require('okitchen')
const path     = require('path')
const errors   = require(path.resolve(__dirname,'common','errors.js'))

/**
 * handles the user registration request
 * @module routers/newuser
 *
*/
module.exports=function(req, res)
{
  const {email}=req.body
  return checkRequest()
    .then(handleRequest)
    .then(finalize)
    .catch(handleError)
    .then(reply)

  function checkRequest()
  {
    return new Promise((r,j)=>{
      if(typeof email === 'string' && email) return r()
      else return j(1)
    })
  }

  function handleRequest()
  {
    return okitchen.db.insert
  }

  function finalize()
  {
  }

  function handleError(flag)
  {
    res.status(400)
    if(flag == 1)
      res.body=errors.req_invalid
  }

  function reply()
  {
    return okitchen.common.reply(res)
  }
}
