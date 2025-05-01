// shared/lib/axios.ts
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // kalau kamu butuh cookie/auth di cross-origin
})

// OPTIONAL: Interceptor request → misalnya inject token
api.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    console.log('ini token nya===============>', token)
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`
      config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGFmNzVmNmNiM2E5Y2Q3NzI3ZWM5NjQyNzdlOGE1NTllMjY1NzJmYTM0MTM3ZDdmMWM4Y2M1NGM5M2Q0NGMxNWExOWM0NGFhYWMwNjQyOWIiLCJpYXQiOjE3NDU5ODI5OTQuNTI4MDE3LCJuYmYiOjE3NDU5ODI5OTQuNTI4MDE5LCJleHAiOjE3Nzc1MTg5OTQuNTI0NzYzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.TTisBZT4WK0VK0291dBExars7MP2jgK6DpXWXI7I5WDC1VIGseIsxN_LF6oQ2KcsRTjSIHjIRYGtqKIGoBcN6IeL9DKgWCAM5_NqFKNC65kLqcH6JsbNkD8FB_RZBj1XWVx86v6G0-IXcU7dEDzKMT_AsoXf37Tp8kod5MSDVEZKXLWwavNmh_8OUFhIOugqPKMvNMiXrCTrbQZjkgAfC2rF6eO2FqjSRzWq6zG0MT99slMhsPRLnza7Fd8ZzahvXOTSoEYUNSC3YCHBelH6ArGLCjylAEAhXkQ9WBTtLhP2QGOpA_Rqd9Q9Csww2fNkug_Y2vbKk2PWmmzPdGo7jsHcUcYM2T-BNIOKPeli34mIOaAVbZXHI_WOcrD3D4cw_TGzXN8Hm6KZmStE04KjNGVfbi6agqHIKrUWi7mRX7CFE-7TS6-u1-wRHsCBrtF5xm-X-cxGw16YCD_m_TVwd2pjXf8I3WfjsMJlZlR955AGNJfm2QAD5rfd6G_J4sgKn3jA9DO7bixfhsrsGdsYVJFME9eS7GY9REVZbfVZEWbM4ocvJHKqRK2SGNZFgLS75W3COZ1bxd5frcxW7KnDXxg2NLWrQzper3Fuc_u3HwMU-oqSp2QASe7C-snqkLMFyqORgqXT2uVwslVF4R8YrvE-fUNgH8qeYK2P1jg_gC8`
      config.timeout= 15000
    }
    return config
  },
  (error) => Promise.reject(error)
)

// OPTIONAL: Interceptor response → misalnya redirect jika 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // bisa redirect ke login misalnya
      console.warn('Unauthorized, redirect to login...')
    }
    return Promise.reject(error)
  }
)
