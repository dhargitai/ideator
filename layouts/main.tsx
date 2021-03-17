const MainLayout = ({
  children,
}: {
  children: React.PropsWithChildren<{ child?: string }>
}): JSX.Element => (
  <main className="container relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
    {children}
  </main>
)

export default MainLayout
