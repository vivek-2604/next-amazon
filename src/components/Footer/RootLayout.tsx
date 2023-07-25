import Headers from "../Headers/Headers"
import BottomHeader from "../Headers/BottomHeader"
import Footer from "./Footer"
import { ReactElement } from "react"

interface Props {
    children: ReactElement
}

function RootLayout({children}: Props) {
  return (
    <>
    <Headers />
    <BottomHeader/>
    {children}
    <Footer/>
    </>
  )
}

export default RootLayout