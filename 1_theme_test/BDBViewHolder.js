/**
 * data holder class
 */
class BDBViewModel {

    constructor(list , sort , callback){
        this.itemList = list;
        this.sort = sort;
        this.callback = callback;
    }

    /**
     * UI update
     * @param {*} list 
     */
    reload(list){
        if (list){
            this.itemList = list;
            if (this.callback){
                this.callback(this.itemList);
            }
        } else {
            this.itemList = null;
            if (this.callback){
                this.callback(null);
            }
        }
    }

    insert(item) {
        this.reload();
    }

    update(item) {
        this.reload();
    }

    remove(item) {
        this.reload();
    }

    removeAll() {
        this.reload();
    }

    sort(sort){
        this.sort = sort;
        this.reload();
    }
}


class BDBViewModelCallback {

}
