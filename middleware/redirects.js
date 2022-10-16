const redirects = require('../data/redirects.json') // update to your file path

export default function(req, res, next) {
  // find the redirect if it exists where the from === the requested url
  const redirect = redirects.find((r) => r.from === req.url)

  // If it exists, redirect the page with a 301 response else carry on
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } 
  
  if(req.headers.host == "www.nsk-uat.cinnamondigital.app") {
    redirect(req, "https://nsk-uat.cinnamondigital.app" + req.href)
    return
  }

  if(req.headers.host == "http://nsk-uat.cinnamondigital.app") {
    redirect(req, "https://nsk-uat.cinnamondigital.app" + req.href)
    return
  }

  if(req.headers.host == "https://www.nsk-uat.cinnamondigital.app") {
    redirect(req, "https://nsk-uat.cinnamondigital.app" + req.href)
    return
  }
  
  else {
    next()
  }
}