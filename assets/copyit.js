
        function copyIt(ele) {
            var _copy = document.querySelector(ele).innerText
        
        var _copy_el = document.createElement('input')
        _copy_el.value = _copy
        _copy_el.id = "copy-this"
        document.body.appendChild(_copy_el)
        document.querySelector('#copy-this').select()
        document.execCommand('copy')
        document.body.removeChild(_copy_el)
        window.alert("The code has been copied")
    }
    