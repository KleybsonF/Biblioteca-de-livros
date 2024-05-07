'use client'
import dotenv from 'dotenv';
dotenv.config();

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Pagination = ({count} : {
  count: number
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = parseInt(searchParams.get('page') || '1') - 1;
  const take = parseInt(searchParams.get('take') || process.env.NEXT_PUBLIC_TAKE!);

  const params = new URLSearchParams(searchParams);

  const hasPrev = take * page > 0;
  const hasNext = take * page + take < count;

  const handleChangePage = (type: string) => {
    type == 'prev'
    ? params.set('page', String(page))
    : params.set('page', String(page+2));
    replace(`${pathname}?${params}`);
  }

  return (
    <div className="container p-2 flex justify-between">
      <button className="button px-5 py-2 cursor-pointer" onClick={() => handleChangePage('prev')} disabled={!hasPrev}>Previous</button>
      <button className="button px-5 py-2 cursor-pointer" onClick={() => handleChangePage('next')} disabled={!hasNext}>Next</button>
    </div>
  )
}
