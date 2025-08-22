const data = ['cat', 'dog', 'rabbit','tiger'];

class repoPet{
    
    getAll(){
return [...data];
    }

    getOne(index){
return data[index] ?? null;
    }

    delete(index){
return data.splice(index, 1)[0];
    }

    add(name){
    data.push(name);
    return name;
    }

    update(index, name){
    if(index < 0 || index >= data.length) return null;
    data[index] = name;
    return name;
    }
}

module.exports = repoPet;