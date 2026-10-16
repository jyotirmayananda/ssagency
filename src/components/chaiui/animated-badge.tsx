'use client'

import { motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * The hero pill (landing/animated-badge.tsx): a 300 by 20 gradient bar turns
 * behind a 1px gap every 4s, so an orange glint runs round the border. It
 * fades in and springs from 0.8 to 1. The glint stops for reduced motion.
 * Use one, above the hero headline.
 */
export function AnimatedBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={cn('relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-full p-px', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-5 w-[300px] rounded-full bg-linear-to-r from-transparent via-transparent to-orange-500 motion-safe:animate-chai-spin pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <motion.span
        className="relative z-10 max-w-full text-center rounded-full bg-neutral-50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-neutral-800 dark:bg-stone-900 dark:text-neutral-100"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}
