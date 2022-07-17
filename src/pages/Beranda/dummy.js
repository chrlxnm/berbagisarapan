import moment from "moment";
export const dummy = () => {
    const data = [];
    function randomNumberInRange(min, max) {
        return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
      }
    for (let i = 1; i < 13; i++) {
     for(let j = 0; j < 15; j++){ 
        if(i === 1){
                const date = moment(new Date(`01-${i}-2022`)).format("DD-MM-YYYY")
                data.push({
                    key: i+""+j,
                    noWA: `08192693278${randomNumberInRange(1,10*(i))}1`,
                    nama: i%2 === 0 ? `John Alfarizi ${i}` : `Irsyad Maulana ${i}`,
                    tanggal: date,
                    donasi: `email${i}@email.com`,
                    program: i%3 === 0 ?'Sarapan' : 'Uang',
                    url:'Mancing.com',
                    namaBank:i%3 === 0 ? 'BCA' : i%2 === 0? 'Mandiri': 'BRI',
                    admin:i%3 === 0 ? 'Paidi' : i%2 === 0? 'Sukemi': 'Parjo',
                });
            }
        else {
            console.log(i)
            const date = i-1 < 9 ? moment(new Date(`2022-0${i}-01`)).format("DD-MM-YYYY") : moment(new Date(`2022-${i}-1`)).format("DD-MM-YYYY")
            data.push({
                key: i+""+j,
                noWA: `08192693278${randomNumberInRange((i-1)*10,10*(i))}1`,
                nama: i%2 === 0 ? `John Alfarizi ${i}` : `Irsyad Maulana ${i}`,
                tanggal: date,
                donasi: `email${i}@email.com`,
                program: i%3 === 0 ?'Sarapan' : 'Uang',
                url:'Mancing.com',
                namaBank:i%3 === 0 ? 'BCA' : i%2 === 0? 'Mandiri': 'BRI',
                admin:i%3 === 0 ? 'Paidi' : i%2 === 0? 'Sukemi': 'Parjo',
            });
        }
        }
    }
    return data;
}   
