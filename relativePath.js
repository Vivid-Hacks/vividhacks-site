var path = require('path'), fs=require('fs');
String.prototype.replaceAll = function (find, replace){
    var regex = new RegExp(find,'g');
    return this.replace(regex, replace)
  }
console.log("searching for all .html files in the static-site directory...")

function fromDir(startPath,filter,callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};
fromDir('./static-site',/\.html$/,function(filename){
    console.log('-- found: ',filename);
    console.log("")
    fs.readFile(__dirname + "\\" +filename, "utf8", function (error, html) {
        console.log("Updating HTML for file "+filename+"...")
        if (error) {
          throw error;
        }
        html = html.replaceAll("\"/", "\"./");
        fs.writeFileSync(__dirname + "\\" +filename, html);
        console.log("Done updating HTML for file "+filename)
      });
});