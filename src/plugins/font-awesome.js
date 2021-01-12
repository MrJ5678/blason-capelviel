/*
 * @Author: hhhhhq
 * @Date: 2021-01-11 10:29:44
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-11 10:30:00
 * @Description: file content
 */
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue"

library.add(fas, faTwitter, faInstagram)

export { FontAwesomeIcon }
