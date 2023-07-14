const main = document.querySelector('main')
const toc = document.querySelector('nav.toc')
let lastHeading = null

export async function currentHeading(container: HTMLElement = document.body, hDepth = 2) {
  let headerStr = 'h1'
  for (let i = 2; i < hDepth; i++) {
    headerStr += ', h'+i
  }
  let headings = [...document.querySelectorAll<HTMLElement>(`main :is(${headerStr})`)]
  const buffer = window.innerHeight - 200
  const bar = container.scrollTop + (window.innerHeight - buffer)

  let isFinalHeading = false
  const firstValidHeading = headings.find((h, idx) => {
    const found = bar < h.offsetTop

    isFinalHeading = !found && idx == headings.length -1

    return found
  })

  let targetHeading
  if (isFinalHeading) {
    targetHeading = headings.at(-1)
  } else if (firstValidHeading == headings.at(0)) {
    targetHeading = firstValidHeading
  } else {
    targetHeading = headings[headings.indexOf(firstValidHeading) - 1]
  }

  return targetHeading
}

async function activateAnchor(id: string) {
  const links = toc.querySelectorAll<HTMLAnchorElement>('a')
  links.forEach(a => {
    const li = a.parentElement
    li.classList.remove('active')
    const uncleGrandpa = li.parentElement.previousElementSibling
    uncleGrandpa.classList.remove('active')

  })

  links.forEach(a => {
    const li = a.parentElement
    const uncleGrandpa = li.parentElement.previousElementSibling
    if ('#'+id == a.getAttribute('href')) {
      const li = a.parentElement
      li.classList.add('active')

      if (uncleGrandpa.tagName == 'A') {
        uncleGrandpa.classList.add('active')
        console.log(uncleGrandpa.textContent, uncleGrandpa.tagName)
      }
    }
  })
}

async function updateTocOnScroll(container: HTMLElement) {
  const heading = await currentHeading(container, 3)
  if (heading == lastHeading) return
  lastHeading = heading

  activateAnchor(heading.id)
}

activateAnchor(document.querySelector('h1[id]').id)

main.addEventListener('scroll', async ev => {
  updateTocOnScroll(main)
})

window.addEventListener('scroll', async ev => {
  updateTocOnScroll(document.documentElement)
})