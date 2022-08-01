function loggerDecorator (func) {
    return  (arg) => {
        func(arg)
        console.log("This function executed at:", new Date().toLocaleString())
    }
}


@loggerDecorator
const some_func = (message) => console.log(message)


const some_func2 = () => console.log(10+20)


const decoratedLogger = loggerDecorator(some_func);
decoratedLogger("hi")
const decoratedLogger2 = loggerDecorator(some_func2);
decoratedLogger2()
