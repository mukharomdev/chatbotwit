// import {minify} from 'terser'
const {minify} = require("terser")

async function Minify(){
  var code = {
    "dist/server.js": "function add(first, second) { return first + second; }",
    "dist/index.js": "console.log(add(1 + 2, 3 + 4));"
};
var options = {
    toplevel: true,
    compress: {
        global_defs: {
            "@console.log": "alert"
        },
        passes: 2
    },
    format: {
        preamble: "/* minified */"
    }
};
var result = await minify(code, options);
console.log(result.code);

}

Minify()
