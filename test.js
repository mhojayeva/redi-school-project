function DoOnceTheFoodIsReady(callback) {
    console.log("I am waiting for food to be ready");

    setTimeout(function() {
    console.log("Food is ready. Let me do what I am supposed to do once it is ready");

    callback();
    }, 5000);

}

function CallMe() {
    console.log("Calling you to tell that food is ready");
}

DoOnceTheFoodIsReady(CallMe);