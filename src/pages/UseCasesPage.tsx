import React from 'react'
import BasePageLayout from '../layouts/BasePageLayout'
import TypingAnimation from '../components/animation/useCases/TypingAnimation'
import RouterAnimationDesc from '../components/animation/useCases/RouterAnimationDesc'
import LikeAnimation from '../components/animation/useCases/LikeAnimation'

export default function UseCasesPage() {
  return (
    <BasePageLayout title='Use cases' >
        <TypingAnimation />
        <RouterAnimationDesc />
        <LikeAnimation />
    </BasePageLayout>
  )
}
