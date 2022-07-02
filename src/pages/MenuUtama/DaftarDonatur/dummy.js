export const dummy = () => {
    const data = [];

    for (let i = 0; i < 57; i++) {
    data.push({
        key: i,
        panggilan: i%2 === 0 ? `John Sins ${i}` : `Carlos Fortes ${i}`,
        nama: i%2 === 0 ? `John Alfarizi ${i}` : `Irsyad Maulana ${i}`,
        noWA: `1234567890${i}`,
        email: `email${i}@email.com`,
        agama: i%3 === 0 ?'Konghucu' : 'Islam',
        hobi:'Mancing',
        kota:'Jakarta',
        alamat:`Jalan Wijaya No.${i}`,
        jumlah: i,
      });
    }
    
    return data;
}