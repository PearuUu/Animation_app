import React from 'react'
import BasePageLayout from '../layouts/BasePageLayout'
import Test from '../components/animation/Interactive/Test'
import ChainSwipeAnimation from '../components/animation/chain/ChainSwipeAnimation'

export default function ChainAnmationsPage() {
  return (
    <BasePageLayout title='Chain animations'>
        <div>
            <ChainSwipeAnimation />
        </div>
    </BasePageLayout>
  )
}
