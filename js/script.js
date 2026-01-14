const savePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error('Error:', error));
}

const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error('Error:', error));
}

let students = [];

const saveStudent = () => {
    let myName = document.getElementById('name').value;
    console.log(typeof name);

    let age = parseInt(document.getElementById('age').value);
    
    //jd object
    let janarthan = {
        name : myName,
        age : age,
        address : "Puttalam",
        favFood : "Rice",
        isSmoker : false
    }

    students.push(janarthan);
}