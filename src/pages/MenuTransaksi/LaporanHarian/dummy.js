export const dummy = () => {
    const data = [];

    for (let i = 0; i < 57; i++) {
    data.push({
        key: i,
        noWA: `1234567890${i}`,
        nama: i%2 === 0 ? `John Alfarizi ${i}` : `Irsyad Maulana ${i}`,
        laporan: `Laporan ke-${i}`,
        tanggal: `${i} Agustus 2022`,
        admin: i%3 === 0 ?'Suroso' : 'Paijo',
      });
    }
    
    return data;
}