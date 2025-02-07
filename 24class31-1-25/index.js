    import express from 'express';
    import session from 'express-session';
    const app = express()
        
        const port = 7000;



        // Use the session middleware
        app.use(session({ secret: 'keyboard cat', 
            resave: false,
  saveUninitialized: true,
//   cookie: { secure: true },
  cookie: { maxAge: 60000 }}))

        // Access the session as req.session
        app.get('/', function(req, res, next) {
        if (req.session.views) {
            req.session.views++
            res.setHeader('Content-Type', 'text/html')
            res.write('<p>views: ' + req.session.views + '</p>')
            res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
            res.end()
        } else {
            req.session.views = 1
            res.end('welcome to the session demo. refresh!')
        }
        })

        app.listen(port,(req,res) => {
            console.log("running")
        })
