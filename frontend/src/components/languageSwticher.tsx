import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { cn } from '../lib/utils'

function LanguageSwitcher() {
    const router = useRouter()
    const { locale, locales, asPath, pathname, query } = router

    return (
        <Menu as="div" className="relative z-50 text-left">
            <Menu.Button className="inline-flex">
                {locale?.toUpperCase() ?? 'EN'}
                <p className="font-bold">&nbsp; ˅</p>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {locales?.map((selectLocale) => (
                        <Menu.Item key={selectLocale}>
                            <Link
                                as={asPath}
                                locale={selectLocale}
                                href={{
                                    pathname,
                                    query,
                                }}
                                className={cn(
                                    locale === selectLocale ? 'bg-itsblue text-white' : '',
                                    'flex justify-center rounded-md px-1 py-1 text-sm'
                                )}
                            >
                                {selectLocale.toUpperCase()}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default LanguageSwitcher
