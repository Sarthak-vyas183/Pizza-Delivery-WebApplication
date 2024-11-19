function welcome(name : string) {
    console.log(`welcome ${name}`);
    const user = {
        name : 'vyas'
    } 
    const fname = user['name'];
    return name + fname;
}

welcome("sarthak");
