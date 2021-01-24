/*
 * @Author: hhhhhq
 * @Date: 2021-01-10 15:18:27
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-24 22:52:33
 * @Description: file content
 */

/**
 * @description: showMenu
 * @param {*} toggleId
 * @param {*} navId
 * @return {*}
 */
export const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu")
    })
  }
}

/**
 * @description: handle navLink click
 * @param {*} none
 * @return {*}
 */
export const linkAction = () => {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}

/**
 * @description: scrollActive
 * @param {*} sections
 * @return {*}
 */
export const scrollActive = sections => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    let sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link")
    }
  })
}

/**
 * @description: change background header
 * @param {*} header
 * @return {*}
 */
export const scrollHeader = header => {
  const scrollY = window.pageYOffset
  if (scrollY >= 200) {
    header.classList.add("scroll-header")
  } else {
    header.classList.remove("scroll-header")
  }
}

/**
 * @description: show scroll top
 * @param {*}
 * @return {*}
 */
export const funScrollTop = scrollTop => {
  if (scrollY >= 560) {
    scrollTop.classList.add("show-scroll")
  } else {
    scrollTop.classList.remove("show-scroll")
  }
}
