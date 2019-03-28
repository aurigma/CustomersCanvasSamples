// A helper function to download the URL
// https://stackoverflow.com/a/49917066/4173445
function download(url) {
    let link = document.createElement("a");
    link.style = "position:absolute; top:-99999999; left:-9999999; visibility:hidden";
    link.download = 'printfile.pdf';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
