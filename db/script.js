const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);

class InteractWithDb {
   
readDdJson(){
    return read("db/json"); 
}

    getnotesFromDatabase(){
    
        const db = this.readDdJson();

        let dbNotes = [].concat(JSON.parse(db))

        let jsonRet = [{"title":"Test Title","text":"Test text"}];
        let ret = [].concat(JSON.parse(jsonRet)) 

        return [];
        
    };
}



module.exports = new InteractWithDb();