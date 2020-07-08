import React from "react"
import { mount } from "enzyme"
import Layout from "./Layout"

describe("The Layout component", () => {
  it("should contain a MuiContainer-root", () => {
    const subject = mount(<Layout />)
    expect(subject.html()).toContain("MuiContainer-root")
  })
  it("should contain a MuiBox-root", () => {
    const subject = mount(<Layout />)
    expect(subject.html()).toContain("MuiBox-root")
  })
  // TODO: Reinstate once Bootstrap is removed
  //   it("should contain ONE Header component", () => {
  //     const subject = mount(<Layout />)
  //     expect(subject.find("Header")).toHaveLength(1)
  //   })
  it("should contain ONE Footer component", () => {
    const subject = mount(<Layout />)
    expect(subject.find("Footer")).toHaveLength(1)
  })

  describe("when invoked WITH children", () => {
    it(`should render a string as a child`, () => {
      const subject = mount(<Layout>This is just a string.</Layout>)
      expect(subject.html()).toContain("This is just a string.")
    })
    it(`should render a single JSX element as a child`, () => {
      const subject = mount(
        <Layout>
          <p>A single JSX element</p>
        </Layout>
      )
      expect(subject.html()).toContain("<p>A single JSX element</p>")
    })
    it(`should render multiple JSX elements as children`, () => {
      const subject = mount(
        <Layout>
          <p>A single JSX element</p>
          <p>A second JSX element</p>
          <ul>
            <li>One list item</li>
            <li>A second list item</li>
          </ul>
        </Layout>
      )
      expect(subject.html()).toContain("<p>A single JSX element</p>")
      expect(subject.html()).toContain("<p>A second JSX element</p>")
      expect(subject.html()).toContain("<ul>")
      expect(subject.html()).toContain("<li>One list item</li>")
      expect(subject.html()).toContain("<li>A second list item</li>")
      expect(subject.html()).toContain("</ul>")
    })
  })
})
