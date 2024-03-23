// extends event
export class Card {
    constructor(dataObj, fRewrite) {
        this.data = dataObj;
        this.fRewrite = fRewrite;

        // переделать другая структура
        this.templateItemsViews = ['Name', 'Surname', 'Street', 'Zip Code', 'City', 'Phone'];
        this.init();
    }

    init() {
        this.setFileName();
        let tmplView = this.templateItemsViews;
        this.setView(tmplView);
    }
    // setters
    setFileName() {
        let fileName = this.data['id'];
        fileName += this.data['name'];
        //  fileName += this.data['Surname'];
        fileName += '.txt';
        this.fileName = fileName;

    }

    setView(templateItems) {
        let template = '';
        templateItems.forEach(item => {
            template += `${item} : ${this.data[item]}\n`;
        });

        this.view = template;
    }

    // getters
    getFileName() {
        return this.fileName;
    }


    getView() {
        return this.view;
    }

}