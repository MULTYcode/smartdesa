import { useEffect } from "react"

export default function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://embed.tawk.to/680b55f429a5a6191417a105/1ipm4fhkl/default"
    script.async = true
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")
    document.body.appendChild(script)
  }, [])

  return null
}
