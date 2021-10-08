/* 
Build agenda data
Fetch agenda data
Render track info
Convert times to local timezone
Render out classes
Style

*/
import AgendaBuilder from "./agendabuilder.js";

const agenda = new AgendaBuilder('agenda.json');
agenda.init();
const today = new Date();
console.dir(today.getTimezoneOffset);

