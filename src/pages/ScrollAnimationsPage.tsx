import React from 'react'
import BasePageLayout from '../layouts/BasePageLayout';
import ParallaxAnimation from '../components/animation/scroll/ParallaxAnimation';

export default function ScrollAnimations() {
  return (
    <BasePageLayout title="Scroll Animations">
      <ParallaxAnimation />
    </BasePageLayout>
  );
}
