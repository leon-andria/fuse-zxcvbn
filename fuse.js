const { FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin, QuantumPlugin, Sparky } = require("fuse-box");

fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    targer: "browser",
    plugins: [
        WebIndexPlugin(),
        QuantumPlugin({                 
        //     containedAPI: false,            
        //     extendServerImport: true       
        })
    ]
});

fuse.dev();

const bundle = fuse
        .bundle("bundle")
        .splitConfig({
            browser: "/",
            dest: "/"
        })
        .watch()        
        .instructions("> index.ts");

fuse.run();
