const storage = window.localStorage //define local storage

function storeData(data) { //gets data from zoom function
    storage.setItem('zoom', JSON.stringify(data))
}

function getStorage() {
    let data = JSON.parse(storage.getItem('zoom'));
    if (data) { //checks if there is data, error prevention
        let css = 'translate(' + data.x + ',' + data.y + ') scale(' + data.k + ')';
        return css //returns correct css property
    }
}

export {
    storeData,
    getStorage
}