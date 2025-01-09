var but = document.querySelector("#appointment");
var appoint = document.querySelector("#appoint");

but.addEventListener("click",()=>{
    window.location.href = 'doc_con.html';
});

appoint.addEventListener("click",()=>{
    window.location.href = 'doc_con.html';
})

// but.disabled = true; 
// appoint.disabled = true; 

document.querySelector('#signup-form').addEventListener('submit', (event) => {
    
});

const domain = 'meet.jit.si';
const options = {
    roomName: 'consult', 
    width: '100%',
    height: '500px',
    parentNode: document.querySelector('#jitsi-container'),
};

const api = new JitsiMeetExternalAPI(domain, options);

document.querySelector('#video-call').addEventListener('click', () => {
    const userEmail = document.querySelector('#email').value;

    const videoCallLink = `https://${domain}/${options.roomName}`;
    const emailBody = `Click this link to join the video call: ${videoCallLink}`;
    window.location.href = `mailto:${userEmail}?subject=Video Call Link&body=${encodeURIComponent(emailBody)}`;

    
    api.executeCommand('startCall');
});

