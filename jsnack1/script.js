console.log('js ok');


//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitedGuests = ['carraway', 'buchanan', 'wilson', 'baker', 'wolfsheim'];
let isInvited = 'You are not in the list, i\'m sorry';

let guest = prompt('What\'s your name?');
for (let i = 0; i < invitedGuests.length; i++){
    
    if (guest.trim().toLowerCase() === invitedGuests[i]) {
       isInvited = (`Welcome ${guest.trim()}, you are on the list.`);
    }
}
    
    


console.log(isInvited);