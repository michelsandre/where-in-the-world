'use client'
import { ActionIcon, Affix, Tooltip, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ArrowLineUpIcon } from '@phosphor-icons/react'

export const BackTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Affix position={{ bottom: 50, right: 30 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            size="xl"
            color="grape"
            variant="filled"
            radius="xl"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <Tooltip label="Back to top" offset={20} position="left">
              <ArrowLineUpIcon style={{ width: '60%', height: '60%' }} />
            </Tooltip>
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  )
}
