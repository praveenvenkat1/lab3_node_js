class Client {
    constructor(username, password, num_client, society, contact, addres, zipcode, city, phone, fax, max_outstanding) {
        this.username = username;
        this.password = password;
        this.num_client = num_client;
        this.society = society;
        this.contact = contact;
        this.addres = addres;
        this.zipcode = zipcode;
        this.city = city;
        this.phone = phone;
        this.fax = fax;
        this.max_outstanding = max_outstanding;
    }
}

class Product {
    constructor(reference, category, name, supplier, price, vat, stock, critical_stock) {
        this.reference = reference;
        this.category = category;
        this.name = name;
        this.supplier = supplier;
        this.price = price;
        this.vat = vat;
        this.stock = stock;
        this.critical_stock = critical_stock;
    }
}
module.exports = {
    Client,
    Product
}