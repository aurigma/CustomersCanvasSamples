# Introduction                                    

This is a set of code examples for [Customer's Canvas SDK](https://customerscanvas.com) and a system which automates generation of code examples. 


# Getting Started

## Using code examples

If you just want to take a look at code examples, open the **output** folder. All code examples are grouped to subfolders for each API. Just copy this folder to a webserver, modify the URLs to Customer's Canvas and other APIs if necessary and open them in a browser.

## Building code examples

If you want to modify these examples, batch replace the URL to Customer's Canvas or even add more samples, you need to build them. Also, you may find that exploring .pug templates instead of output HTML files is easier to understand, as you can see only Customer's Canvas related code without distracting to HTML markup and helper scripts. 

Use the following steps to build the project: 

1. Run `npm install`
2. Then run `npm start`
3. It will launch a built-in webserver. By default, it is available at http://localhost:3456. You can change it in **index.ts**.
4. The .pug templates of code examples are located in **samples** folder. You can edit them in your favorite code editor and save the result. The system detects file system changes and automatically rebuilds all templates. 
5. If you want to set your own URL to Customer's Canvas or other settings, modify **data/settings.json**.

All changes automatically force the system to rebuild code examples and publish them to the **output** folder.

# A couple of words about the code example generator

The code example generator is based on Pug template engine. The code in the **index.ts** uses iterates the **data/code.examples.json** file, for each entry generates a HTML in the **output** folder. Each sample (from the **samples** folder ) refer a template from the **layouts** folder. All layouts are based on a **master-page.pug** file. This way all code examples have a consistent look-and-feel. 

If for any reasons you would like to modify templates, use [Pug documentation](https://pugjs.org/api/getting-started.html) as a syntax reference. 

# See also

For better understanding how our code examples work, we recommend to check out Customer's Canvas APIs documentation.

- [Main Customer's Canvas docs](https://customerscanvas.com/docs/cc/)
- [UI Framework reference](https://customerscanvas.com/support/ui-framework/readme.md)
- [Dynamic Image API reference](https://customerscanvas.com/support/dynamic-image)