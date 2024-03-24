// extends event
export class Card {
    //constructor(dataObj, fRewrite) {
    constructor(dataObj) {
        this.data = dataObj;
        // this.fRewrite = fRewrite;

        // переделать другая структура
        //-this.templateItemsViews = ['Name', 'Surname', 'Street', 'Zip Code', 'City', 'Phone'];
        this.init(dataObj);
    }

    init(data) {

        this.setNameSurname(data);
        this.setFileName(data);
        //- let tmplView = this.templateItemsViews;
        //-this.setView(tmplView);
        this.setView(data);
    }

    setNameSurname(data) {
        const { name } = data;
        const names = name.split(' ');
        const firstName = names[names.length - 2];
        const lastName = names[names.length - 1];

        this.name = firstName;
        this.surname = lastName;
    }
    // setters
    setFileName(data) {
        const { id } = data;
        const name = this.getName();
        const surname = this.getSurname();
        const fileName = `${id}-${name}-${surname}.txt`;
        this.fileName = fileName;
    }

    setView___(templateItems) {
        let template = '';
        templateItems.forEach(item => {
            template += `${item} : ${this.data[item]}\n`;
        });

        this.view = template;
    }

    setView() {
        const { name, address, phone } = this.data;
        const { street, zipcode, city } = address;

        // distruckt name soname
        const names = name.split(' ');
        const lastName = names[names.length - 1];
        const firstName = names[names.length - 2];
        let template = '';
        template += `Name : ${firstName}\n`;
        template += `Surname : ${lastName}\n`;
        template += `Street : ${street}\n`;
        template += `ZipCode : ${zipcode}\n`;
        template += `City : ${city}\n`;
        template += `Phone : ${phone}`;


        this.view = template;
    }

    // getters
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getFileName() {
        return this.fileName;
    }


    getView() {
        return this.view;
    }

}