document.getElementById('search-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the search term from the input field
    var searchTerm = document.getElementById('search-input').value;

    // Convert the search term to its plural form
    if (!searchTerm.endsWith('s')) {
        searchTerm = searchTerm + 's';
    }

    // Define an array of filenames for your JSON files
    var jsonFiles = ['tents', 'backpacks', 'sleeping-bags'];

    // Use Promise.all to fetch all JSON files at once
    Promise.all(jsonFiles.map(file => 
        fetch(`/json/${file}.json`)
            .then(response => response.json())
    ))
    .then(results => {
        // results is an array of the parsed JSON from each file
        // Flatten the array to make it easier to search
        var allProducts = [].concat(...results);

        // Filter the products based on the search term
        var filteredProducts = allProducts.filter(product => 
            product.category.toLowerCase() === searchTerm.toLowerCase()
        );

        // Now, do something with the filtered products
        console.log(filteredProducts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
