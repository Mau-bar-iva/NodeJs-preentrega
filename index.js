let [, , method, endpoint, title, price, category] = process.argv;
endpoint = `https://fakestoreapi.com/${endpoint}`;
const partes = endpoint.split('/');
const recurso = partes[0];
const id = partes[1];

if (method.toLowerCase() === 'get') {
    try {
        if (id) {
            fetch(`${endpoint}/${id}`)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error fetching data:', error));
        } else {
            fetch(endpoint)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    } catch (error) {
        console.error('Error:', error);
    }
} else if (method.toLowerCase() === 'post') {
    try {
        if (!title || !price || !category) {
            console.error(" Faltan datos: title, price o category");
            process.exit(1);
        }

        const nuevoProducto = {
            title,
            price: Number(price),
            category
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        })
            .then(response => response.json())
            .then(data => console.log("Producto creado:", data))
            .catch(error => console.error('Error posting data:', error));

    } catch (error) {
        console.error('Error:', error);
    }
} else if (method.toLowerCase() === 'delete') {
    try {
        if (id) {
            fetch(`${endpoint}/${id}`)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error fetching data:', error));
        } else {
            fetch(endpoint)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    } catch (error) {
        console.error('Error:', error);
    }
}