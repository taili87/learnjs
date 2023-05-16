// fetch api - browser API for http (ajax) requests
// default - GET Request, supports other methods as well.
// Return Promise

const url = "https://course-api.com/react-tours-project";
//const url = "https://course-api.com/"
fetch(url)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))