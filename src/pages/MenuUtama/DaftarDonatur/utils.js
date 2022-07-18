export const filterData = (data, params) => {
    let removeNullParam = Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null));
    const paramsKey = Object.keys(removeNullParam);
    
    if (paramsKey.length > 0){
    return data?.filter((item) => {
        return paramsKey.some(field => 
            field.toLowerCase()==='tanggalmulai'? 
            new Date(item['dateAdded']).getTime() >= new Date(removeNullParam[field]).getTime()
            :
            field.toLowerCase()==='tanggalberakhir'? 
            new Date(item['dateAdded']).getTime() <= new Date(removeNullParam[field]).getTime()
            :
            item[field].toString().toLowerCase().includes(removeNullParam[field].toString()))
    });
    } else {
        return data;
    }
}