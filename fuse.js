const { FuseBox, CSSPlugin, SassPlugin, WebIndexPlugin, QuantumPlugin, Sparky } = require("fuse-box");

fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    experimentalFeatures: true,
    cache: false,
    plugins: [
        WebIndexPlugin(),
        // QuantumPlugin({     
        //     target: "universal",
        //     bakeApiIntoBundle: "bundle",            
        //     extendServerImport: true       
        // })
    ]
});

fuse.dev({
    port: 3000
});

const bundle = fuse
        .bundle("bundle")
        .split("lib/zxcvbn.js", "pwd > lib/zxcvbn.ts")
        .instructions("> [index.ts] + lib/zxcvbn.ts");

fuse.run();