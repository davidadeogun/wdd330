const jsonFiles = ['backpacks.json', 'sleeping-bags.json', 'tents.json'];
const basePath = '../public/json';

// event listener for the form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the page from refreshing

    const searchTerm = document.getElementById('search-input').value;

    // empty product list
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    jsonFiles.forEach(function(jsonFile) {
        fetch(`${basePath}/${jsonFile}`)
            .then(response => response.json())
            .then(data => {
                // assuming each data object in JSON file has a 'name' property
                const filteredData = data.filter(product => product.name.includes(searchTerm));

                filteredData.forEach(product => {
                    const li = document.createElement('li');
                    li.textContent = product.name;
                    productList.appendChild(li);
                });
            })
            .catch(err => console.error(err));
    });
});
