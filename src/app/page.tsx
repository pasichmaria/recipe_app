"use client"
import { Button } from '@/shared';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();
  return (
    <Button
      variant="primary"
      onClick={() => {
        router.push("/meals");
      }}
    >
      View meals and recipes
    </Button>
  );
}
