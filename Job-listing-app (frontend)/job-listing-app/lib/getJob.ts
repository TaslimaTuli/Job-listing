export default async function getJob(userId: string) {
    const res = await fetch(`http://127.0.0.1:8000/api/show?userId=${userId}`)

    if (!res.ok) throw new Error('failed to fetch')

    return res.json()
}