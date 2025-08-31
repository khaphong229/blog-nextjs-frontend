'use client';

import Image from 'next/image';
import React from 'react';
import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard';
import { BlurFade } from '@/components/BlurFade';
import myAvatar from '@/public/assets/images/myAvatar.jpg';
import BlurText from '../../../../../../components/BlurText/BlurText';

export default function Introduce() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="mx-auto px-8 w-full">
      <div className="flex flex-row justify-around items-center">
        <div>
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none color-primary-text">
              khaphong.dev
            </h2>
          </BlurFade>
          <BlurText
            text="Isn't this so cool?!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          <BlurFade delay={0.25 * 2} inView>
            <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
              Internship Frontend Developer
            </span>
          </BlurFade>
        </div>
        <Image src={myAvatar} alt="my avatar" className="rounded-full w-90 h-90 object-cover" />
        <ProfileCard
          name="Kha Phong"
          title="Fullstack Developer"
          handle="khaphong229"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/public/assets/images/myAvatar.jpg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
    </section>
  );
}
