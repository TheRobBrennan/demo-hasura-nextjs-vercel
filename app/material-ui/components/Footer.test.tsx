import React from "react"
import { mount } from "enzyme"

import Footer from "./Footer"
import { TRB_NAME } from "../../config/constants"

describe("The Footer component", () => {
  it(`should contain "${TRB_NAME}"`, () => {
    const subject = mount(<Footer />)
    expect(subject.html()).toContain(TRB_NAME)
  })
  it(`should contain a copyright notice`, () => {
    const subject = mount(<Footer />)
    expect(subject.html()).toContain("Copyright ©")
  })
  it(`should contain release details`, () => {
    const subject = mount(<Footer />)
    expect(subject.html()).toContain("Release v")
  })
  it(`should contain a link to the terms and conditions`, () => {
    const subject = mount(<Footer />)
    expect(subject.html()).toContain("Terms and conditions")
  })
  it(`should contain a link to the privacy policy`, () => {
    const subject = mount(<Footer />)
    expect(subject.html()).toContain("Privacy policy")
  })
})
