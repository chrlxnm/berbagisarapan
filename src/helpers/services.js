import * as XLSX from 'xlsx'


export const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload()
}

export const hitService = (
    url,
    payload,
    method
) => {
    
}

export const downloadExcelData = (data,fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "rekapdata_"+fileName+".xlsx");

}