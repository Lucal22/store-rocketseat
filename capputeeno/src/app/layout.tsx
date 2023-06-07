import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'

export const metadata = {
  default: 'Capputeeno',
  description: 'Experimente o gosto de comprar com qualidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
 <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
     </html>

  )
}