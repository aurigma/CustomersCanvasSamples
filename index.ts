import * as allSamples from "./data/code.examples.json";
import * as settings from "./data/settings.json";
import * as pug from "pug";
import * as beauty from "js-beautify";
import * as fs from "fs-extra";
import * as www from "serve-static";
import * as http from "http";
import * as done from "finalhandler";

const outputDir = "./output";

(async () => {
    // Clear / Create output folder
    await fs.ensureDir(outputDir);
    await fs.remove(outputDir);
    await fs.ensureDir(outputDir);

    // Copy standard CSS/images
    await fs.copy("assets", `${outputDir}/assets`);
    console.log("Copied assets folder");

    // Process each sample and save it to the output folder
    await Promise.all(allSamples.map( (sampleGroup) => {
        Promise.all(sampleGroup.samples.map(async (sample) => {
            console.log(`Processing ${sample.title}`);
            const compilation = pug.compileFile(sample.template);
            const html = beauty.html(compilation({...sample, settings}));
            try {
                let result = await fs.outputFile(`${outputDir}/${sample.output}`,html);
                console.log(`File ${sample.output} created`);
                return result;
            } catch( err ) {
                console.error(err);
                throw err;
            }
        }))
    }));   

    const indexFile = pug.compileFile('layouts/index-page.pug');
    try {
        await fs.outputFile(`${outputDir}/index.html`, beauty.html(indexFile({groups:allSamples})));
        console.log(`Index file created`);
    } catch ( err ) {
        console.error(err);
    }

    http
        .createServer((req: any,res: any)=>www(outputDir)(req,res,done(req,res)))
        .listen(3456)

})();



