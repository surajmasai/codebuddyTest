// level {1/2/3}

// level1;

async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

getData()