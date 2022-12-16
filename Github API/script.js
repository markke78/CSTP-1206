const baseURL = "https://api.github.com/repos/reactjs/reactjs.org/issues";
const issuecard = document.getElementById("cards");
const searchBar = document.getElementById("searchBar");
let dataInJSON = [];

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredIssue = dataInJSON.filter((issue) => {
        return (issue.user.login).toLowerCase().includes(searchString);

    });

    displayIssues(filteredIssue);

});

const getAllIssues = async () => {
    const data = await fetch(baseURL);
    dataInJSON = await data.json();
    displayIssues(dataInJSON);
}

const displayIssues = (issues) => {
    issuecard.innerHTML = "";
        for(let issue of issues){
        let firstLevel = document.createElement("div");
        firstLevel.className="col-md-3 mb-md-3 mb-3";
        issuecard.appendChild(firstLevel);    
    
        let second = document.createElement("div");
        second.className="card d-flex flex-column align-items-center justify-content-center";
        firstLevel.appendChild(second);    

        let cards = document.createElement("div");
        cards.className="img-container rounded-circle";
        let image = document.createElement("img");
        image.setAttribute(
            'src',
            issue.user.avatar_url,
        );
        image.setAttribute('alt', 'nature');
        image.className="rounded-circle";
        cards.appendChild(image);
        second.appendChild(cards);        

        let innerCard = document.createElement("div");
        innerCard.className = "h4";
        innerCard.textContent ="Username: " +  issue.user.login;
        second.appendChild(innerCard)

        let innerP = document.createElement("p");
        innerP.className = "designation text-muted text-uppercase";
        innerP.textContent = "Web Developer";
        second.appendChild(innerP)
    }  
}

getAllIssues();


