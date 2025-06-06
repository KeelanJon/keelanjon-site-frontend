'use client'

import React from 'react'
import { Badge } from './ui/badge'
import { Zap } from 'lucide-react'
import { motion } from "framer-motion"
import { RainbowButton } from "@/components/magicui/rainbow-button"


  type Props = {
    title: string,
    subtitle: string,
    description: string,
    technology: {id: number, name: string}[],
    liveProject: string,
  }

export default function PageHeader(props: Props) {

  const title = props.title
  const description = props.description ? props.description : "This is a filler description"
  const subtitle = props.subtitle ? props.subtitle : "This is a subtitle"
  const technology = props.technology
  const live_project = props.liveProject ? props.liveProject : null

  return (
     <section className="text-center pb-12 pt-32 md:pt-48 md:pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        
        className="px-6 lg:max-w-3xl mx-auto">

        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          {subtitle}
        </Badge>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-5xl font-bold !leading-[1.2] tracking-tight">
          {title}
        </h1>
          <p className="mt-4 text-muted-foreground text-md leading-relaxed md:px-20">
            {description}
          </p>
          <div className="tech mt-6">
            {technology &&
              technology.map((tech) => {

                return <Badge variant="secondary" key={tech.id} className='mr-2'>{tech.name}</Badge>
              })
            }
          </div>
            {live_project && (
              <div className="live-link mt-8">
                <a href={live_project} target='_blank'>
                  <RainbowButton variant="outline" className="rounded-full">
                    See it in action
                  </RainbowButton>
                </a>
              </div>
            )}
      </motion.div>
    </section>
  )
}
