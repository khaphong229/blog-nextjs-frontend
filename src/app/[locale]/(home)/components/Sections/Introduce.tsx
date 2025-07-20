import Image from 'next/image';
import React from 'react';
import { BlurFade } from '@/components/BlurFade';
import myAvatar from '@/public/assets/images/myAvatar.jpg';

export default function Introduce() {
  return (
    <section className="mx-auto px-8 w-full">
      <div className="flex flex-row justify-around items-center">
        <div>
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none color-primary-text">
              khaphong.dev
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
              Internship Frontend Developer
            </span>
          </BlurFade>
        </div>
        <Image src={myAvatar} alt="my avatar" className="rounded-full w-90 h-90 object-cover" />
      </div>
    </section>
  );
}
