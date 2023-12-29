import { Manrope, Poppins, Inter, Nunito_Sans } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})
const inter = Inter({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['devanagari', 'latin', 'latin-ext'],
})
const nunito = Nunito_Sans({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
})

const Fonts = {
  poppins: poppins.className,
  manrope: manrope.className,
  inter: inter.className,
  nunito: nunito.className,
}

export default Fonts
