import React from "react"
import { mount } from "enzyme"
import HelloPage from "../pages/hello"

describe("The 'Hello from TypeScript' page", () => {
  it(`should contain placeholder text`, () => {
    const subject = mount(<HelloPage />)
    expect(subject.html()).toContain("Hello")
  })
})
