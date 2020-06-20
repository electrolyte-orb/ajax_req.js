window.myResponse = []

function createRq(filename, customCode) {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            window.myResponse.push(xhr.responseText)

            if (customCode !== null) {
                var newFn = customCode
            }
            newFn()
        }

    }
    xhr.open('GET', filename, true)

    xhr.send()

    xhr.addEventListener('error', () => {

        console.warn("Something is wrong!");

    })
}
