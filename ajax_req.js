window.myResponse = []

function createRq(filename, outputEl, __arr_index, __isHTML, customCode) {
    
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (__isHTML === "json") {
                var resp = JSON.parse(xhr.responseText)
            }
            else {
                var resp = xhr.responseText
            }
            var _theRes = {
                source: filename,
                txt: resp
            }
            myResponse[__arr_index] = _theRes

            if (outputEl !== undefined) {
                var _output = document.querySelector(outputEl)

                if (__isHTML == 'yes') {
                    _output.innerHTML = resp
                }
                if (__isHTML == 'no') {
                    _output.innerText = resp
                }
            }

            if (customCode !== undefined) {
                var newFn = customCode
                newFn()
            }

        }

    }
    xhr.open('GET', filename, true)

    xhr.send()

    xhr.addEventListener('error', () => {
        
        console.warn("Something is wrong!");

    })
}