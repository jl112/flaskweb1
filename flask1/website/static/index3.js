function deleteClinical(profileid) {
    fetch('/delete-field3', {
    method: 'POST',
    body: JSON.stringify({ profileid: profileid})
    }).then((_res) => {
        window.location.href = "/clinical-education";
    });
}