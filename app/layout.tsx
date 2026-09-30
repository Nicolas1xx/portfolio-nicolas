import "./globals.css"; import type { Metadata } from "next";
export const metadata:Metadata={title:"Nicolas Ricardo | Desenvolvedor de Sistemas",description:"Portfólio profissional de Nicolas Ricardo — projetos, formação e certificações."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}