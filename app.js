var requestDocs = function (query) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
    }
    let reqURL = 'https://readthedocs.org/api/v2/docsearch/?q=' + query + '&project=astropy&version=stable&language=en';
    xhr.open('GET', reqURL, true);
    xhr.send(null);
};

var requestTuts = function (query) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
    }
    let reqURL = 'https://readthedocs.org/api/v2/docsearch/?q=' + query + '&project=astropy-tutorials&version=stable&language=en';
    xhr.open('GET', reqURL, true);
    xhr.send(null);
}

document.getElementsByClassName('search')[0].addEventListener('submit', function (e) {
    e.preventDefault();
    let q = document.getElementById('searchbox').value;
    requestDocs(q);
})
