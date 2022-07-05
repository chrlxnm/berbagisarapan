export const dummy = () => {
    const data = [];

    for (let i = 0; i < 57; i++) {
    data.push({
    key: i,
    name: i%7===0?'Bu Kemi':i%3===0?'Pendik':'Parjo',
    username: i%4===0?'Bu Kemi':i%3===0?'Pendik':'Parjo',
    email: `email${i}@email.com`,
    mobilePhone: `12345678901${i}`,
    sex:i%2===0?'Pria':'Wanita',
    division:'Staff',
    team:'Staff',
    class:'Staff',
    levelAdmin:'Staff',
    isActive:'Yes',
      });
    }
    
    return data;
}