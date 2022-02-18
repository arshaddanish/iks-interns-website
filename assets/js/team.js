const profiles = document.getElementsByClassName('team-profile');
for(let i=0; i<profiles.length; i++) {
    let profile = profiles[i];
    profile.addEventListener('click', ()=>{
        let linkedInUrl = profile.lastElementChild.children[3].href;
        location.href = linkedInUrl;
    })
}