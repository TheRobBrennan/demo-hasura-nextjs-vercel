import React from "react"
import { mount } from "enzyme"

import Header from "./Header"
import { TRB_NAME } from "../../config/constants"

describe("The Header component", () => {
  it(`should contain "${TRB_NAME}"`, () => {
    const subject = mount(<Header />)
    expect(subject.html()).toContain(TRB_NAME)
  })
  it("should contain ONE NavBar component", () => {
    const subject = mount(<Header />)
    expect(subject.find("NavBar")).toHaveLength(1)
  })
})
