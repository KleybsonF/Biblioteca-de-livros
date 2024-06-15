import { metadata } from "@/app/layout"

export const Footer = () => {
  return (
    <div className="container flex items-center justify-between mt-7">
      <div className="logo font-bold">{metadata.description}</div>
      <div className="text text-xs">All rights reserved.</div>
    </div>
  )
}
