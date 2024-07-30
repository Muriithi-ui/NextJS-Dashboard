import SideNav from '@/app/ui/dashboard/sidenav'; //importing the <SideNav /> component into the layout. Any component imported into this this file will be part of the layout. 

export default function Layout({ children }: { children: React.ReactNode}) {   //The <Layout /> component receives a `children` prop. This child can either be a page or another layout. In this case, the pages inside `/dashboard` will automatically be nested inside a `<Layout />`
   return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:-64">
            <SideNav />
    </div>
     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
   ) 
}

