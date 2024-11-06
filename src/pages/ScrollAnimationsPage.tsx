import React from 'react'
import BasePageLayout from '../layouts/BasePageLayout';
import ParallaxAnimation from '../components/animation/scroll/ParallaxAnimation';
import ShowOnScroll from '../components/animation/scroll/ShowOnScroll';
import Test from '../components/animation/Interactive/Test';

export default function ScrollAnimations() {
  return (
    <BasePageLayout title="Scroll Animations">
      <ParallaxAnimation />
      <ShowOnScroll />
      <Test />
    </BasePageLayout>
  );
}
