// *___export_fetcher_function
export const fetcher = (url) => axios.get(url).then((res) => res.data)

// reload page
export const reloadPage = () => window.location.reload()
