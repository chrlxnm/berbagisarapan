export const dummy = () => {
    const data = [];

    for (let i = 0; i < 57; i++) {
    data.push({
        key: i,
        noWA: `08192693278${i}`,
        nama: i%2 === 0 ? `John Alfarizi ${i}` : `Irsyad Maulana ${i}`,
        tanggal: `1 Agustus 202${i}`,
        donasi: `email${i}@email.com`,
        program: i%3 === 0 ?'Sarapan' : 'Uang',
        url:'Mancing.com',
        namaBank:i%3 === 0 ? 'BCA' : i%2 === 0? 'Mandiri': 'BRI',
        admin:i%3 === 0 ? 'Paidi' : i%2 === 0? 'Sukemi': 'Parjo',
      });
    }
    
    return data;
}