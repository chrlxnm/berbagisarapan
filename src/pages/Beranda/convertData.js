function count(array) {
    const data = array.map((item) => {
        return item.noWA
    })
    const phoNumberDistinct =  [...new Set(data)]

    const out = Object.values(array.filter(obj => phoNumberDistinct.includes(obj.noWA))).reduce((c,obj) => {
        c[obj.noWA] = c[obj.noWA] || obj;
        if(obj.tanggal < c[obj.noWA].tanggal){
            c[obj.noWA].tanggal = obj.tanggal
        }
        return c;
    },{})

    let temp = []
    for (const key in out) {
        temp.push(out[key])
    }
    return temp.reduce((total, elem) => {
        let temp = elem.tanggal.split("-")
        let groupKey = temp[1] + "-" + temp[2];

        total[groupKey] ? total[groupKey] +=1: total[groupKey] = 1;
        // total[groupKey] += 1;
        return total
    }, {})
}

export function convertBarNewUser(data){

    const hitung = count(data)
    const label = Object.keys(hitung)
    return {
        labels:label,
        value:Object.values(hitung)
    }
}