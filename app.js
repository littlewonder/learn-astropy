var requestDocs = function (q) {
    let url = 'https://learn-astropy.herokuapp.com/' + q;
    console.log(url);
    fetch(url)
        .then(function (response) {
            document.getElementById('loader').style.display = 'none';
            console.log('SUCCESS');
            return response.json();
        })
        .then(function (json) {
            let totalCount = (json.results.hits['total']);
            let bingo = document.getElementById('bingo');
            bingo.innerHTML = "Found " + totalCount + " page(s) matching the search query";
            for (i = 0; i < 10; i++) {
                let projectName = (json.results.hits.hits[i].fields['project'][0]);
                let cardTitle = (json.results.hits.hits[i].fields['title'][0]);
                let cardContent = (json.results.hits.hits[i].highlight.content[0]);

                let temp = document.createElement("li");
                temp.className = 'search-card'

                let title = document.createElement("a");
                title.innerHTML = cardTitle;
                title.href = (json.results.hits.hits[i].fields['link']) + '.html';

                let body = document.createElement("p");
                body.innerHTML = cardContent;

                let about = document.createElement("label");
                about.innerHTML = 'Documentation • In Project ' + projectName;

                temp.appendChild(title);
                temp.appendChild(about);
                temp.appendChild(body);
                document.getElementById('resultsobtained').appendChild(temp);
            }
        })
};

window.onload = function () {
    document.getElementsByClassName('search')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        let q = document.getElementById('searchbox').value;
        window.location.href = 'search.html?q=' + q;
        document.getElementById('searchbox').value = q;
    })
    if (window.location.pathname === '/learn-astropy/search.html') {
        let query = window.location.search;
        console.log(query);
        requestDocs(query);
    }
}
