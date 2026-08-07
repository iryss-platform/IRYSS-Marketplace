export const useRouter = () => ({
  push: (url: string) => console.log('navigate:', url),
  replace: (url: string) => console.log('replace:', url),
  back: () => console.log('back'),
  forward: () => console.log('forward'),
  refresh: () => console.log('refresh'),
  prefetch: () => Promise.resolve(),
})
export const usePathname = () => '/'
export const useSearchParams = () => new URLSearchParams()
export const useParams = () => ({ locale: 'en' })
export const redirect = (url: string) => console.log('redirect:', url)
export const notFound = () => console.log('notFound')
