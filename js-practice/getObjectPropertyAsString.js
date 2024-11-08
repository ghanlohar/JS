const Emp = function(fname, lname, project) {
    this.fname = fname;
    this.lname = lname;
    this.project = project;
    
    this.getFullName = function () {
        return this.fname + "" + this.lname;
    }
}
let e = new Emp("ghan", "lohar", {id: "1", title: "STW", departments:["HR", "Finance"]});

const getObjectPropertyAsString = function(obj) {
    let res = "";
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            if(obj[key] instanceof Object) {
                res = res + getObjectPropertyAsString(obj[key])
            }
            else if (obj[key] instanceof Function) {}
            else {
                res = res + obj[key] + ", "
            }
        }
    }
    return res;
}

getObjectPropertyAsString(e);
