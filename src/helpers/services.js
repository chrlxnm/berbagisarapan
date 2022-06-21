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