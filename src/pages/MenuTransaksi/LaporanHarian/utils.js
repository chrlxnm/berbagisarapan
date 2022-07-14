export const filterData = (data, params) => {console.log('testtt',Object.keys(params))
    let removeNullParam = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
    const paramsKey = Object.keys(removeNullParam);
    
    console.log('test', params, removeNullParam, paramsKey)
    if (paramsKey.length > 0){
    return data?.filter((item) => {
        return paramsKey.some(field => 
            field.toLowerCase()==='tanggalmulai'? 
            new Date(item['tanggal']).getTime() >= new Date(removeNullParam[field]).getTime()
            :
            field.toLowerCase()==='tanggalberakhir'? 
            new Date(item['tanggal']).getTime() <= new Date(removeNullParam[field]).getTime()
            :
            item[field].toString().toLowerCase().includes(removeNullParam[field].toString()))
    });
    } else {
        return data;
    }
}