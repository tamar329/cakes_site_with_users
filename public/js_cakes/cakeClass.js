export default class CakeClass {
    constructor(_parent, _item, _doApi) {
        this.parent = _parent;
        this.name = _item.name;
        this.cals = _item.cals;
        this.price = _item.price;
        this.id = _item._id;
        this.doApi = _doApi;
    }

    render() {
        let tr = document.createElement("tr");
        document.querySelector(this.parent).append(tr);

        tr.innerHTML = `
            <td>${this.name}</td>
            <td>${this.cals.toLocaleString()}</td>
            <td>${this.price.toLocaleString()}</td>
            <td><button class="badge bg-danger del-btn">Del</button></td>
            <td><button class="badge bg-danger edit-btn">Edit</button></td>
        `

        let delBtn = tr.querySelector(".del-btn");
        delBtn.addEventListener("click", () => {
            confirm("Are you sure you want to delete?") && this.delCake()
        })

        let editBtn = tr.querySelector(".edit-btn");
        editBtn.addEventListener("click", () => {
            confirm("Are you sure you want to edit?") && this.editCake()
        })
    }

    async delCake() {
        let url = "http://localhost:3002/cakes/" + this.id;
        try {

            let resp = await axios({
                url,
                method: "DELETE",
                headers: {
                    'content-type': "application/json"
                }
            })
            if (resp.data.deletedCount == 1) {
                // alert("Country deleted")
                this.doApi();
            }
            else {
                alert("There problem")
            }
        }
        catch (err) {
            console.log(err);
            alert("There problem, come back later")
        }
    }

    async editCake() {

    }
}