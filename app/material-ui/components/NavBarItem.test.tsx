import React from "react"
import { mount } from "enzyme"

import NavBarItem from "./NavBarItem"

describe("The NavBarItem component", () => {
  describe("when invoked with the required props", () => {
    it("should contain a Link component", () => {
      const myLabel = "My Menu Option"
      const myUrl = "/"
      const subject = mount(<NavBarItem url={myUrl} label={myLabel} />)
      expect(subject.find("Link")).toHaveLength(1)
    })
    it("should contain the supplied label", () => {
      const myLabel = "My Menu Option"
      const myUrl = "/"
      const subject = mount(<NavBarItem url={myUrl} label={myLabel} />)
      expect(subject.html()).toContain(myLabel)
    })
    it("should contain the supplied url", () => {
      const myLabel = "My Second Menu Option"
      const myUrl = "/"
      const subject = mount(<NavBarItem url={myUrl} label={myLabel} />)
      expect(subject.html()).toContain(`href="${myUrl}"`)
    })
  })
})
