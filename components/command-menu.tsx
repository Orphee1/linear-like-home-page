'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { Button } from './button'

import {
  AssignToIcon,
  BacklogIcon,
  NoPriorityIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  InProgressIcon,
  LabelIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
  HighIcon,
  MediumIcon,
  LowIcon,
  AddLabels,
} from './icons/command-bar'
import classNames from 'classnames'

const commandOptions = [
  {
    label: 'Assign to..',
    icon: AssignToIcon,
    subOptions: [
      { label: 'Jori', icon: PersonIcon },
      { label: 'Karri', icon: PersonIcon },
      { label: 'Tuomas', icon: PersonIcon },
    ],
  },
  {
    label: 'Change status...',
    icon: ChangeStatusIcon,
    subOptions: [
      { label: 'Backlog', icon: BacklogIcon },
      { label: 'Todo', icon: TodoIcon },
      { label: 'In Progress', icon: InProgressIcon },
      { label: 'Done', icon: DoneIcon },
    ],
  },
  {
    label: 'Change priority...',
    icon: ChangePriorityIcon,
    subOptions: [
      { label: 'No priority', icon: NoPriorityIcon },
      { label: 'Urgent', icon: UrgentIcon },
      { label: 'High', icon: HighIcon },
      { label: 'Medium', icon: MediumIcon },
      { label: 'Low', icon: LowIcon },
    ],
  },
  {
    label: 'Add labels...',
    icon: AddLabels,
    subOptions: [
      { label: 'Bug', icon: () => <LabelIcon type='bug' /> },
      { label: 'Feature', icon: () => <LabelIcon type='feature' /> },
      { label: 'Improvement', icon: () => <LabelIcon type='improvement' /> },
    ],
  },
] as const

const CommandMenu = () => {
  const [opened, setOpened] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const commandMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains('command-menu-button')
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node)
      setOpened(clickedOutside ? false : true)
    }
    window.addEventListener('click', toggleCommandMenu)
    return () => {
      window.removeEventListener('click', toggleCommandMenu)
    }
  }, [])

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions

    return options
  }, [selectedOption])

  useEffect(() => {
    if (!commandMenuRef.current) return
    commandMenuRef.current.classList.remove('animate-bounce')
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    commandMenuRef.current.clientWidth
    commandMenuRef.current.classList.add('animate-bounce')
  }, [selectedOption])

  return (
    <div className={classNames(opened && 'opened')} ref={commandMenuRef}>
      <div
        className={classNames(
          'flex flex-col items-start absolute left-[calc(50%+7.5rem)] md:left-1/2 -translate-x-1/2  w-[90vw] max-w-[64rem] rounded-lg bg-transparent-white border border-transparent-white transition-[transform,opacity] shadow-[rgb(0_0_0_/_35%)_0px_7px_32px]',
          opened && 'translate-y-[2.4rem] opacity-100',
          !opened && 'translate-y-[12.8rem] opacity-60'
        )}
      >
        <span className='bg-white/[0.05] text-white/50 text-xs px-2 leading-10 ml-4 mt-2'>
          LIN-111 Walkway lightning
        </span>
        <input
          placeholder='Type a command or search...'
          type='text'
          className='text-lg bg-transparent p-5 w-full outline-none'
        />
        <div className='w-full flex flex-col text-sm text-off-white'>
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => {
            return (
              <Button
                key={label}
                onClick={(ev) => {
                  const clickedRootItem = 'subOptions' in menuItem
                  setSelectedOption(clickedRootItem ? index : null)
                  if (!clickedRootItem) {
                    setOpened(false)
                    ev.stopPropagation()
                  }
                }}
                className='command-menu-button w-full rounded-none flex px-5 gap-3 h-[4.6rem] items-center hover:bg-white/[0.05] first:bg-white/[0.15]'
                variant='tertiary'
              >
                <Icon />
                {label}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CommandMenu
