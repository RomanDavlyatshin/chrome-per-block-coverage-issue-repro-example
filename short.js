function foo(x) {
  if (x) {
    console.log('branch 1')
  } else {
    console.log('branch 2') // THIS LINE _CANNOT_ BE COVERED
  }
}

foo(true);
