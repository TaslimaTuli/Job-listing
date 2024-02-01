export default async function getUser(userId: string) {
    const res = await fetch(`http://127.0.0.1:8000/api/show/${userId}`)

    if (!res.ok) throw new Error('failed to fetch user')

    return res.json()
}