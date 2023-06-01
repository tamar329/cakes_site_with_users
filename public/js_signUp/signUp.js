//login js file
const init = () => {
    declareEvents();
}

const declareEvents = () => {
    let id_form = document.querySelector("#id_form");
    id_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let bodyObj = {
            name: document.querySelector("#id_name").value,
            email: document.querySelector("#id_email").value,
            password: document.querySelector("#id_password").value,
        }
        console.log(bodyObj);

        let url = "http://localhost:3002/users";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.onload("cakes.html")
        // .then(resp => resp.json())
        // .then(data => {
        //     console.log(data)
        // if (data.token) {
        // }
        // else {
        //     alert("User or password worng")
        // }
        // })
    })

}

init();