import { Suspense } from "react"

export async function Test1() {
    const test = await fetch('https://weather.tsukumijima.net/api/forecast?city=400040').then(response => {
        return response.json()
      })
      .then(r => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("settimeout finish")
            resolve({'title':'test'})
            return dispatch({ type: "FINISH" })
          }, 5000)
        })
      })
    const res = test
    return (
        <div>
            <Suspense fallback={<div>load</div>}>
                {res?.title}
            </Suspense>
        </div>
    )
}