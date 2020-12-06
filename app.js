const express = require("express");
const app = express();
const morgan = require("morgan")

const tourRouter = require('./starter/routes/tourRoutes')
const userRouter = require('./starter/routes/userRoutes')


// #1 - MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json()); // middleware - function that can modify incoming request data
app.use(function (req, res, next) {
    console.log(" 🖕🖕🖕🖕🖕🖕🖕🖕🖕" )
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    console.log(req.requestTime)
    next()
})


//read the data from tour file

// console.log(dataTours)

// #2 - ROUTE HANDLERS




// app.get('/api/v1/tours', getAllTours)
// app.post('/api/v1/tours', createTour)
// app.get("/api/v1/tours/:id", getTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", delTour);

// #3 - ROUTES
    //  TOURS  



//  USERS  


app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

// #4 - SERVER
const port = 7000;
app.listen(port, () => {
  console.log(`🦆🦆🦆 its working on port ${port} 🦆🦆🦆`);
});
