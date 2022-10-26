export async function Test() {
    const test = await fetch('https://weather.tsukumijima.net/api/forecast?city=400040')
    const res = await test.json()
    return (
        <div>
            {res?.title}
        </div>
    )
}