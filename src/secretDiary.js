class SecretDiary {

    constructor(diary = [], lock = true) {
        this.diary = diary;
        this.lock = lock;
    }
    getDiary() {
        return this.diary;
    }
    setDiary(diary) {
        this.diary = diary;
    }
    getLock() {
        return this.lock;
    }
    setLock(lock) {
        this.lock = lock;
    }
    addEntry(entry) {
        const diaryStatus = this.getLock();
        let updateDiary = this.getDiary();
        if (!diaryStatus) {
            updateDiary.push(
                {
                    text:entry

                });
            this.setDiary(updateDiary)
            return this.getDiary();
        } else {
            console.log('Entries is locked');
            return this.getDiary();
        }
    }
    lockDiary(){
        this.setLock(true);
    }
    unlock(){
        this.setLock(false);
    }
    
    getEntries(){
        console.log('List of entries in secretDiary :');
        return this.diary;
    }
}
module.exports = SecretDiary;

const mySecretDiary = new SecretDiary;
console.log(mySecretDiary.addEntry('go to Bingo'));
mySecretDiary.unlock();
console.log(mySecretDiary.addEntry('Coding'));

mySecretDiary.lockDiary();
console.log(mySecretDiary.addEntry('Do the Laudry'));


