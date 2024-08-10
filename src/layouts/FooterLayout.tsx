interface FooterLayoutProps {
    children: React.ReactNode
}

const FooterLayout = ({ children }: FooterLayoutProps) => {
    return (
        <div className='border-t w-full'>
            <footer className='p-4 sm:p-4 md:p-16 lg:p-12 '>
                {children}
            </footer>
        </div>
    )
}

export default FooterLayout