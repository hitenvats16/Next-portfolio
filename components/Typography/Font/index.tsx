import { Manrope, Poppins, Inter, Nunito_Sans } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope'
})

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['devanagari', 'latin', 'latin-ext'],
  variable: '--font-poppins',
})

const nunito = Nunito_Sans({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
})

const Fonts = {
  poppins: poppins.variable,
  manrope: manrope.variable,
  inter: inter.variable,
  nunito: nunito.variable,
}

export default Fonts

export const FontToClassMap = Object.freeze({
  poppins: 'font-poppins',
  manrope: 'font-manrope',
  inter: 'font-inter',
  nunito: 'font-nunito',
})