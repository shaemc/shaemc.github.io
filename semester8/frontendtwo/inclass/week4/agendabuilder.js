export default class AgendaBuilder {
    constructor(dataPath){
        this.dataPath = dataPath;
        this.data = {};
        this.mainElement = document.querySelector('main');
    }
    async init(){
        await this.getData();
        console.log(this.data);
        this.renderTracks(this.data.tracks);
    }
    async getData(){
        try {
        const response =  await fetch(this.dataPath);
            if (response.ok){
                this.data = await response.json();
            } 
            else {
                throw new Error('Server not found');
                console.log('after throw');
            } 
        }
        catch (err){
            console.log(err);
        }
        
        // .then(response => response.json());
    }

    renderTracks(tracks){
        const section = document.createElement('section');
        section.innerHTML = "Tracks: ";
        const html = tracks.map(tracks => `<div class="track track${tracks.trackNum}"> ${tracks.name}</div>`
        );
        section.innerHTML += html.join('');
        this.mainElement.appendChild(section);
    }

    renderCourses(courses){}
}