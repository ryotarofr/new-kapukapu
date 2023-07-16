"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';

import { useUser } from '@/hooks/useUser';


export function PostRoute({ children }: any) {
  const router = useRouter();
  const { isLoading, subscription, user } = useUser()

  useEffect(() => {
    if (!isLoading && !user && !subscription) {
      router.push('/')
    }
  }, [isLoading, user, subscription, router])

  if (!isLoading && !user && !subscription) {
    return null;
  }

  return <>{children}</>;
}
