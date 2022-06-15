class Diary {

    constructor(diary = []) {
        this.diary = diary;
    }
    getDiary() {
        return this.diary;
    }
    setDiary(diary) {
        this.diary = diary;
    }

    addEntry(entry) {
        console.log('Diary addEntry : ',this.getDiary());
       
        let updateDiary=this.getDiary();
    
        updateDiary.push(
            {
                text: entry

            });
       
        this.setDiary(updateDiary)
        console.log('updateDiary ',this.getDiary());
        return this.getDiary();

    }

    getEntries() {
        console.log('List of entries in Diary :');
        return this.diary;
    }
}
module.exports = Diary;



