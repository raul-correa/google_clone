const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter"){
        search();
    }
})

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input;
}