import React from "react"
import { mount } from "enzyme"

import NavBar from "./NavBar"

describe("The NavBar component", () => {
  it("should contain ONE <nav> element", () => {
    const subject = mount(<NavBar />)
    expect(subject.find("nav")).toHaveLength(1)
  })
  it("should contain AT LEAST ONE <a> element", () => {
    const subject = mount(<NavBar />)
    expect(subject.find("a").length).toBeGreaterThanOrEqual(1)
  })
  it("should have ONE link to the default page", () => {
    const subject = mount(<NavBar />)
    expect(subject.find("a[href='/']")).toHaveLength(1)
  })
})
