const Diary = require("../diary.js");

class SecretDiary extends Diary{

    constructor(diary, lock = true) {
        super(diary)
        this.lock = lock;
    }
    getLock() {
        return this.lock;
    }
    lockDiary(){
       this.lock = true;
    }
    unlock(){
       this.lock = false;
    }
    //override the parent addEntry method
    addEntry(entry) {
        const diaryStatus = this.getLock();
     
        if (!diaryStatus) {
            console.log(entry);
            const updateDiary = super.addEntry(entry);
            return updateDiary;
        } else {
            console.log('Entries is locked');
            return [];
        }
       
    }
    //override the parent getEntries method
    getEntries(){
        return super.getEntries();
    }
   
   
}
module.exports = SecretDiary;

const myDiary = new Diary;
const arr = myDiary.addEntry('firstly wakeup');

const mySecretDiary = new SecretDiary(arr);
console.log(mySecretDiary.addEntry('go to Bingo'));

mySecretDiary.unlock();
console.log(mySecretDiary.addEntry('Coding'));
mySecretDiary.lockDiary();
console.log(mySecretDiary.addEntry('Do the Laudry'));


