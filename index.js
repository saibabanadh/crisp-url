class CrispUrl {
    constructor(url) {
        this.url = url;
        this.crisp = this.convert2Crispy(url);
    }
    convert2Crispy(longUrl) {
        // do process
        return 'crisp-url';
    }
}

module.exports = CrispUrl;