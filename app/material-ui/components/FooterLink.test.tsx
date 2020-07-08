import React from "react"
import { mount } from "enzyme"

import FooterLink from "./FooterLink"

describe("The FooterLink component", () => {
  describe("when invoked with the required props", () => {
    it("should contain a Link component", () => {
      const myLabel = "Footer Link 1"
      const myUrl = "/link1"
      const subject = mount(<FooterLink url={myUrl} label={myLabel} />)
      expect(subject.find("Link")).toHaveLength(1)
    })
    it("should contain the supplied label", () => {
      const myLabel = "Footer Link 1"
      const myUrl = "/link1"
      const subject = mount(<FooterLink url={myUrl} label={myLabel} />)
      expect(subject.html()).toContain(myLabel)
    })
    it("should contain the supplied url", () => {
      const myLabel = "Footer Link 2"
      const myUrl = "/link2"
      const subject = mount(<FooterLink url={myUrl} label={myLabel} />)
      expect(subject.html()).toContain(`href="${myUrl}"`)
    })
  })
})
