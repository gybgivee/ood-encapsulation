
const SecretDiary = require("../src/secretDiary.js");


describe("Diary Test", () => {

    let mySecretDiary;

    beforeEach(() => {
        mySecretDiary = new SecretDiary();
    });
    
    it("Try add Entries at initial state", () => {
        const expected = [];
        const result = mySecretDiary.addEntry('Go to shopping');
        expect(result).toEqual(expected);

    });
    it("add Entries after unlock", () => {
        const expected = [{text: 'Coding'}];
        mySecretDiary.unlock();
        const result = mySecretDiary.addEntry('Coding');
        expect(result).toEqual(expected);

    });
    it("add Entries after lock", () => {
        const expected = [];
        mySecretDiary.lockDiary();
        const result = mySecretDiary.addEntry('Go to shopping');
        expect(result).toEqual(expected);

    });
    it("Get Entries", () => {
        const expected = { text: 'Go to shopping' };
        mySecretDiary.unlock();
        mySecretDiary.addEntry('Go to shopping');
        const result = mySecretDiary.getEntries();
        expect(result[0]).toEqual(expected);

    });

});
