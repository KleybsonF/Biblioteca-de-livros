'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce';

export const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);

    params.set("take", "1");
    params.set("page", "1");

    if(e.target.value) params.set('q', e.target.value);
    else {
      params.delete('q');
      params.delete('take');
      params.delete('page');
    }

    replace(`${pathname}?${params}`);
  }, 500);


  return (
    <div className="container flex items-center gap-2 rounded-md w-max bg-gray-700 p-2">
      <MdSearch />
      <input type="text" placeholder={placeholder} onChange={handleSearch} className='input bg-transparent border-none outline-none text-white' />
    </div>
  )
}
