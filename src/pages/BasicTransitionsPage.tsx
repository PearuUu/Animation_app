import React, { Component } from 'react'
import BasePageLayout from '../layouts/BasePageLayout'
import AnimationShowcase from '../components/animation/AnimationShowcase';

export default class BasicTransitionsPage extends Component {

  render() {
   
    return (
      <BasePageLayout title="Basic Transitions">
        <AnimationShowcase title='Fade-in/out' />
      </BasePageLayout>
    );
  }
  
}
