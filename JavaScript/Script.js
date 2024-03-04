function walk(callback) {
  setTimeout(() => {
    console.log("i am goind on walk");
    callback();
  }, 2000);
}

function gym(callback) {
  setTimeout(() => {
    console.log("i am goind to gym");
    callback();
  }, 2000);
}

function study(callback) {
  setTimeout(() => {
    console.log("i am going to study");
    callback();
  }, 2000);
}

function fun(callback) {
  setTimeout(() => {
    console.log("i am going to FUN");
    callback();
  }, 2000);
}

walk(() => {
  gym(() => {
    study(() => {
      fun(() => {
        setTimeout(() => {
          console.log("ALL THE TASKS WERE COMPLETED");
        }, 3000);
      });
    });
  });
});
