'use client'

import { MouseEvent, useEffect, useRef } from 'react'
import { Button, IconWrapper } from './button'
import { KeyboardIllustration } from './illustrations'

const shortcuts = [
  { text: 'Opens command line', keys: '⌘k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assign issue to', keys: 'a' },
  { text: 'Change issue status', keys: 's' },
  { text: 'Set issue priority', keys: 'p' },
  { text: 'Add issue labels', keys: 'l' },
  { text: 'Set due date', keys: '⇧d' },
  { text: 'Set parent issue', keys: '⇧⌘p' },
  { text: 'Add sub-issue', keys: '⇧⌘o' },
  { text: 'Create new issue', keys: 'c' },
  { text: 'Create new issue from template', keys: '⌥c' },
  { text: 'Move to project', keys: '⇧p' },
]

const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const illustrationWrapperRef = useRef<HTMLDivElement>(null)

  const timeoutRef = useRef<NodeJS.Timeout>(undefined)
  const activeShortCutIndex = useRef(0)

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(goToNextShortCut, 2000)
  }

  useEffect(() => {
    scheduleTimeout()
    return () => clearTimeout(timeoutRef.current)
    // eslint-disable-next-line
  }, [])

  const goToNextShortCut = () => {
    gotToShortCut((activeShortCutIndex.current + 1) % shortcuts.length)
  }

  const gotToShortCut = (index: number) => {
    clearTimeout(timeoutRef.current)
    if (!wrapperRef.current) return

    const shortCut = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`
    )

    if (!shortCut) return
    wrapperRef.current.scrollTo({
      left: shortCut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: 'smooth',
    })

    if (!illustrationWrapperRef.current) return
    illustrationWrapperRef.current
      .querySelectorAll('.active')
      .forEach((el) => el.classList.remove('active'))

    const keys = shortCut.dataset.keys || ''
    const keyArray = keys.split('')
    const keyElements = keyArray.map((key) =>
      illustrationWrapperRef.current?.querySelector(`[data-key='${key}']`)
    )
    keyElements.forEach((element) => element?.classList.add('active'))
    activeShortCutIndex.current = index
    scheduleTimeout()
  }

  const onButtonClick = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault()

    gotToShortCut(Number(ev.currentTarget.dataset.index))
  }

  return (
    <>
      <div
        ref={illustrationWrapperRef}
        className='mask-keyboard w-full h-full '
      >
        <KeyboardIllustration />
      </div>
      <div className='my-7 min-h-[4rem] w-full overflow-hidden'>
        <div
          ref={wrapperRef}
          className='mask-shortcutkeys flex max-w-full min-h-[4rem] overflow-auto snap-x snap-mandatory gap-2 pb-8'
        >
          {shortcuts.map((shortcut, index) => {
            return (
              <Button
                className='shrink-0 snap-center first:ml-[50vw] last:mr-[50vw]'
                key={shortcut.text}
                data-index={index}
                data-keys={shortcut.keys}
                onClick={onButtonClick}
                variant='secondary'
              >
                <IconWrapper className='uppercase'>{shortcut.keys}</IconWrapper>
                {shortcut.text}
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default KeyboardShortcuts
