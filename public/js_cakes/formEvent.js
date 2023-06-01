export const decalreFormEvent = (_doApi) => {
    let id_form = document.querySelector("#id_form_cake");
    id_form.addEventListener("submit", (e) => {
        e.preventDefault();

        let dataBody = {
            name: document.querySelector("#id_name").value,
            capital: document.querySelector("#id_cals").value,
            pop: document.querySelector("#id_price").value
        }

        addNewCake(dataBody, _doApi);
    })
}


const addNewCake = async (_bodyData, _doApi) => {
    let myUrl = "http://localhost:3002/cakes"
    try {
        let resp = await axios({
            url: myUrl,
            method: "POST",
            data: JSON.stringify(_bodyData),
            headers: {
                'content-type': "application/json"
            }
        })
        if (resp.data._id) {
            alert("Cake added");
            _doApi();
        }
        else {
            alert("there problem , try again")
        }
    }
    catch (err) {
        console.log(err);
        alert("There problem, come back later")
    }
}