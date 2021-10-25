import DataService from "./DataService.js";

const postService = new DataService("posts");

async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(this);
    const jsonData = Object.fromEntries(data.entries());
    jsonData.tags = data.getAll("tags");
    const result = await postService.postData(jsonData);
    if (result.id) {
        this.reset();
    }
}


document.querySelector("#postform").addEventListener("submit", handleSubmit);
