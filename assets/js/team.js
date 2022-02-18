const sections = document.getElementsByClassName('team-profile');
for(let i=0; i<sections.length; i++) {
    let profiles = sections[i].children;
    //console.log(profiles)
    for(let j=0; j<profiles.length; j++) {
        let profile = profiles[j];
        profile.addEventListener('click', () => {
            location.href = profile.children[3].href;
        })
    }
}