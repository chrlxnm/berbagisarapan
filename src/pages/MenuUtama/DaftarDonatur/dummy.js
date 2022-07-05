export const dummy = () => {
    const data = [];

    for (let i = 0; i < 57; i++) {
    data.push({
      key: i,
      panggilan: i%3===0?'mamang':i%2===0?'ayank':'bebeb',
      nama: i%7===0?'Bu Kemi':i%3===0?'Pendik':'Parjo',
      noWA: `089153637632${i}`,
      email: `email@123.com${i}`,
      agama:'Islam',
      hobi:'Golf',
      kota:'Bekasi',
      alamat:'Jalan mawar',
      berapaKali:i%5===0?'3':i%3===0?'2':'4',
      totalDonasi:10000,
      dateAdded:'07-12-22',
      programFavorit:'SCTV',
      kategori:'Lorem',
      hasilSurvey:'Lorem',
      keterangan:'test',
      admin:'Yes',
      lastUpdate:'08-12-22'
      });
    }
    
    return data;
}