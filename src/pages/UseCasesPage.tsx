import React from 'react'
import BasePageLayout from '../layouts/BasePageLayout'
import TypingAnimation from '../components/animation/useCases/TypingAnimation'

export default function UseCasesPage() {
  return (
    <BasePageLayout title='Use cases' >
        <TypingAnimation />
    </BasePageLayout>
  )
}
