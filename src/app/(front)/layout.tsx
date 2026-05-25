'use client'

import { AppWrapper } from '@/components/layout/Wrapper'
import { PropsWithChildren } from 'react'

export default function LayoutClient({ children }: PropsWithChildren) {
  return <AppWrapper>{children}</AppWrapper>
}
