function getMovie() {
        var title = document.getElementById("getTitle").value;
        var type = document.querySelector("input[name='type']:checked").value;
        const url = "http://www.omdbapi.com/?apikey=8317fb74&type="+ type + "&s=" + title;
    fetch(url,{
        method: 'get'
    })
        .then( response => response.json())
        .then( data => {
                console.log(data)
        })
    }
