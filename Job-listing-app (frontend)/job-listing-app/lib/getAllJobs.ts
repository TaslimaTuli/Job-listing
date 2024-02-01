export default async function getAllJobs() {
    const res = await fetch('http://127.0.0.1:8000/api/show')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}