# Development Notes

  - Prism.js throws an error on startup
    - Cause: SQL language definition is not included in the prism build.
    - Fix: Include the SQL language definition in the `gulpfile.js` and rebuild by running `npx gulp build-prism`.
    - (Chrome) Uncaught TypeError: Cannot set property 'comment' of undefined
        at Object.extend (prism.js:90)
        at Object.<anonymous> (prism.js:5392)
        at Object.sprintf (prism.js:8139)
        at __webpack_require__ (bootstrap e5d4a73e023a03cf39a3:659)
        at fn (bootstrap e5d4a73e023a03cf39a3:85)
        at Object.<anonymous> (app.js:114054)
        at __webpack_require__ (bootstrap e5d4a73e023a03cf39a3:659)
        at fn (bootstrap e5d4a73e023a03cf39a3:85)
        at Object.<anonymous> (index.js:1)
        at __webpack_require__ (bootstrap e5d4a73e023a03cf39a3:659)
    - (Firefox) TypeError: lang is undefined [Learn More]
        prism.js:90
        extend prism.js:90
        <anonymous> prism.js:5392
        <anonymous> prism.js:1
        __webpack_require__ bootstrap e5d4a73e023a03cf39a3:659
        fn bootstrap e5d4a73e023a03cf39a3:85
        <anonymous> http://localhost:8080/app.js:114054:66
        __webpack_require__ bootstrap e5d4a73e023a03cf39a3:659
        fn bootstrap e5d4a73e023a03cf39a3:85
        <anonymous> index.js:1
        __webpack_require__ bootstrap e5d4a73e023a03cf39a3:659
        fn bootstrap e5d4a73e023a03cf39a3:85
        <anonymous> http://localhost:8080/app.js:105349:70
        __webpack_require__ bootstrap e5d4a73e023a03cf39a3:659
        fn bootstrap e5d4a73e023a03cf39a3:85
        <anonymous> http://localhost:8080/app.js:222812:18
        __webpack_require__ bootstrap e5d4a73e023a03cf39a3:659
        <anonymous> bootstrap e5d4a73e023a03cf39a3:708
        <anonymous> http://localhost:8080/app.js:1:11

